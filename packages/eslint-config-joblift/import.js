module.exports = {
  extends: ['prettier'],
  plugins: ['import'],
  rules: {
    'import/no-mutable-exports': 'error',
    'import/prefer-default-export': 0,
    'import/first': 'error',
    'import/no-webpack-loader-syntax': 'error'
  }
};
