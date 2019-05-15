import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  external: ['react'],
  output: {
    format: 'cjs',
    name: 'react-conflux',
    globals: {
      react: 'React'
    }
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    uglify.uglify()
  ]
};
