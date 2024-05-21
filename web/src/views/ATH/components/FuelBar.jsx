import { Icon } from "@iconify-icon/react";

// eslint-disable-next-line react/prop-types
export const FuelBar = ({ percentage }) => {
  return (
    <div
      className={`relative flex flex-col-reverse items-center justify-center w-5 h-5 rounded-sm bg-white/60`}
    >
      <div
        style={{ height: `${percentage}%` }}
        className={`w-full  bg-yellow-500 rounded-sm mt-auto`}
      ></div>

      <div className="absolute flex items-center justify-center w-full h-full transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <Icon
          icon="mdi:fuel-pump"
          height={14}
          width={14}
          className="text-white"
        />
      </div>
    </div>
  );
};
