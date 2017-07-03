module.exports = {
    extends: 'stylelint-config-standard',
    plugins: ['stylelint-scss'],
    rules: {
        'property-blacklist': ['flex-wrap'],
        'declaration-property-value-blacklist': {
            display: ['grid'],
        },
        indentation: 4,
        'function-name-case': null,
        'number-leading-zero': null,
        'declaration-block-no-redundant-longhand-properties': null,
        'shorthand-property-no-redundant-values': null
    },
}
