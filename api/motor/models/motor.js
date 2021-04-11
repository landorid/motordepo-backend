const index = 'motor';

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      data.slug = await strapi.services.motor.generateUniqueSlug(null, [
        data.marka,
        data.tipus,
        data.kivitel,
        data.gyartas_ev,
      ]);
    },
    async afterCreate(result) {
      const searchObject = strapi.services.motor.getSearchObject(result);
      strapi.services.algolia.saveObject(searchObject, index);
    },
    async beforeUpdate(params, data) {
      data.slug = await strapi.services.motor.generateUniqueSlug(params.id, [
        data.marka,
        data.tipus,
        data.kivitel,
        data.gyartas_ev,
      ]);
    },
    async afterUpdate(result) {
      const searchObject = strapi.services.motor.getSearchObject(result);
      strapi.services.algolia.saveObject(searchObject, index);
    },

    async afterDelete(result) {
      strapi.services.algolia.deleteObject(result.id, index);
    },
  },
};
