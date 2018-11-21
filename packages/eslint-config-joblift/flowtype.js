module.exports = {
  extends: ['plugin:flowtype/recommended', 'prettier/flowtype'],
  plugins: ['flowtype'],
  rules: {
    'flowtype/space-after-type-colon': 'off',
    'flowtype/generic-spacing': 'off'
  }
};
