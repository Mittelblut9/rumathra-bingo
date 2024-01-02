module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        semi: ['warn', 'always'],
        quotes: ['warn', 'single'],
        'consistent-return': 2,
        indent: ['warn', 4], // space indentation
        'no-else-return': 1,
    },
    ignorePatterns: ['dist/**/*', 'node_modules/**/*', 'public/**/*']
};