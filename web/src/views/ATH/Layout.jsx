import { SpeedoContainer } from "./components/SpeedoContainer";

function ATH() {
  return (
    <div
      className={"w-screen h-screen "}
      style={{
        background:
          "radial-gradient(circle, rgba(255,255,255,0) 85%, rgba(26,26,26,0.25) 100%)",
      }}
    >
      <div className="w-full h-full grid grid-cols-[315px_60px_repeat(3,_1fr)_60px_1fr] grid-rows-[75px_repeat(3,_1fr)_0px_200px_40px] gap-x-0 gap-y-0">
        <div className="relative w-full h-full col-start-4 col-end-4 row-start-5 row-end-5 mt-28">
          <SpeedoContainer></SpeedoContainer>
        </div>
      </div>
    </div>
  );
}

export default ATH;
