const base = require('./base');

base.rules['prettier/prettier'] = [
    'error',
    { singleQuote: true, tabWidth: 2, printWidth: 120, semi: true, trailingComma: 'es5' },
],]

module.export = base;
