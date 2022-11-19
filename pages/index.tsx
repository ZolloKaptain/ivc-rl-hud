import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Boost from "../components/Boost/Boost";
import contrast from "../components/Contrast";
import CurrentPlayer from "../components/CurrentPlayer";
import PlayerCard from "../components/PlayerCard";
import ReplayOverlay from "../components/Replay";
import ScoreHud from "../components/ScoreHud";
import {
  GameUpdate,
  Player,
  SeriesScore,
  Team,
  Event,
} from "../types/GameData";

export default function Hud() {
  const ws = useRef<WebSocket | null>(null);
  const router = useRouter();
  const bestOfQuery: string | undefined = Array.isArray(router.query.bestof)
    ? router.query.bestof.join("")
    : router.query.bestof;
  const rightScoreQuery: number = router.query.right
    ? Number.parseInt(
        Array.isArray(router.query.right)
          ? router.query.right.join("")
          : router.query.right
      )
    : 0; // Allows score to be set from query params should something go wrong
  const leftScoreQuery: number = router.query.left
    ? Number.parseInt(
        Array.isArray(router.query.left)
          ? router.query.left.join("")
          : router.query.left
      )
    : 0;
  const seriesLength = bestOfQuery ? Number.parseInt(bestOfQuery) : 3;
  let [seriesScore, setSeriesScore] = useState<SeriesScore>([
    leftScoreQuery,
    rightScoreQuery,
  ]);
  let [gameData, setGameData] = useState<GameUpdate | null>(null);
  let [playerEvents, setPlayerEvents] = useState<{ [playerId: string]: Event }>(
    {}
  );

  useEffect(() => {
    if (!ws.current) {
      ws.current = new WebSocket(
        "ws://" + (router.query.host ? router.query.host : "localhost:49322")
      );
      ws.current.onopen = () => {
        ws.current?.send(
          JSON.stringify({
            event: "wsRelay:register",
            data: "game:update_state",
          })
        );
        ws.current?.send(
          JSON.stringify({
            event: "wsRelay:register",
            data: "game:match_ended",
          })
        );
        ws.current?.send(
          JSON.stringify({
            event: "wsRelay:register",
            data: "game:match_created",
          })
        );
        ws.current?.send(
          JSON.stringify({
            event: "wsRelay:register",
            data: "game:statfeed_event",
          })
        );
      };
      ws.current.onclose = () => console.log("close :c");
    }
  }, []);

  useEffect(() => {
    if (!ws.current) return;

    ws.current.onmessage = (e) => {
      const res = JSON.parse(e.data);
      if (res.event === "game:update_state")
        setGameData(res.data as GameUpdate);
      else if (res.event === "game:match_ended") {
        let newScore: SeriesScore = [...seriesScore];
        newScore[res.data.winner_team_num] =
          newScore[res.data.winner_team_num] + 1;
        setSeriesScore(newScore);
      } else if (res.event === "game:match_created") {
        if (
          seriesScore[0] >= Math.ceil(seriesLength / 2) ||
          seriesScore[1] >= Math.ceil(seriesLength / 2)
        ) {
          setSeriesScore([0, 0]);
        }
      } else if (res.event === "game:statfeed_event") {
        let data: Event = res.data as Event;
        if (!gameData) return;
        if (
          !new Set([
            "Goal",
            "Demolish",
            "Shot",
            "Save",
            "EpicSave",
            "Assist",
          ]).has(data.event_name)
        ) {
          return; // Do not add if event not implemented
        }
        let newPlayerEvents = { ...playerEvents };
        newPlayerEvents[data.main_target.id] = data;
        setPlayerEvents(newPlayerEvents);
      }
    };
  }, [gameData, seriesScore, playerEvents]);

  if (!gameData) return <></>;

  const textColors = [
    {
      textColorOnPrimary:
        contrast(gameData.game.teams[0].color_primary, "FFFFFF") >
        contrast(gameData.game.teams[0].color_primary, "000000")
          ? "FFFFFF"
          : "000000",
      textColorOnSecondary:
        contrast(gameData.game.teams[0].color_secondary, "FFFFFF") >
        contrast(gameData.game.teams[0].color_secondary, "000000")
          ? "FFFFFF"
          : "000000",
    },
    {
      textColorOnPrimary:
        contrast(gameData.game.teams[1].color_primary, "FFFFFF") >
        contrast(gameData.game.teams[1].color_primary, "000000")
          ? "FFFFFF"
          : "000000",
      textColorOnSecondary:
        contrast(gameData.game.teams[1].color_secondary, "FFFFFF") >
        contrast(gameData.game.teams[1].color_secondary, "000000")
          ? "FFFFFF"
          : "000000",
    },
  ];

  return (
    <>
      <ReplayOverlay isReplay={gameData.game.isReplay} />
      {gameData.game.hasTarget &&
        !gameData.game.isReplay &&
        (() => {
          let target: Player = gameData.players[gameData.game.target];
          let targetTeam: Team = gameData.game.teams[target.team];
          return (
            <>
              <CurrentPlayer
                player={target}
                primaryColor={targetTeam.color_primary}
                secondaryColor={targetTeam.color_secondary}
                textColorOnPrimary={textColors[target.team].textColorOnPrimary}
                textColorOnSecondary={
                  textColors[target.team].textColorOnSecondary
                }
              />
              <Boost
                boost={target.boost}
                primaryColor={targetTeam.color_primary}
                secondaryColor={targetTeam.color_secondary}
                textColorOnPrimary={textColors[target.team].textColorOnPrimary}
                textColorOnSecondary={
                  textColors[target.team].textColorOnSecondary
                }
              />
            </>
          );
        })()}
      <ScoreHud
        teams={gameData.game.teams}
        isOT={gameData.game.isOT}
        time={gameData.game.time_seconds}
        series={seriesScore}
        seriesLength={seriesLength}
        textColors={textColors}
      />
      {Object.keys(gameData.players) // SCOREBOARD LEFT TEAM
        .filter((key) => gameData!.players[key].team === 0)
        .map((playerId, i) => {
          let player = gameData!.players[playerId];
          let team = gameData!.game.teams[player.team];
          return (
            <PlayerCard
              player={player}
              index={i}
              primaryColor={team.color_primary}
              secondaryColor={team.color_secondary}
              textColorOnSecondary={
                textColors[player.team].textColorOnSecondary
              }
              event={playerEvents[playerId]}
              setPlayerEvents={setPlayerEvents}
              playerEvents={playerEvents}
            />
          );
        })}
      {Object.keys(gameData.players) // SCOREBOARD RIGHT TEAM
        .filter((key) => gameData!.players[key].team === 1)
        .map((playerId, i) => {
          let player = gameData!.players[playerId];
          let team = gameData!.game.teams[player.team];
          return (
            <PlayerCard
              player={player}
              index={i}
              primaryColor={team.color_primary}
              secondaryColor={team.color_secondary}
              textColorOnSecondary={
                textColors[player.team].textColorOnSecondary
              }
              event={playerEvents[playerId]}
              setPlayerEvents={setPlayerEvents}
              playerEvents={playerEvents}
            />
          );
        })}
    </>
  );
}
