'use strict';

const {
  name,
  version
} = require('./package.json');

module.exports = {
  meta: {
    name,
    version
  },
  configs: {
    stylistic: {
      base: require('./configs/stylistic/base.js'),
      spe: require('./configs/stylistic/spe.js')
    },
    tseslint: {
      base: require('./configs/tseslint/base.js')
    }
  }
};
