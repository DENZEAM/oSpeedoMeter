import { useEffect } from "react";

function useNuiEvent(eventName, callback) {
  useEffect(() => {
    const handleNuiEvent = (event) => {
      if (event.data.action === eventName) {
        callback(event.data.data);
      }
    };

    window.addEventListener("message", handleNuiEvent);

    return () => {
      window.removeEventListener("message", handleNuiEvent);
    };
  }, [eventName, callback]);
}

export default useNuiEvent;
