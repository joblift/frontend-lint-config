module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
    plugins: ['stylelint-scss', 'stylelint-prettier'],
    rules: {
        'prettier/prettier': true,
        'property-blacklist': ['flex-wrap'],
        'declaration-property-value-blacklist': {
            display: ['grid'],
        },
        indentation: null,
        'function-name-case': null,
        'number-leading-zero': null,
        'declaration-block-no-redundant-longhand-properties': null,
        'shorthand-property-no-redundant-values': null,
        'at-rule-no-unknown': null,
        'declaration-empty-line-before': null,
        'at-rule-empty-line-before': null,
    },
};
