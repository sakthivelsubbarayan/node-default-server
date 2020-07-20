
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('../config');

const returnObj = {
  launch,
};



function launch() {
  const app = express();

  // Express app config
  app.use(cors());
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );

  const routes = require('./routes');
  app.use('/', routes);
  app.set('secret', config.secret);


  // Run the app by serving the static files in the dist directory
  app.use(express.static(`${__dirname}/../../dist`));

  // For all GET requests, send back index.html
  // so that PathLocationStrategy can be used
  app.get('/*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../../dist/index.html`));
  });

  return app;
}

module.exports = returnObj;
