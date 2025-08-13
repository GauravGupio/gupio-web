import React, { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";

interface AnnouncementBannerProps {
  serverUrl?: string;
  showConnectionStatus?: boolean;
}

export const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({
  serverUrl = "http://localhost:8000",
  showConnectionStatus = false,
}) => {
  const [, setSocket] = useState<Socket | null>(null);
  const [announcement, setAnnouncement] = useState<string>("");
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [connectionError, setConnectionError] = useState<string>("");

  useEffect(() => {
    const newSocket = io(serverUrl, {
      timeout: 5000,
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    newSocket.on("connect", () => {
      setConnectionError("");
    });

    newSocket.on("disconnect", () => {
      console.log("AnnouncementBanner: Disconnected from server");
      setIsConnected(false);
    });

    newSocket.on("announcement", (message: string) => {
      setAnnouncement(`🚀 ${message} 🚀`);
    });

    newSocket.on("connect_error", (err) => {
      console.error("AnnouncementBanner: Connection error:", err);
      setIsConnected(false);
      setConnectionError(`Connection failed: ${err.message}`);
    });

    newSocket.on("reconnect_attempt", (attemptNumber) => {
      console.log(`AnnouncementBanner: Reconnection attempt ${attemptNumber}`);
    });

    newSocket.on("reconnect", (attemptNumber) => {
      console.log(
        `AnnouncementBanner: Reconnected after ${attemptNumber} attempts`
      );
      setIsConnected(true);
      setConnectionError("");
    });

    newSocket.on("reconnect_error", (err) => {
      console.error("AnnouncementBanner: Reconnection error:", err);
      setConnectionError(`Reconnection failed: ${err.message}`);
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, [serverUrl]);

  const displayMessage =
    announcement ||
    "🚀 Your smart valet, now just a tap away — Launching our app soon! 🚀";

  return (
    <>
      {showConnectionStatus && (
        <div className="fixed top-2 right-2 z-50 flex items-center gap-2 bg-black/80 text-white px-3 py-1 rounded-full text-xs">
          <div
            className={`w-2 h-2 rounded-full ${
              isConnected ? "bg-green-500" : "bg-red-500"
            }`}
          />
          <span>{isConnected ? "Connected" : "Disconnected"}</span>
          {connectionError && (
            <span className="text-red-400">({connectionError})</span>
          )}
        </div>
      )}
      <section className="w-full bg-[#FFBF00] text-[#000000] h-12 flex items-center overflow-hidden">
        <div className="animate-scroll whitespace-nowrap flex font-semibold">
          <span className="inline-block px-8"> {displayMessage}</span>
          <span className="inline-block px-8"> {displayMessage}</span>
          <span className="inline-block px-8"> {displayMessage} </span>
          <span className="inline-block px-8"> {displayMessage} </span>
          <span className="inline-block px-8"> {displayMessage} </span>
          <span className="inline-block px-8"> {displayMessage} </span>
          <span className="inline-block px-8"> {displayMessage} </span>
          <span className="inline-block px-8"> {displayMessage} </span>
          <span className="inline-block px-8"> {displayMessage} </span>
          <span className="inline-block px-8"> {displayMessage} </span>
        </div>
      </section>
    </>
  );
};
