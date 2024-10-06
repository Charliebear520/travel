import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss'; // 引入 postcss 插件

export default {
  input: 'src/App.jsx', // 確保入口文件路徑正確
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
    sourcemap: true, // 可選：啟用源地圖以便於調試
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