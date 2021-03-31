'use strict';

const _ = require('lodash');

module.exports = {
  getSearchObject(result) {
    return {
      id: result.id,
      slug: result.slug,
    };
  },
};
