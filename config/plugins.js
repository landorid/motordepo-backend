module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: env('AWS_REGION'),
      params: {
        Bucket: env('AWS_BUCKET'),
      },
    },
  },
  email: {
    provider: 'amazon-ses',
    providerOptions: {
      key: env('AWS_ACCESS_KEY_ID'),
      secret: env('AWS_ACCESS_SECRET'),
      amazon: `https://email.${env('AWS_REGION')}.amazonaws.com`,
    },
    settings: {
      defaultFrom: 'noreply@motordepo.hu',
      defaultReplyTo: 'info@motordepo.hu',
    },
  },
});
