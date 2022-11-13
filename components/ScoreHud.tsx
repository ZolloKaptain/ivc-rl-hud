import { Team } from "../types/GameData";
import LeftTeam from "./TeamScore/LeftTeam";
import RightTeam from "./TeamScore/RightTeam";
import Timer from "./Timer/Timer";
import { SeriesScore } from "../types/GameData";

type Props = {
  teams: Team[];
  time: number;
  isOT: boolean;
  series: SeriesScore;
  textColors: {
    textColorOnPrimary: string;
    textColorOnSecondary: string;
  }[];
};

export default function ScoreHud({
  teams,
  time,
  isOT,
  series,
  textColors,
}: Props) {
  const formattedTime: string = `${isOT ? "+" : ""}${Math.floor(
    time / 60
  )}:${String(time % 60).padStart(2, "0")}`;

  return (
    <div
      className="score-bug"
      style={{
        position: "absolute",
        display: "flex",
        width: "100vw",
        top: 0,
        left: 0,
        justifyContent: "center",
      }}
    >
      <div
        className="left"
        style={{
          position: "relative",
          height: "80px",
          width: "360px",
        }}
      >
        <LeftTeam
          team={teams[0]}
          seriesScore={series[0]}
          textColorOnPrimary={textColors[0].textColorOnPrimary}
          textColorOnSecondary={textColors[0].textColorOnSecondary}
        />
      </div>
      <div
        className="divider"
        style={{ width: "1px", height: "80px", backgroundColor: "white" }}
      />
      <Timer time={formattedTime} />
      <div
        className="divider"
        style={{ width: "1px", height: "80px", backgroundColor: "white" }}
      />
      <div
        className="right"
        style={{
          position: "relative",
          height: "80px",
          width: "360px",
        }}
      >
        <RightTeam
          team={teams[1]}
          seriesScore={series[1]}
          textColorOnPrimary={textColors[1].textColorOnPrimary}
          textColorOnSecondary={textColors[1].textColorOnSecondary}
        />
      </div>
    </div>
  );
}
