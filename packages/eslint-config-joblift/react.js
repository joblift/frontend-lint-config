module.exports = {
  extends: ['plugin:react/recommended', 'prettier/react'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error'
  }
};
