module.exports = () => ({
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    ['@babel/plugin-proposal-optional-chaining', { loose: false }],
    ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],

    '@babel/plugin-proposal-export-namespace-from',

    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    '@babel/plugin-proposal-json-strings',
    ['@babel/plugin-proposal-object-rest-spread', { loose: false, useBuiltIns: true }],
  ],
});
