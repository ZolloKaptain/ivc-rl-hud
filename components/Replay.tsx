import Image from "next/image";
import Replay from "./Replay.svg";

export default function ReplayOverlay({ isReplay }: { isReplay: boolean }) {
  return (
    <div
      className={
        "replay-overlay " + (isReplay ? "slide-in-left" : "slide-out-left")
      }
      style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        height: "98px",
        animationDuration: "0.25s",
      }}
    >
      <Image src={Replay} width={318} height={98} alt={""} quality={100} />
    </div>
  );
}
