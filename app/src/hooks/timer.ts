import { useCallback, useEffect } from "react";

export const useTimer = (callback: () => void, delay: number) => {
  const savedCallback = useCallback(callback, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback();
    }
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay, savedCallback]);
};
