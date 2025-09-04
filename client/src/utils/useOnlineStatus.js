import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // there is an event listener for onlie and offline events...and we want to execute that event lilstener once so we will use useEffect with empty dependency array

  const [onlineStatus , setonlineStatus] = useState(true);

  useEffect(() => {
    const handleOnline = () =>  setonlineStatus(true);
    const handleOffline = () => setonlineStatus(false);

    window.addEventListener("online" , handleOnline);
    window.addEventListener("offline" , handleOffline);
    
    return () => {
    window.removeEventListener("online" , handleOnline);
    window.removeEventListener("offline" , handleOffline);
  }
}, []);
    return onlineStatus;
  
};

export default useOnlineStatus;
