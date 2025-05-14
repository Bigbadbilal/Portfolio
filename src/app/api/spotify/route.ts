import { NextResponse } from 'next/server';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

const getAccessToken = async () => {
  try {
    console.log('Getting access token...');
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: REFRESH_TOKEN!,
      }),
    });
    
    if (!response.ok) {
      console.error('Failed to get access token:', response.status, response.statusText);
      const text = await response.text();
      console.error('Error response:', text);
      throw new Error('Failed to get access token');
    }

    const data = await response.json();
    console.log('Successfully got access token');
    return data;
  } catch (error) {
    console.error('Error in getAccessToken:', error);
    throw error;
  }
};

const getNowPlaying = async () => {
  try {
    console.log('Getting now playing...');
    const { access_token } = await getAccessToken();
    
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    console.log('Now playing status:', response.status);
    return response;
  } catch (error) {
    console.error('Error in getNowPlaying:', error);
    throw error;
  }
};

export async function GET() {
  try {
    console.log('Starting Spotify API request...');
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
      console.log('No track playing or error:', response.status);
      return NextResponse.json({ isPlaying: false });
    }

    const song = await response.json();
    console.log('Successfully got song data:', {
      isPlaying: song.is_playing,
      title: song.item?.name,
      artist: song.item?.artists?.[0]?.name,
    });

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist: { name: string }) => _artist.name).join(', ');
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;
    const progress = song.progress_ms;
    const duration = song.item.duration_ms;

    return NextResponse.json({
      isPlaying,
      title,
      artist,
      albumImageUrl,
      songUrl,
      progress,
      duration,
    });
  } catch (error) {
    console.error('Error in GET handler:', error);
    return NextResponse.json({ isPlaying: false, error: 'Failed to fetch' });
  }
} 