
const mongoose = require('mongoose');
const config = require('../config');

const returnObj = {
  setup,
};

function setup() {
  mongoose.Promise = global.Promise;

  mongoose.connect(config.mongo_url, { useNewUrlParser: true, useFindAndModify: false });
  mongoose.set('useCreateIndex', true);
  mongoose.connection.on('error', (error) => {
    console.log('Mongoose connection error');
  });
  mongoose.connection.once('open', () => {
    console.log('Mongoose connected to the database');
  });
}

module.exports = returnObj;
