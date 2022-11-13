import BoostBG from "./BoostBG";
import BoostBar from "./BoostBar";

export default function Boost({
  primaryColor,
  secondaryColor,
  textColorOnPrimary,
  textColorOnSecondary,
  boost,
}: {
  primaryColor: string;
  secondaryColor: string;
  textColorOnPrimary: string;
  textColorOnSecondary: string;
  boost: number;
}) {
  return (
    <div style={{ position: "absolute", right: "100px", bottom: "50px" }}>
      <div style={{ position: "absolute", right: 0, bottom: 0 }}>
        <div
          style={{
            height: "163.35px",
            width: "163.35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontFamily: "The Bold Font", fontSize: "70px" }}>
            {boost}
          </h1>
          <p
            style={{ fontFamily: "Mont", fontWeight: "100", fontSize: "16px" }}
          >
            BOOST
          </p>
        </div>
      </div>
      <BoostBG primaryColor={primaryColor} secondaryColor={secondaryColor} />
      <div style={{ position: "absolute", left: "4.8814px", top: "6.0474px" }}>
        <BoostBar color={textColorOnSecondary} boost={boost} />
      </div>
    </div>
  );
}
