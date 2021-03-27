module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  globals: {
    strapi: false,
  },
  settings: {
    react: {
      version: '16.5.2',
    },
  },
  rules: {
    'no-console': 'warn',
  },
};
