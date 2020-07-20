require("dotenv").config();
const path = require('path');

if (process.env.ENVIRONMENT === undefined) {
  process.env.ENVIRONMENT = "development";
}

global.appRoot = `file://${path.resolve(__dirname)}`;


console.log("ENVIRONMENT : ", process.env.ENVIRONMENT);
var config = require("./config");
var mongooseSetup = require("./startup/setupMongoose");
var setupExpress = require("./startup/setupExpress");

mongooseSetup.setup();
var app = setupExpress.launch();

app.listen(config.PORT || 3000, function () {
  console.log(
    "Express application listening port number " + (config.PORT || 3000)
  );
});
