import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

const input = 'src/index.js';
const external = ['react'];
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM'
};
const globalName = 'FP';

// Common JS Modules
const cjs = [
  {
    input,
    external,
    output: {
      file: 'dist/cjs.js',
      format: 'cjs',
      globals
    },
    plugins: [
      babel({
        exclude: /node_modules/
      }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      resolve({
        extensions: ['.js', '.jsx']
      }),
      commonjs()
    ]
  },
  {
    input,
    external,
    output: {
      file: 'dist/cjs.min.js',
      format: 'cjs',
      globals
    },
    plugins: [
      babel({
        exclude: /node_modules/
      }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      resolve({
        extensions: ['.js', '.jsx']
      }),
      commonjs(),
      uglify()
    ]
  }
];

// ECMAScript Modules
const esm = [
  {
    input,
    external,
    output: {
      file: 'dist/esm.js',
      format: 'esm',
      globals
    },
    plugins: [
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
        plugins: [['@babel/transform-runtime', { useESModules: true }]]
      }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      resolve({
        extensions: ['.js', '.jsx']
      }),
      commonjs()
    ]
  },
  {
    input,
    external,
    output: {
      file: 'dist/esm.min.js',
      format: 'esm',
      globals
    },
    plugins: [
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
        plugins: [['@babel/transform-runtime', { useESModules: true }]]
      }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      resolve({
        extensions: ['.js', '.jsx']
      }),
      commonjs()
    ]
  }
];

// Universal Module Definition
const umd = [
  {
    input,
    external,
    output: {
      file: 'dist/umd.js',
      format: 'umd',
      name: 'umd',
      globals
    },
    plugins: [
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
        plugins: [['@babel/transform-runtime', { useESModules: true }]]
      }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      resolve({
        extensions: ['.js', '.jsx']
      }),
      commonjs({ include: /node_modules/ })
    ]
  },
  {
    input,
    external,
    output: {
      file: 'dist/umd.min.js',
      format: 'umd',
      name: 'umd.min',
      globals
    },
    plugins: [
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
        plugins: [['@babel/transform-runtime', { useESModules: true }]]
      }),
      resolve({
        extensions: ['.js', '.jsx']
      }),
      commonjs({ include: /node_modules/ }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      uglify()
    ]
  }
];

let config;
switch (process.env.BUILD_ENV) {
  case 'cjs':
    config = cjs;
    break;
  case 'esm':
    config = esm;
    break;
  case 'umd':
    config = umd;
    break;
  default:
    config = cjs.concat(esm).concat(umd);
}

export default config;
