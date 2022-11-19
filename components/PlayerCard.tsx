import { Player } from "../types/GameData";
import assist from "../public/Assist.svg";
import save from "../public/Save.svg";
import goal from "../public/Goal.svg";
import demo from "../public/Demo.svg";
import shot from "../public/Shot.svg";
import Image from "next/image";
import { Event } from "../types/GameData";
import ScoreEvent from "./ScoreEvent";

export default function PlayerCard({
  player,
  index,
  primaryColor,
  secondaryColor,
  textColorOnSecondary,
  event,
  setPlayerEvents,
  playerEvents,
}: {
  player: Player;
  index: number;
  primaryColor: string;
  secondaryColor: string;
  textColorOnSecondary: string;
  event: Event;
  setPlayerEvents: Function;
  playerEvents: {
    [playerId: string]: Event;
  };
}) {
  const eventImgs: { [name: string]: string } = {
    Goal: goal,
    Demolish: demo,
    Shot: shot,
    Save: save,
    EpicSave: save,
    Assist: assist,
  };

  return (
    <div
      className="player-card-container"
      style={
        player.team
          ? {
              position: "absolute",
              right: 0,
              top: index * 50 + "px",
            }
          : {
              position: "absolute",
              left: 0,
              top: index * 50 + "px",
            }
      }
    >
      <ScoreEvent
        primaryColor={primaryColor}
        eventImgs={eventImgs}
        event={event}
        team={player.team}
        setPlayerEvents={setPlayerEvents}
        playerEvents={playerEvents}
      />
      <div
        className="player-card"
        style={{ width: "320px", height: "45px", position: "relative" }}
      >
        <div
          style={{
            position: "absolute",
            height: "40px",
            width: "300px",
            top: "0px",
            left: "0px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <h1
            style={{
              fontFamily: "The Bold Font",
              fontSize: "24px",
              color: "#" + textColorOnSecondary,
              textDecoration: player.isDead ? "line-through" : "",
              opacity: player.isDead ? 0.75 : 1,
            }}
          >
            {player.name}
          </h1>
          {player.isDead ? (
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <p
                style={{
                  fontFamily: "Mont",
                  fontSize: "16px",
                  fontWeight: "100",
                  color: "#" + textColorOnSecondary,
                }}
              >
                DEMOED
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <p
                style={{
                  fontFamily: "Mont",
                  fontSize: "16px",
                  fontWeight: "100",
                  color: "#" + textColorOnSecondary,
                }}
              >
                BOOST
              </p>
              <h1
                style={{
                  fontFamily: "The Bold Font",
                  fontSize: "24px",
                  paddingLeft: "6px",
                  color: "#" + textColorOnSecondary,
                }}
              >
                {player.boost}
              </h1>
            </div>
          )}
        </div>
        <svg
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 40"
          style={{ width: "320px", height: "40px" }}
        >
          <defs>
            <style>{`
              .cls-leaderboard-p${player.id}-1 {
                fill: #${primaryColor};
              }
              .cls-leaderboard-p${player.id}-2 {
                fill: #${secondaryColor};
              }
            `}</style>
          </defs>
          <g id="Layer_1-2">
            <g>
              <rect
                className={`cls-leaderboard-p${player.id}-2`}
                x="0"
                y="0"
                width="320"
                height="40"
              />
              <path
                className={`cls-leaderboard-p${player.id}-1`}
                d="M0,37.18v1.18c.92,.15,1.83,.3,2.77,.44,2.54,.36,4.93,.76,7.19,1.2h5.45c-3.72-.9-7.85-1.7-12.47-2.35C1.94,37.51,.98,37.34,0,37.18Z"
              />
              <path
                className={`cls-leaderboard-p${player.id}-1`}
                d="M77.54,5.09c8.76,4.84,17.81,9.85,27.6,14.14,18.4,8.05,36.9,14.86,54.98,20.77h1.24c-18.43-5.99-37.3-12.92-56.07-21.13-9.77-4.28-18.82-9.28-27.57-14.12C74.84,3.15,71.96,1.56,69.07,0h-.82c3.1,1.67,6.19,3.37,9.29,5.09Z"
              />
              <path
                className={`cls-leaderboard-p${player.id}-1`}
                d="M62.92,10.3c7.98,4.19,16.23,8.52,25.15,12.19,15.88,6.53,31.62,12.33,46.79,17.52h1.6c-15.6-5.3-31.83-11.26-48.2-17.99-8.89-3.66-17.13-7.98-25.1-12.16C56.6,6.4,50.12,3.01,43.38,0h-1.28c7.12,3.11,13.93,6.68,20.83,10.3Z"
              />
              <path
                className={`cls-leaderboard-p${player.id}-1`}
                d="M5.89,30.58C3.92,29.99,1.96,29.39,0,28.82v1.08c1.86,.54,3.72,1.11,5.59,1.68,4.55,1.38,9.26,2.82,14.21,3.96,5.96,1.37,11.54,2.86,16.76,4.47h3.43c-6.12-1.99-12.78-3.82-19.96-5.48-4.92-1.13-9.6-2.56-14.14-3.94Z"
              />
              <path
                className={`cls-leaderboard-p${player.id}-1`}
                d="M92.91,0h-.52c9.47,5.47,19.26,11.11,29.84,15.97,20.8,9.56,42.29,17.4,63.55,24.03h.87c-21.51-6.68-43.27-14.59-64.32-24.26C111.92,10.94,102.26,5.39,92.91,0Z"
              />
              <path
                className={`cls-leaderboard-p${player.id}-1`}
                d="M48.65,14.97C36.11,8.83,23.91,2.86,9.12,0h-3.85c16.44,2.5,29.57,8.92,43.1,15.55,7.18,3.52,14.61,7.15,22.61,10.2,13.49,5.13,26.48,9.87,38.81,14.26h1.93c-12.83-4.55-26.41-9.5-40.51-14.86-7.98-3.03-15.39-6.66-22.56-10.17Z"
              />
              <path
                className={`cls-leaderboard-p${player.id}-1`}
                d="M139.32,12.72c23.22,11.12,47.82,19.96,72.4,27.28h.45c-24.71-7.34-49.46-16.22-72.8-27.4C131.23,8.7,123.52,4.37,116.06,0h-.26c7.53,4.41,15.3,8.78,23.52,12.72Z"
              />
              <path
                className={`cls-leaderboard-p${player.id}-1`}
                d="M19.96,25.33C13.39,22.8,6.95,20.32,0,18.51v.94c6.83,1.79,13.17,4.23,19.63,6.72,5.49,2.12,11.17,4.31,17.22,6.09h0c8.67,2.55,16.55,5.14,23.76,7.73h2.65c-7.85-2.88-16.52-5.77-26.16-8.6-6.01-1.77-11.67-3.95-17.15-6.06Z"
              />
              <path
                className={`cls-leaderboard-p${player.id}-1`}
                d="M34.24,20.13C23.32,15.27,12.7,10.54,0,8.33v.8c12.57,2.22,23.1,6.9,33.92,11.71,6.36,2.83,12.93,5.75,19.99,8.17,11.15,3.81,21.51,7.48,31.16,11h2.27c-10.21-3.73-21.25-7.65-33.17-11.73-7.02-2.4-13.58-5.32-19.92-8.14Z"
              />
            </g>
          </g>
        </svg>
        <div
          style={{
            width: "320px",
            height: "5px",
            position: "absolute",
            bottom: "0px",
            left: "0px",
          }}
        >
          <div
            style={{
              width: player.boost + "%",
              backgroundColor: "#" + primaryColor,
              height: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
