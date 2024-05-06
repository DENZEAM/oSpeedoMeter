import { useEffect } from "react";

function useSendNuiMessage(eventName, data) {
  useEffect(() => {
    window.postMessage({
      type: "ui",
      data: { eventName, data },
    });
  }, [eventName, data]);
}

export default useSendNuiMessage;
