import { Icon } from "@iconify-icon/react";

export const Headlight = ({ type }) => {
  return (
    <>
      {type === "high" && (
        <div className="flex items-center justify-center w-5 h-5 bg-blue-500 rounded">
          <Icon
            icon="mingcute:hight-beam-headlights-fill"
            height={16}
            width={16}
            className="text-white"
          />
        </div>
      )}
      {type === "low" && (
        <div className="flex items-center justify-center w-5 h-5 bg-green-500 rounded">
          <Icon
            icon="mingcute:low-beam-headlights-fill"
            height={16}
            width={16}
            className="text-white"
          />
        </div>
      )}
      {type === "off" && (
        <div className="flex items-center justify-center w-5 h-5 bg-gray-500 rounded">
          <Icon
            icon="mingcute:low-beam-headlights-fill"
            height={16}
            width={16}
            className="text-white"
          />
        </div>
      )}
    </>
  );
};
