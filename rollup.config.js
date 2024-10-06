import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/App.jsx',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
  ],
};