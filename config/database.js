module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'motordepo.c8lxwmwflbx9.eu-west-2.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'motordepo_dev'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'iACwf1KwyGa336EyzsTU'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
