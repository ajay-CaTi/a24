import React, { useEffect, useState } from "react";

const useStatus = () => {
  let [onlinestatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlinestatus;
};

export default useStatus;
