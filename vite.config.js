import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: 'public/_redirects', dest: 'dist' }, // 複製 _redirects 文件到 dist 目錄
      ],
      verbose: true,
    }),
  ],
  build: {
    outDir: 'dist',
  },
});
