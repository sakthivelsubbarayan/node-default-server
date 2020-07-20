
const express = require('express');
const api = require('../controllers');
const validationSchema = require('../libs/validationSchema');
const joiValidation = require('../libs/middleware/validation');
const requestHandler = require('../libs/handlers/requestHandler');
const router = express.Router();

router.post(
  '/signup',
  joiValidation(validationSchema.userJoi.signup),
  api.userCtrl.signup,
);

router.post(
  '/login',
  joiValidation(validationSchema.userJoi.login),
  api.userCtrl.login,
);


module.exports = router;
