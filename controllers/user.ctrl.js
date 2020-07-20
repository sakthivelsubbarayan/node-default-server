let userModel = require("../models/user.model");
let handlers = require("../libs/handlers");
var jwt = require("jsonwebtoken");
const emailService = require('../libs/mailSender/index');

module.exports.signup = function (req, res) {
  console.log("signup service called.......");
};

module.exports.login = function (req, res) {

  console.log("login service called.......");
};
