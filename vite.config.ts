import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Hangman Game',
        short_name: 'Hangman',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#6a11cb',
        icons: [
          {
            src: '/icon-192x192.webp',
            sizes: '192x192',
            type: 'image/webp',
          },
          {
            src: '/icon-512x512.webp',
            sizes: '512x512',
            type: 'image/webp',
          },
        ],
      },
    }),
  ],
});
