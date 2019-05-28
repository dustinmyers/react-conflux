// import { StateProvider, useStateValue } from "./src";

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/cjs.min.js'); // eslint-disable-line
} else {
  module.exports = require('./dist/cjs.js'); // eslint-disable-line
}
