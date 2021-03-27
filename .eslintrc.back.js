module.exports = {
  plugins: ['node'],
  extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],
  env: {
    node: true,
    es6: true,
  },
  globals: {
    strapi: false,
  },
  rules: {
    'no-console': 'warn',
  },
};
