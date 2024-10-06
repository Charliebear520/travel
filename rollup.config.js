import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss'; // 引入 postcss 插件
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser'; // 引入 terser 插件
export default {
  input: 'src/App.jsx', // 確保入口文件路徑正確
  output: {
    file: 'dist/bundle.js', // Adjust this to your desired output file
    format: 'iife', // or any other format you need
  },
  plugins: [
    json(),
    terser(), // Optional: for minifying the output
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // 根據需要添加擴展名
    }),
    commonjs(),
    postcss({
      extract: true, // 將 CSS 提取到單獨的文件
      modules: false, // 根據需要啟用 CSS 模塊
      minimize: true, // 可選：壓縮 CSS
      sourceMap: true, // 可選：啟用源地圖
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: 'node_modules/**', // 排除 node_modules 目錄
    }),
  ],
  onwarn: (warning, warn) => {
    // 自定義警告處理（可選）
    console.warn(`Rollup Warning: ${warning.message}`);
    warn(warning);
  },
};