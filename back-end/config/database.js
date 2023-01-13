module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'myShop'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'Umesh@59'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'localhost'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'myShop'),
//       user: env('DATABASE_USERNAME', 'umesh'),
//       password: env('DATABASE_PASSWORD', 'umeshbhai'),
//       schema: env('DATABASE_SCHEMA', 'public'), // Not required
//       ssl: {
//         rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
//       },
//     },
//     debug: false,
//   },
// });