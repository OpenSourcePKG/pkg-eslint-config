'use strict';

module.exports = Object.freeze({
  name: '@pkg-eslint-config/stylistic/spe',
  rules: Object.freeze({
    // enforces 2 spaces as indent
    '@stylistic/indent': [
      'error',
      2,
      {
        'MemberExpression': 0,
        'SwitchCase': 1
      }
    ],
    // enforces a natural sorting of object keys
    'sort-keys': [
      'error',
      'asc',
      {
        'caseSensitive': false,
        'natural': true
      }
    ]
  })
});
