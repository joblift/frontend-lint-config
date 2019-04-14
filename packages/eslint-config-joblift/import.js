module.exports = {
  extends: ['prettier'],
  plugins: ['import'],
  rules: {
    'import/no-mutable-exports': 'error',
    'import/prefer-default-export': 'error',
    'import/first': 'error',
    'import/no-webpack-loader-syntax': 'error'
  }
};
