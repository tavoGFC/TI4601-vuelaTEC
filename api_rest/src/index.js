import hapi from '@hapi/hapi';
import mongoose from 'mongoose';

//const hapi = require('@hapi/hapi');

import testRoutes from '../src/api/v1/test';

const init = async () => {
  const server = hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: true
    }
  });

  try {
    mongoose.connect('mongodb://localhost/testing');
    mongoose.connection.once('open', () => {
      console.log('Connection to database: Successful!');
    });

    testRoutes(server);

    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();