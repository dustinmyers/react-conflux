// import { StateProvider, useStateValue } from "./src";

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs.min.js'); // eslint-disable-line
} else {
  module.exports = require('./cjs.js'); // eslint-disable-line
}
