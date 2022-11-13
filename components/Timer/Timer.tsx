import TimerBackground from "./TimeBG";

export default function Timer({ time }: { time: string }) {
  return (
    <div
      className="timer"
      style={{
        position: "relative",
        width: "210px",
        height: "80px",
      }}
    >
      <TimerBackground />
      <div
        className="time-container"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "Mont",
            fontSize: "50px",
            color: "#FFFFFF",
          }}
        >
          {time}
        </span>
      </div>
    </div>
  );
}
