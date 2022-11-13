import { Player } from "../types/GameData";

export default function CurrentPlayer({
  player,
  primaryColor,
  secondaryColor,
  textColorOnPrimary,
  textColorOnSecondary,
}: {
  player: Player;
  primaryColor: string;
  secondaryColor: string;
  textColorOnPrimary: string;
  textColorOnSecondary: string;
}) {
  return (
    <div
      className="current-player"
      style={{
        width: "900px",
        height: "50px",
        position: "absolute",
        left: "510px",
        bottom: "0px",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "50px",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "The Bold Font",
            fontSize: "34px",
            color: "#" + textColorOnSecondary,
            paddingLeft: "12px",
          }}
        >
          {player.name}
        </h1>
      </div>
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "50px",
          top: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <h1
            style={{
              fontFamily: "The Bold Font",
              fontSize: "28px",
              color: "#" + textColorOnPrimary,
            }}
          >
            {player.score}
          </h1>
          <p
            style={{
              fontFamily: "Mont",
              fontSize: "16px",
              fontWeight: "100",
              color: "#" + textColorOnPrimary,
              paddingLeft: "6px",
            }}
          >
            SCORE
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <h1
            style={{
              fontFamily: "The Bold Font",
              fontSize: "28px",
              color: "#" + textColorOnPrimary,
            }}
          >
            {player.goals}
          </h1>
          <p
            style={{
              fontFamily: "Mont",
              fontSize: "16px",
              fontWeight: "100",
              color: "#" + textColorOnPrimary,
              paddingLeft: "6px",
            }}
          >
            GOALS
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <h1
            style={{
              fontFamily: "The Bold Font",
              fontSize: "28px",
              color: "#" + textColorOnPrimary,
            }}
          >
            {player.shots}
          </h1>
          <p
            style={{
              fontFamily: "Mont",
              fontSize: "16px",
              fontWeight: "100",
              color: "#" + textColorOnPrimary,
              paddingLeft: "6px",
            }}
          >
            SHOTS
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <h1
            style={{
              fontFamily: "The Bold Font",
              fontSize: "28px",
              color: "#" + textColorOnPrimary,
            }}
          >
            {player.assists}
          </h1>
          <p
            style={{
              fontFamily: "Mont",
              fontSize: "16px",
              fontWeight: "100",
              color: "#" + textColorOnPrimary,
              paddingLeft: "6px",
            }}
          >
            ASST
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <h1
            style={{
              fontFamily: "The Bold Font",
              fontSize: "28px",
              color: "#" + textColorOnPrimary,
            }}
          >
            {player.saves}
          </h1>
          <p
            style={{
              fontFamily: "Mont",
              fontSize: "16px",
              fontWeight: "100",
              color: "#" + textColorOnPrimary,
              paddingLeft: "6px",
            }}
          >
            SAVES
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <h1
            style={{
              fontFamily: "The Bold Font",
              fontSize: "28px",
              color: "#" + textColorOnPrimary,
            }}
          >
            {player.demos}
          </h1>
          <p
            style={{
              fontFamily: "Mont",
              fontSize: "16px",
              fontWeight: "100",
              color: "#" + textColorOnPrimary,
              paddingLeft: "6px",
            }}
          >
            DEMOS
          </p>
        </div>
      </div>
      <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 50">
        <defs>
          <style>{`
      .cls-activeplayer-1 {
        fill: #${primaryColor};
      }
      .cls-activeplayer-2 {
        fill: #${secondaryColor};
      }
      .cls-activeplayer-3 {
        fill: none;
      }
    `}</style>
        </defs>
        <g id="Layer_1-2">
          <g>
            <rect className="cls-activeplayer-2" width="300" height="50" />
            <rect className="cls-activeplayer-3" width="300" height="50" />
            <polygon
              className="cls-activeplayer-1"
              points="600 0 300 0 300 50 600 50 900 50 900 0 600 0"
            />
            <g>
              <path
                className="cls-activeplayer-1"
                d="M60.73,4c5.5,1.69,10.2,2.89,14.78,3.76,4.95,.94,10.28,1.64,15.86,2.08,17.36,1.39,34.61,.02,51.3-1.31,8.67-.69,17.64-1.41,26.46-1.71,28.27-.98,51.12,3.15,67.92,12.29,2.3,1.26,4.52,2.64,6.6,4.1,9.48,6.65,16.46,16.26,21.6,26.8h.6c-5.18-10.71-12.25-20.49-21.89-27.24-2.1-1.47-4.33-2.86-6.65-4.13-16.89-9.19-39.84-13.36-68.2-12.36-8.83,.31-17.8,1.02-26.48,1.72-16.67,1.33-33.9,2.71-51.21,1.31-5.56-.43-10.88-1.13-15.8-2.07-4.56-.87-9.24-2.06-14.72-3.74-3.39-1.04-6.84-2.19-10.45-3.48h-1.59c4.13,1.5,8.04,2.82,11.88,4Z"
              />
              <path
                className="cls-activeplayer-1"
                d="M20.83,5.84c5.46,2.82,10.07,4.92,14.53,6.59,3.6,1.35,6.91,2.52,10.1,3.56,3.88,1.27,7.18,2.2,10.38,2.94,3.52,.81,7.25,1.49,11.08,2.02,11.52,1.63,22.92,1.83,33.95,2.02,6.57,.12,13.36,.24,19.99,.66,19.75,1.27,34.97,5.27,46.53,12.22,1.52,.91,3.04,1.94,4.53,3.05,4.11,3.08,7.57,6.89,10.5,11.1h.92c-3.03-4.45-6.65-8.47-10.97-11.71-1.5-1.13-3.05-2.17-4.59-3.09-11.67-7.01-27-11.05-46.88-12.33-6.65-.43-13.45-.55-20.03-.66-11-.19-22.38-.39-33.85-2.02-3.81-.52-7.52-1.2-11.02-2.01-3.18-.73-6.45-1.66-10.31-2.92-3.18-1.04-6.48-2.2-10.07-3.55-4.43-1.66-9.02-3.75-14.45-6.55-3.44-1.78-6.55-3.49-9.41-5.16h-1.5c3.17,1.89,6.66,3.82,10.57,5.84Z"
              />
              <path
                className="cls-activeplayer-1"
                d="M40.89,5.77c4.33,1.62,8.32,3,12.21,4.22,4.7,1.48,8.7,2.55,12.58,3.35,4.23,.88,8.77,1.57,13.47,2.05,14.47,1.53,28.83,.96,42.72,.4,7.59-.3,15.44-.62,23.13-.57,24.24,.14,42.96,4.15,57.23,12.26,1.89,1.08,3.76,2.28,5.56,3.57,6.82,4.91,12.14,11.57,16.3,18.95h.74c-4.23-7.58-9.66-14.43-16.66-19.48-1.82-1.31-3.71-2.52-5.62-3.61-14.36-8.17-33.19-12.21-57.54-12.34-7.71-.05-15.57,.27-23.16,.57-13.86,.55-28.2,1.12-42.62-.4-4.69-.48-9.2-1.17-13.41-2.04-3.86-.8-7.84-1.86-12.51-3.33-3.87-1.22-7.86-2.6-12.18-4.21-3.77-1.41-7.61-3.09-11.78-5.16h-1.46c4.65,2.35,8.87,4.22,13.02,5.77Z"
              />
              <path
                className="cls-activeplayer-1"
                d="M85.34,2.17c5.67,1.01,11.81,1.72,18.25,2.11,20.35,1.26,40.61-.95,60.2-3.09,3.69-.4,7.44-.8,11.2-1.19h-4.24c-2.35,.25-4.69,.51-7.01,.76-19.57,2.13-39.81,4.34-60.13,3.09-6.43-.39-12.55-1.09-18.2-2.1-2.66-.47-5.35-1.05-8.17-1.74h-1.77c3.45,.89,6.69,1.6,9.87,2.17Z"
              />
              <path
                className="cls-activeplayer-1"
                d="M136.59,46.07c-1.19-.94-2.38-1.81-3.56-2.58-9-5.87-20.84-9.9-36.19-12.31-5.78-.91-11.73-1.55-17.49-2.17-7.96-.86-16.18-1.74-24.5-3.37-3.04-.59-5.94-1.26-8.63-1.98-2.46-.66-5.04-1.46-8.11-2.51-2.5-.86-5.1-1.8-7.96-2.88-3.5-1.32-7.05-2.88-11.52-5.06-3.33-1.62-7.25-3.57-11.04-5.75-2.72-1.56-5.23-2.59-7.58-3.19v.91c2.22,.59,4.59,1.57,7.15,3.03,3.81,2.19,7.75,4.15,11.1,5.78,4.5,2.19,8.07,3.76,11.59,5.09,2.87,1.08,5.48,2.03,7.99,2.89,3.09,1.06,5.69,1.87,8.17,2.53,2.71,.72,5.63,1.39,8.69,1.99,8.35,1.63,16.6,2.52,24.57,3.38,5.75,.62,11.69,1.26,17.45,2.17,15.23,2.39,26.96,6.38,35.85,12.18,1.15,.75,2.33,1.6,3.49,2.53,1.26,1,2.43,2.11,3.55,3.25h1.21c-1.31-1.4-2.7-2.73-4.22-3.93Z"
              />
              <path
                className="cls-activeplayer-1"
                d="M271.87,10.73c2.65,1.41,5.22,2.97,7.64,4.62,8.48,5.82,15.18,13.71,20.49,22.59v-.74c-5.71-9.44-12.48-16.88-20.24-22.21-2.43-1.66-5.01-3.23-7.68-4.65-9.07-4.79-19.44-8.22-31.22-10.34h-2.53c12.76,2.06,23.89,5.62,33.54,10.73Z"
              />
              <path
                className="cls-activeplayer-1"
                d="M0,26.95c18.34,3.44,35.9,12.67,49.85,23.05h1.8C37.35,39.14,19.1,29.38,0,25.84v1.11Z"
              />
              <path
                className="cls-activeplayer-1"
                d="M55.64,34.64c-4.21-1.11-8.56-2.25-12.94-3.54-2.16-.63-4.27-1.29-6.25-1.95-1.78-.59-3.67-1.26-5.92-2.11-1.94-.72-3.88-1.46-5.86-2.22-3.02-1.16-5.92-2.4-8.61-3.57l-1.3-.57c-2.35-1.02-4.78-2.07-7.11-3.18-2.74-1.31-5.26-2.04-7.64-2.39v1c2.26,.34,4.65,1.04,7.22,2.27,2.35,1.12,4.78,2.18,7.14,3.2l1.3,.57c2.7,1.17,5.61,2.42,8.65,3.58,1.98,.76,3.93,1.5,5.87,2.23,2.27,.85,4.16,1.52,5.96,2.12,2,.66,4.11,1.32,6.28,1.96,4.4,1.29,8.76,2.44,12.97,3.54,5.94,1.56,11.55,3.03,17.11,4.85,8.79,2.86,15.73,5.95,21.45,9.57h1.8c-6.03-4.02-13.41-7.4-22.95-10.5-5.59-1.82-11.22-3.3-17.17-4.86Z"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
