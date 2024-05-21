import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GradientSVG from "./GradientSVG";
import "./Speedo.css"; // Importez le fichier CSS que vous allez créer
import { FuelBar } from "./FuelBar";
import { Engin } from "./Engin";
import { Headlight } from "./Headlight";
import useNuiEvent from "../../../hooks/useNuiEvent";
import { useState } from "react";

export const Speedo = ({ Speed, pourcent }) => {
  const [speed, setSpeed] = useState(45);
  const [pourcents, setPourcent] = useState(23);
  const [light, setLight] = useState("off");
  const [fuel, setFuel] = useState(50);
  const [engin, setEngin] = useState(20);

  useNuiEvent("SetSpeedo", (data) => {
    setSpeed(data.speed);
    setPourcent(data.pourcent);
  });
  useNuiEvent("SetLight", (data) => {
    setLight(data.light);
  });
  useNuiEvent("SetFuel", (data) => {
    setFuel(data.fuel);
  });
  useNuiEvent("SetEngin", (data) => {
    setEngin(data.engin);
  });
  const idCSS = "hello";
  return (
    <div className="flex justify-center gap-2">
      <div className="flex flex-col gap-2 mt-4 place-self-center">
        <FuelBar
          className="absolute bottom-0 right-0"
          percentage={fuel}
        ></FuelBar>
        <Engin className="absolute bottom-0 left-0" percentage={engin}></Engin>
      </div>
      <div className="relative w-24 h-24">
        <GradientSVG></GradientSVG>
        <CircularProgressbar
          value={pourcents}
          circleRatio={0.75}
          className="font-semibold"
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            textSize: "19px",
            textColor: "#fff",
            trailColor: "rgba(238, 238, 255, 0.3)",
            pathColor: `url(#${idCSS})`,
            strokeLinecap: "butt",
            trail: {
              stroke: "#2e2e2e",
            },
          })}
        />
        <div className="absolute text-lg italic font-bold text-center transform -translate-x-1/2 -translate-y-1/2 top-[45%] left-1/2 text-white">
          {speed}
        </div>
        <div className="absolute top-[55%] w-full text-center text-xs  italic text-white opacity-25">
          KM/H
        </div>
        <br />
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <Headlight
          className="absolute right-0 middle-0"
          type={light}
        ></Headlight>
      </div>
    </div>
  );
};
