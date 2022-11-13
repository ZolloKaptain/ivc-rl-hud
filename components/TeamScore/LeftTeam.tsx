import { Team } from "../../types/GameData";

export default function LeftTeam({
  team,
  seriesScore,
  textColorOnPrimary,
  textColorOnSecondary,
}: {
  team: Team;
  seriesScore: number;
  textColorOnPrimary: string;
  textColorOnSecondary: string;
}) {
  return (
    <>
      {(() => {
        let seriesScoreIndicators = [];
        for (let i = 0; i < seriesScore; i++) {
          seriesScoreIndicators.push(
            <div
              style={{
                width: "20px",
                height: "4px",
                position: "absolute",
                right: 32 * i + 12 + "px",
                bottom: "3px",
                backgroundColor: "#" + textColorOnPrimary,
              }}
            ></div>
          );
        }
        return seriesScoreIndicators;
      })()}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "70px",
          width: "290px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            color: "#" + textColorOnSecondary,
            fontFamily: "TheBoldFont",
            fontSize: "45px",
            margin: 0,
            padding: 0,
            lineHeight: "45px",
          }}
        >
          {team.name}
        </h1>
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "70px",
          width: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Mont",
            fontSize: "64px",
            margin: 0,
            padding: 0,
            lineHeight: "64px",
            color: "#" + textColorOnPrimary,
          }}
        >
          {team.score}
        </h1>
      </div>

      <svg
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 360 80"
        style={{ height: "80px", width: "360px" }}
      >
        <defs>
          <style>
            {`
        .cls-team-L-1 {
          fill: #${team.color_primary};
        }
        .cls-team-L-2 {
          fill: none;
        }
        .cls-team-L-3 {
          fill: url(#gradient-team-L);
        }
      `}
          </style>
          <linearGradient
            id="gradient-team-L"
            x1="0"
            y1="35"
            x2="290"
            y2="35"
            gradientTransform="translate(290 70) rotate(180)"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0"
              stop-color={`#${team.color_secondary}`}
              stop-opacity="1"
            />
            <stop offset="1" stop-color={`#${team.color_secondary}`} />
          </linearGradient>
        </defs>
        <g id="Layer_1-2">
          <g>
            <rect
              className="cls-team-L-3"
              x="0"
              y="0"
              width="290"
              height="70"
              transform="translate(290 70) rotate(-180)"
            />
            <g>
              <path
                className="cls-team-L-2"
                d="M231.16,0H0V70H102.05C148.74,49.61,194.97,27.86,231.16,0Z"
              />
              <path
                className="cls-team-L-1"
                d="M127.02,70C172.73,48.89,219.54,27.11,258.03,0h-.61c-38.58,27.09-85.48,48.87-131.22,70h.83Z"
              />
              <path
                className="cls-team-L-1"
                d="M102.49,70C149.14,49.62,195.3,27.87,231.45,0h-.28c-36.2,27.86-82.42,49.61-129.11,70h.43Z"
              />
              <path
                className="cls-team-L-1"
                d="M154.01,70h1.15c4.85-2.45,9.78-4.92,14.85-7.46C208.75,43.11,248.49,23.17,283.69,0h-.95c-35.02,22.97-74.49,42.78-112.97,62.08-5.39,2.7-10.62,5.33-15.77,7.92Z"
              />
              <path
                className="cls-team-L-1"
                d="M272.44,70h1.4c4.8-5.32,10.3-10.41,16.16-15.28v-1.35c-6.4,5.28-12.4,10.81-17.56,16.64Z"
              />
              <path
                className="cls-team-L-1"
                d="M225.26,70h1.46c8.65-6.39,17.9-12.42,27.14-18.13,11.63-7.19,23.78-14.88,36.14-22.83v-1.03c-12.51,8.05-24.82,15.85-36.59,23.12-9.6,5.93-19.2,12.21-28.14,18.87Z"
              />
              <path
                className="cls-team-L-1"
                d="M197.06,63.94c-3.48,1.93-7.05,3.95-10.67,6.06h1.38c3.26-1.89,6.48-3.71,9.63-5.46,3.57-1.98,7.19-3.98,10.84-6,26.13-14.47,54.26-30.05,81.76-46.81v-.82c-27.6,16.84-55.86,32.49-82.1,47.02-3.65,2.02-7.27,4.02-10.84,6.01Z"
              />
            </g>
            <path
              className="cls-team-L-1"
              d="M220,70v10h140V0h-70V70m-38,7h-20v-4.05h20v4.05Zm32,0h-20v-4.05h20v4.05Zm32,0h-20v-4.05h20v4.05Zm32,0h-20v-4.05h20v4.05Z"
            />
          </g>
        </g>
      </svg>
    </>
  );
}
