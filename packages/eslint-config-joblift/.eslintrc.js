module.exports = {
  extends: ['./index.js'],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    __CLIENT__: false,
    __SERVER__: false,
    getStore: false,
    getState: false,
    __CAPTCHA_SITEKEY__: false,
    __GMAPS_API_KEY__: false,
    __BUILD__: false
  },
  rules: {
    'no-shadow': 0,
    'import/prefer-default-export': 0,
    complexity: 0,
    'comma-dangle': 0,
    'prefer-arrow-callback': 0
  }
};
