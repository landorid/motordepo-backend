const index = 'motor';

module.exports = {
  lifecycles: {
    async afterCreate(result) {
      const searchObject = strapi.services.motor.getSearchObject(result);
      strapi.services.algolia.saveObject(searchObject, index);
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
