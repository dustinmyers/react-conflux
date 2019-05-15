import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

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
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify.uglify()
  ]
};
