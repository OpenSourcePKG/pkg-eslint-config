'use strict';

module.exports = Object.freeze({
  name: '@pkg-eslint-config/tseslint/base',
  rules: Object.freeze({
    // enforces an explicit return type for functions
    '@typescript-eslint/explicit-function-return-type': 'error'
  })
});
