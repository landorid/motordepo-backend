const { Client } = require('@googlemaps/google-maps-services-js');

module.exports = strapi => {
  return {
    async initialize() {
      strapi.services.googlemaps = new Client();
    },
  };
};
