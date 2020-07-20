const nodemailer = require('nodemailer');
var url = require("url");
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const config = require('../../config');



module.exports.sendForgotEmail = async function (req, res, token) {
    console.log("sendForgotEmail called...........");
}