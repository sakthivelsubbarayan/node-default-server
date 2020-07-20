var path = require("path");

let config = {
  PORT: process.env.PORT,
  secret: process.env.secret,
  mongo_url: process.env.mongo_url,
}

module.exports = config;
