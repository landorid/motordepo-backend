'use strict';

const _ = require('lodash');
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      data.elado = ctx.state.user.id;
      entity = await strapi.services.motor.create(data, { files });
    } else {
      ctx.request.body.elado = ctx.state.user.id;
      entity = await strapi.services.motor.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.motor });
  },
  async findOne(ctx) {
    const { id } = ctx.params;
    const params = _.isInteger(Number(id))
      ? {
          id: Number(id),
        }
      : {
          slug: id,
        };
    const populate = ['galeria', 'elado'];

    const entity = await strapi.services.motor.findOne(params, populate);

    return sanitizeEntity(entity, { model: strapi.models.motor });
  },
};
