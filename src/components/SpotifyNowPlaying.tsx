'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaSpotify } from 'react-icons/fa';

interface SpotifyData {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

const SpotifyNowPlaying = () => {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch('/api/spotify');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setData(data);
        setError(null);
      } catch (err) {
        setError('Failed to load Spotify data');
        console.error('Error fetching Spotify data:', err);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000);
    return () => clearInterval(interval);
  }, []);

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
    </motion.div>
  );
};

export default SpotifyNowPlaying; 