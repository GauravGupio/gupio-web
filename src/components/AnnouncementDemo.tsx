import React, { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

interface AnnouncementDemoProps {
  serverUrl?: string;
}

export const AnnouncementDemo: React.FC<AnnouncementDemoProps> = ({ 
  serverUrl = 'http://localhost:8000' 
}) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [currentAnnouncement, setCurrentAnnouncement] = useState<string>('');
  const [newAnnouncement, setNewAnnouncement] = useState<string>('');
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const newSocket = io(serverUrl);
    
    newSocket.on('connect', () => {
      console.log('Connected to server');
      setIsConnected(true);
      setError('');
    });

    newSocket.on('disconnect', () => {
      console.log('Disconnected from server');
      setIsConnected(false);
    });

    newSocket.on('announcement', (message: string) => {
      console.log('Received announcement:', message);
      setCurrentAnnouncement(message);
    });

    newSocket.on('connect_error', (err) => {
      console.error('Connection error:', err);
      setError(`Connection failed: ${err.message}`);
      setIsConnected(false);
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, [serverUrl]);

  const handleSendAnnouncement = async () => {
    if (!newAnnouncement.trim()) {
      setError('Please enter a message');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${serverUrl}/announcement`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: newAnnouncement }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Announcement sent successfully:', result);
      setNewAnnouncement('');
    } catch (err) {
      console.error('Error sending announcement:', err);
      setError(`Failed to send announcement: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Announcement Demo</h2>
      
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <div 
            className={`w-3 h-3 rounded-full ${
              isConnected ? 'bg-green-500' : 'bg-red-500'
            }`}
          />
          <span className="text-sm font-medium">
            {isConnected ? 'Connected to server' : 'Disconnected'}
          </span>
        </div>
        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}
      </div>

      <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold mb-2 text-blue-800">Current Announcement</h3>
        <p className="text-blue-700">
          {currentAnnouncement || 'No announcement yet...'}
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Send New Announcement</h3>
        
        <div className="flex gap-2">
          <input
            type="text"
            value={newAnnouncement}
            onChange={(e) => setNewAnnouncement(e.target.value)}
            placeholder="Enter your announcement message..."
            className=" text-gray-900 flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={!isConnected || isLoading}
          />
          <button
            onClick={handleSendAnnouncement}
            disabled={!isConnected || isLoading || !newAnnouncement.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>

      {/* Server Info */}
      <div className="mt-6 p-3 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          <strong>Server URL:</strong> {serverUrl}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Socket ID:</strong> {socket?.id || 'Not connected'}
        </p>
      </div>
    </div>
  );
};
