export default function BoostBar({
  color,
  boost,
}: {
  color: string;
  boost: number;
}) {
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 170.3 170.3"
      style={{ height: "170.3px", width: "170.3px" }}
    >
      <defs>
        <style>{`
        .boostbar {
          fill: none;
          stroke: #${color};
          stroke-miterlimit: 10;
          stroke-width: 7px;
          stroke-dasharray: ${boost * 1.77}% ${200 - boost * 1.77}%;
        }
      `}</style>
      </defs>
      <g id="Layer_1-2">
        <path
          className="boostbar"
          d="M31.69,167.82c-37.59-37.59-37.59-98.54,0-136.13,37.59-37.59,98.54-37.59,136.13,0"
        />
      </g>
    </svg>
  );
}
