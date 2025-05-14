# Bilal Khan's Portfolio

A modern, animated portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features real-time Spotify integration to show what I'm currently listening to.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive layout
- 🎵 Real-time Spotify integration
- ⚡ Fast performance with Next.js
- 🎭 Beautiful animations with Framer Motion
- 🎨 Styled with Tailwind CSS

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with your Spotify credentials:
   ```
   SPOTIFY_CLIENT_ID=your_client_id_here
   SPOTIFY_CLIENT_SECRET=your_client_secret_here
   SPOTIFY_REFRESH_TOKEN=your_refresh_token_here
   ```

## Setting up Spotify Integration

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new application
3. Get your Client ID and Client Secret
4. Set the Redirect URI to `http://localhost:3000/api/auth/callback/spotify`
5. Get your refresh token:
   - Use the Spotify OAuth flow to get an authorization code
   - Exchange the code for a refresh token
   - Save the refresh token in your `.env.local` file

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Building for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Spotify Web API

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── spotify/
│   │       └── route.ts
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── SpotifyNowPlaying.tsx
│   └── Footer.tsx
└── styles/
    └── globals.css
```

## Customization

1. Update the content in the components to match your information
2. Modify the color scheme in the Tailwind config
3. Add or remove sections as needed
4. Customize animations in the Framer Motion components

## License

MIT
