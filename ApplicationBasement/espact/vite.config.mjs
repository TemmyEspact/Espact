import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import renderer from 'vite-plugin-electron-renderer';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        renderer(),
    ],
    resolve: {
        alias: [
            { find: '@/', replacement: path.resolve(__dirname, 'src') },
            { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
        ],
    },
});
