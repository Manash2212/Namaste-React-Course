import React, { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  // chek online status
  useEffect(() => {
    window.addEventListener("online", () => {
      //   alert("You are Connected  to the network");
      setOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      //   alert("It's looks your Internet connection is lost");
      setOnlineStatus(false);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
