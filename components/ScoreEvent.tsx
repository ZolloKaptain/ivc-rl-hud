import { Event } from "../types/GameData";
import Image from "next/image";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

type Props = {
  eventImgs: { [name: string]: string };
  event: Event;
  primaryColor: string;
  team: number;
  setPlayerEvents: Function;
  playerEvents: {
    [playerId: string]: Event;
  };
};

export default function ScoreEvent({
  eventImgs,
  event,
  primaryColor,
  team,
  playerEvents,
  setPlayerEvents,
}: Props) {
  const style: CSSProperties = {
    background: "#" + primaryColor,
    height: "40px",
    width: "40px",
    position: "absolute",
    zIndex: -9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const nodeRef = useRef<any>(null);

  useEffect(() => {
    if (!event) return;
    const time = setTimeout(() => {
      let newEvents = { ...playerEvents };
      delete newEvents[event.main_target.id];
      setPlayerEvents(newEvents);
    }, 5000);
    return () => clearTimeout(time);
  }, [playerEvents, event]);

  if (event) console.log(event);

  return (
    <SwitchTransition>
      <CSSTransition
        key={event ? event.event_name : "none"}
        classNames={team ? "score-right" : "score-left"}
        addEndListener={(node, done) => {
          nodeRef.current?.addEventListener("transitionend", done, false);
        }}
        nodeRef={nodeRef}
        timeout={500}
      >
        {event ? (
          <div
            ref={nodeRef}
            style={
              team ? { ...style, right: "320px" } : { ...style, left: "320px" }
            }
            className="yippee"
          >
            <Image
              src={eventImgs[event.event_name]}
              alt={eventImgs[event.event_name]}
              height={30}
              width={30}
            />
            )
          </div>
        ) : (
          <></>
        )}
      </CSSTransition>
    </SwitchTransition>
  );
}
