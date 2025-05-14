'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaSpotify } from 'react-icons/fa';

interface SpotifyData {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
  progress: number;
  duration: number;
}

const SpotifyNowPlaying = () => {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pollInterval, setPollInterval] = useState(5000); // Start with 5 seconds
  const [localProgress, setLocalProgress] = useState<number>(0);

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const fetchNowPlaying = useCallback(async () => {
    try {
      const response = await fetch('/api/spotify');
      if (!response.ok) throw new Error('Failed to fetch');
      const newData = await response.json();
      
      // If the song changed or playing status changed, reset to faster polling
      if (!data || 
          data.title !== newData.title || 
          data.isPlaying !== newData.isPlaying) {
        setPollInterval(5000); // Reset to 5 seconds when song changes
      } else {
        // If the same song is playing, gradually increase the polling interval
        setPollInterval(prev => Math.min(prev * 1.5, 30000)); // Cap at 30 seconds
      }
      
      setData(newData);
      setLocalProgress(newData.progress);
      setError(null);
    } catch (err) {
      setError('Failed to load Spotify data');
      console.error('Error fetching Spotify data:', err);
      setPollInterval(30000); // On error, slow down polling
    }
  }, [data]);

  // Update progress locally between polls
  useEffect(() => {
    if (data?.isPlaying) {
      const interval = setInterval(() => {
        setLocalProgress(prev => {
          if (prev >= data.duration) return prev;
          return prev + 1000;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [data]);

  useEffect(() => {
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, pollInterval);
    return () => clearInterval(interval);
  }, [fetchNowPlaying, pollInterval]);

  if (error) {
    return (
      <motion.div
        className="fixed bottom-4 right-4 bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-2 p-4">
          <FaSpotify className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400">Spotify unavailable</span>
        </div>
      </motion.div>
    );
  }

  if (!data) {
    return (
      <motion.div
        className="fixed bottom-4 right-4 bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-2 p-4">
          <FaSpotify className="w-5 h-5 text-blue-400 animate-spin" />
          <span className="text-gray-300">Loading...</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-gray-700 group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <a
          href={data.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 p-4 relative"
        >
          {data.isPlaying ? (
            <>
              <div className="relative w-12 h-12 group-hover:scale-105 transition-transform">
                <Image
                  src={data.albumImageUrl}
                  alt={`${data.title} album art`}
                  fill
                  className="rounded-md"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-medium text-sm text-gray-200 truncate group-hover:text-blue-400 transition-colors">
                  {data.title}
                </span>
                <span className="text-xs text-gray-400 truncate">
                  {data.artist}
                </span>
              </div>
              <FaSpotify className="w-5 h-5 text-blue-400 ml-2 group-hover:text-blue-300 transition-colors" />
            </>
          ) : (
            <div className="flex items-center space-x-2 text-gray-400">
              <FaSpotify className="w-5 h-5" />
              <span>Not playing</span>
            </div>
          )}
        </a>

        {/* Progress bar - only visible when playing and on hover */}
        {data.isPlaying && (
          <motion.div 
            className="px-4 pb-3 -mt-1"
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto",
              opacity: 1,
              transition: { duration: 0.2 }
            }}
          >
            <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-400"
                style={{ width: `${(localProgress / data.duration) * 100}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>{formatTime(localProgress)}</span>
              <span>{formatTime(data.duration)}</span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default SpotifyNowPlaying; 