import { Icon } from "@iconify-icon/react";

export const Engin = ({ percentage }) => {
  const GoodHealth = 70;
  const MediumHealth = 50;
  const LowHealth = 30;
  return (
    <div
      className={`relative flex flex-col-reverse items-center justify-center w-5 h-5 rounded-sm bg-white/60`}
    >
      {percentage >= GoodHealth && (
        <div
          style={{ height: `${percentage}%` }}
          className={`w-full bg-green-500 rounded-sm mt-auto`}
        ></div>
      )}
      {percentage >= MediumHealth && percentage < GoodHealth && (
        <div
          style={{ height: `${percentage}%` }}
          className={`w-full bg-yellow-500 rounded-sm mt-auto`}
        ></div>
      )}
      {percentage < MediumHealth && percentage > LowHealth && (
        <div
          style={{ height: `${percentage}%` }}
          className={`w-full bg-yellow-500 rounded-sm mt-auto`}
        ></div>
      )}
      {percentage <= LowHealth && (
        <div
          style={{ height: `${percentage}%` }}
          className={`w-full bg-red-500 rounded-sm mt-auto`}
        ></div>
      )}

      <div className="absolute flex items-center justify-center w-full h-full transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <Icon icon="mdi:engine" height={14} width={14} className="text-white" />
      </div>
    </div>
  );
};
