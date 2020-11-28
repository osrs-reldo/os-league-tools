module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', "react-hooks"],
    rules: {
        indent: 'off',
        'no-console': ["warn", { allow: ["warn", "error"] }],
        'no-else-return': ["error", {allowElseIf: true}],
        'no-plusplus': 'off',
        "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
        "no-use-before-define": ["error", { "functions": false }],
        'react/jsx-curly-newline': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/prop-types': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off'
    },
    ignorePatterns: ["/config", "/build", "/scripts"],
};
