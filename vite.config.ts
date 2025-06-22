import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react({
      babel: {
        plugins: [
          [
            'formatjs',
            {
              idInterpolationPattern: '[sha512:contenthash:base64:6]',
              ast: true,
            },
          ],
        ],
      },
    }),
    tailwindcss(),
    svgr({
      svgrOptions: {
        exportType: 'default',
      },
      include: '**/*.svg',
    }),
  ],
  resolve: {
    alias: {
      app: resolve(__dirname, 'src/app'),
      shared: resolve(__dirname, 'src/shared'),
      features: resolve(__dirname, 'src/features'),
      widgets: resolve(__dirname, 'src/widgets'),
      entities: resolve(__dirname, 'src/entities'),
      pages: resolve(__dirname, 'src/pages'),
    },
  },
});
