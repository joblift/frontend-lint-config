module.exports = {
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:flowtype/recommended'],
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
    },
    plugins: ['react', 'import', 'flowtype', 'prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            { singleQuote: true, tabWidth: 4, printWidth: 120, semi: true, trailingComma: 'es5' },
        ],
        'react/prop-types': 'off',
        'flowtype/space-after-type-colon': 'off',
        'accessor-pairs': 'error',
        'array-bracket-spacing': 'error',
        'array-callback-return': 'error',
        'arrow-body-style': 'error',
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': [
            'error',
            {
                after: true,
                before: true,
            },
        ],
        'block-scoped-var': 'error',
        'block-spacing': 'error',
        'brace-style': 'error',
        'callback-return': 'error',
        camelcase: 'off',
        'capitalized-comments': 'off',
        'class-methods-use-this': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': [
            'error',
            {
                after: true,
                before: false,
            },
        ],
        'comma-style': ['error', 'last'],
        complexity: 'error',
        'computed-property-spacing': 'error',
        'consistent-return': 'off',
        'consistent-this': 'error',
        curly: 'off',
        'default-case': 'error',
        'dot-location': 'off',
        'dot-notation': 'error',
        'eol-last': 'error',
        eqeqeq: 'error',
        'func-call-spacing': 'error',
        'func-name-matching': 'off',
        'func-names': 'error',
        'func-style': ['off', 'declaration'],
        'generator-star-spacing': 'error',
        // "global-require": "error", TODO
        'guard-for-in': 'error',
        'handle-callback-err': 'error',
        'id-blacklist': 'error',
        'id-length': 'off',
        'id-match': 'error',
        'import/no-mutable-exports': 'error',
        'import/prefer-default-export': 'error',
        'import/first': 'error',
        'import/no-webpack-loader-syntax': 'error',
        indent: [
            'off',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'init-declarations': 'off',
        'jsx-quotes': 'error',
        'key-spacing': 'error',
        'keyword-spacing': [
            'error',
            {
                after: true,
                before: true,
            },
        ],
        'line-comment-position': 'off',
        'linebreak-style': ['error', 'unix'],
        'lines-around-comment': 'off',
        'lines-around-directive': 'error',
        'max-depth': 'error',
        'max-len': ['error', 120],
        'max-lines': 'error',
        'max-nested-callbacks': 'error',
        'max-params': 'off',
        'max-statements': 'off',
        'max-statements-per-line': 'error',
        'multiline-ternary': 'off',
        'new-parens': 'error',
        'newline-after-var': 'error',
        'newline-before-return': 'error',
        'newline-per-chained-call': 'off',
        'no-alert': 'off',
        'no-array-constructor': 'error',
        'no-await-in-loop': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-catch-shadow': 'error',
        'no-confusing-arrow': 'off',
        'no-console': 'warn',
        'no-continue': 'error',
        'no-div-regex': 'error',
        'no-duplicate-imports': 'off', // "import type" is falsly considered duplicate for normal "import"
        'no-else-return': 'error',
        'no-empty-function': 'off',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-extra-parens': 'off',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': 'off',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-inline-comments': 'off',
        'no-invalid-this': 'off', // False Negatives!
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': 'off',
        'no-mixed-operators': 'off',
        'no-mixed-requires': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': 'error',
        'no-native-reassign': 'error',
        'no-negated-condition': 'off',
        'no-negated-in-lhs': 'error',
        'no-nested-ternary': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-require': 'error',
        'no-new-wrappers': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'error',
        'no-path-concat': 'error',
        'no-plusplus': 'error',
        'no-process-env': 'off',
        'no-process-exit': 'error',
        'no-proto': 'error',
        'no-prototype-builtins': 'off',
        'no-restricted-globals': 'error',
        'no-restricted-imports': 'error',
        'no-restricted-modules': 'error',
        'no-restricted-properties': 'error',
        'no-restricted-syntax': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-spaced-func': 'error',
        'no-sync': 'error',
        'no-tabs': 'error',
        'no-template-curly-in-string': 'error',
        'no-ternary': 'off',
        'no-throw-literal': 'off',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-undef': 'error', // flowtype eslint plugin fixes this!
        'no-undefined': 'off',
        'no-underscore-dangle': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': 'error',
        'no-unused-expressions': 'error',
        'no-use-before-define': 'error',
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'no-warning-comments': 'off',
        'no-whitespace-before-property': 'error',
        'no-with': 'error',
        'object-curly-newline': 'off',
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': 'off',
        'object-shorthand': 'error',
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': 'error',
        'operator-assignment': 'error',
        'operator-linebreak': 'off',
        'padded-blocks': 'off',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-numeric-literals': 'error',
        'prefer-reflect': 'off',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': 'off',
        quotes: ['off', 'single'],
        radix: 'error',
        'require-await': 'error',
        'require-jsdoc': 'off',
        'rest-spread-spacing': 'error',
        semi: 'off',
        'semi-spacing': 'error',
        'sort-imports': 'off',
        'sort-keys': 'off',
        'sort-vars': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': 'off',
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'error',
        strict: 'error',
        'symbol-description': 'error',
        'template-curly-spacing': 'error',
        'unicode-bom': ['error', 'never'],
        'valid-jsdoc': 'off',
        'vars-on-top': 'error',
        'wrap-iife': 'off',
        'wrap-regex': 'off',
        'yield-star-spacing': 'error',
        yoda: 'error',
    },
};
