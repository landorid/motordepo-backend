'use strict';

const _ = require('lodash');
const slugify = require('slugify');

module.exports = {
  getSearchObject(result) {
    const motor = _.cloneDeep(result);
    delete motor.updated_by;
    delete motor.created_by;
    delete motor.elado;

    return {
      ...motor,
      elado: {
        isCompany: result.elado.isCompany,
      },
      ...(result.lat && result.lng
        ? {
            _geoloc: {
              lat: result.lat,
              lng: result.lng,
            },
          }
        : {}),
    };
  },
  async generateUniqueSlug(id, slugArray) {
    let slug;
    let isUnique;

    let i = 0;
    do {
      slug = slugify(slugArray.join('-').trim(), { lower: true, strict: true });
      if (i > 0) {
        slug = slug.concat(`-${i}`);
      }

      const motorssWithSameSlug = await strapi.services.motor.find(
        {
          ...(id ? { id_ne: id } : null),
          slug,
        },
        []
      );
      isUnique = motorssWithSameSlug.length === 0;

      i++;
    } while (!isUnique);

    return slug;
  },
  async getLocation(state, city) {
    const { apiKey } = strapi.config.get('hook.settings.googlemaps');

    try {
      const location = await strapi.services.googlemaps.geocode({
        params: {
          key: apiKey,
          address: `${state}, ${city}`,
          region: 'HU',
          language: 'HU',
        },
      });
      return _.get(location, 'data.results[0].geometry.location', {
        lat: null,
        lng: null,
      });
    } catch (e) {
      console.log(e);
    }
    return { lat: null, lng: null };
  },
};
