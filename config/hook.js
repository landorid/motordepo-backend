module.exports = ({ env }) => ({
  settings: {
    algolia: {
      enabled: true,
      applicationId: env('ALGOLIA_APP_ID'),
      apiKey: env('ALGOLIA_API_KEY'),
    },
    googlemaps: {
      enabled: true,
      apiKey: env('GOOGLE_MAPS_API_KEY'),
    },
  },
});
