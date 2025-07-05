import React, { useEffect, useState } from "react";
import NoodleSnake from "./NoodleSnake";

const OfflineFallback = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const updateOnlineStatus = () => {
    setIsOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  if (isOnline) return null; // if online, show nothing

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-orange-50 flex flex-col items-center justify-center z-50">
      <h1 className="text-2xl font-bold text-red-600 mb-4">🚫 You are offline!</h1>
      <p className="mb-4 text-lg text-gray-700">No internet? No problem. Play our Noodle Snake while you're waiting! 🍜</p>
      <div className="mb-6">
        <NoodleSnake />
      </div>
      <button
        onClick={updateOnlineStatus}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        🔄 Retry Connection
      </button>
    </div>
  );
};

export default OfflineFallback;
