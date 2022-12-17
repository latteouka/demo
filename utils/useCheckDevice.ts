import { useEffect, useRef } from "react";

const useCheckDevice = () => {
  const device = useRef(window.innerWidth < 900 ? "mobile" : "desktop");

  const checkDevice = () => {
    if (window.innerWidth < 900 && device.current !== "mobile") {
      device.current = "mobile";
    } else if (window.innerWidth >= 900 && device.current !== "desktop") {
      device.current = "desktop";
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  return device;
};

export default useCheckDevice;
