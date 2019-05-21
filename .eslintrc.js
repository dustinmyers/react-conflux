module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'airbnb',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['import', 'react'],
  rules: {
    'valid-jsdoc': 2,
    'react/jsx-uses-react': 1,
    'react/jsx-no-undef': 2,
    'react/jsx-wrap-multilines': 2,
    'react/no-string-refs': 0
  }
};
