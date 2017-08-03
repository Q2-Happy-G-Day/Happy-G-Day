// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
<<<<<<< HEAD
    connection: 'postgresql://localhost/gday'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};

=======
    connection: 'postgres://localhost/gday'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
>>>>>>> 3af69e8dee926d45e9e2bd4ae5c4a559b09bf093
};
