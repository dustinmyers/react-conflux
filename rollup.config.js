import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  external: ['react'],
  output: {
    format: 'cjs',
    name: 'react-conflux',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      extensions: ['.js', '.jsx']
    }),
    commonjs(),
    uglify.uglify()
  ]
};
