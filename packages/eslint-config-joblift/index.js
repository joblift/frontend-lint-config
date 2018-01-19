module.exports = {
  extends: ['./base', './flowtype', './jest', './react'],
  rules: {
    'prettier/prettier': ['error',
    { singleQuote: true, tabWidth: 4, printWidth: 120, semi: true, trailingComma: 'es5' }],
  },
};
