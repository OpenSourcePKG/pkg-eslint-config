'use strict';

module.exports = Object.freeze({
  name: '@pkg-eslint-config/stylistic/base',
  rules: Object.freeze({
    // enforces parentheses in arrow functions
    '@stylistic/arrow-parens': [
      'error',
      'always'
    ],
    // enforces a brace positioning style were the braces are mostly kept on the same line
    '@stylistic/brace-style': [
      'error',
      '1tbs'
    ],
    // disallows dangling commas
    '@stylistic/comma-dangle': [
      'error',
      'never'
    ],
    // disallows eol at the end of the file
    '@stylistic/eol-last': [
      'error',
      'never'
    ],
    // turns off the enforcing of lines between members ("off" is needed because in some classes there are fields that are
    // assigned a function and separating those, but not separating actual fields is not possible with this rule)
    '@stylistic/lines-between-class-members': 'off',
    // defines the delimiter at the end of members of TypeScript interfaces and types
    '@stylistic/member-delimiter-style': [
      'error',
      {
        'multiline': {
          'delimiter': 'semi',
          'requireLast': true
        },
        'singleline': {
          'delimiter': 'semi',
          'requireLast': true
        }
      }
    ],
    // turns off multiline ternary detection
    '@stylistic/multiline-ternary': 'off',
    // disallows spacing inside object literals, destructuring assignments and import/export specifiers
    '@stylistic/object-curly-spacing': [
      'error',
      'never'
    ],
    // enforces consistent empty line padding within blocks
    '@stylistic/padded-blocks': [
      'error',
      {
        'classes': 'always'
      }
    ],
    // enforces consistent use of semicolons
    '@stylistic/semi': [
      'error',
      'always'
    ],
    // enforces spaces before function parantheses
    '@stylistic/space-before-function-paren': [
      'error',
      {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'never',
        'catch': 'always'
      }
    ]
  })
});
