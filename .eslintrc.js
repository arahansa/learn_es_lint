module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
      'airbnb-base', 'plugin:prettier/recommended'
  ],
  globals: {
    Atomics : 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  "parser": "babel-eslint",
  "parserOptions": {
    ecmaVersion: 2018,
    "sourceType": "module"
  },
  rules:{
    "no-extra-semi": "error",
    "no-console": "off"
  },
}
