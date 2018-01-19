module.exports = {
  extends: ['./base.js', './flowtype.js', './jest.js', './react.js'],
  rules: {
    'prettier/prettier': ['error',
    { singleQuote: true, tabWidth: 4, printWidth: 120, semi: true, trailingComma: 'es5' }],
  },
};
