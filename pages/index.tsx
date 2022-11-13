import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Boost from "../components/Boost/Boost";
import contrast from "../components/Contrast";
import CurrentPlayer from "../components/CurrentPlayer";
import PlayerCard from "../components/PlayerCard";
import ReplayOverlay from "../components/Replay";
import ScoreHud from "../components/ScoreHud";
import { GameUpdate, Player, SeriesScore, Team } from "../types/GameData";

export default function Hud() {
  const ws = useRef<WebSocket | null>(null);
  const router = useRouter();
  let [seriesScore, setSeriesScore] = useState<SeriesScore>({});
  let [gameData, setGameData] = useState<GameUpdate | null>(null);

  useEffect(() => {
    if (!ws.current)
      ws.current = new WebSocket(
        "ws://" + (router.query.host ? router.query.host : "localhost:49322")
      );
    ws.current.onopen = () => {
      ws.current?.send(
        JSON.stringify({ event: "wsRelay:register", data: "game:update_state" })
      );
      ws.current?.send(
        JSON.stringify({
          event: "wsRelay:register",
          data: "game:match_ended",
        })
      );
    };
    ws.current.onclose = () => console.log("close :c");
    ws.current.onmessage = (e) => {
      const res = JSON.parse(e.data);
      if (res.event === "game:update_state")
        setGameData(res.data as GameUpdate);
      if (res.event === "game:match_ended") {
        let newScore = { ...seriesScore };
        newScore[res.data.winner_team_num] =
          newScore[res.data.winner_team_num] + 1 || 1;
        setSeriesScore(newScore);
      }
    };
  }, []);

  if (!gameData) return <></>;

  const textColors = [
    {
      textColorOnPrimary:
        contrast(
          gameData.game.teams[0].color_primary,
          gameData.game.teams[0].color_secondary
        ) >= 4.5
          ? gameData.game.teams[0].color_secondary
          : contrast(gameData.game.teams[0].color_secondary, "FFFFFF") >
            contrast(gameData.game.teams[0].color_secondary, "000000")
          ? "FFFFFF"
          : "000000",
      textColorOnSecondary:
        contrast(
          gameData.game.teams[0].color_primary,
          gameData.game.teams[0].color_secondary
        ) >= 4.5
          ? gameData.game.teams[0].color_primary
          : contrast(gameData.game.teams[0].color_secondary, "FFFFFF") >
            contrast(gameData.game.teams[0].color_secondary, "000000")
          ? "FFFFFF"
          : "000000",
    },
    {
      textColorOnPrimary:
        contrast(
          gameData.game.teams[1].color_primary,
          gameData.game.teams[1].color_secondary
        ) >= 4.5
          ? gameData.game.teams[1].color_secondary
          : contrast(gameData.game.teams[1].color_secondary, "FFFFFF") >
            contrast(gameData.game.teams[1].color_secondary, "000000")
          ? "FFFFFF"
          : "000000",
      textColorOnSecondary:
        contrast(
          gameData.game.teams[1].color_primary,
          gameData.game.teams[1].color_secondary
        ) >= 4.5
          ? gameData.game.teams[1].color_primary
          : contrast(gameData.game.teams[1].color_secondary, "FFFFFF") >
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
            />
          );
        })}
    </>
  );
}
