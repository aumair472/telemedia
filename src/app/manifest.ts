import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NetConnect - Best Home Internet Providers',
    short_name: 'NetConnect',
    description: 'Compare top internet providers in your area. Expert help choosing the best plan - fast, free, no hidden fees.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0d1117',
    theme_color: '#00cc77',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
