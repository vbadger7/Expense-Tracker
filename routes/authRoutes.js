const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('../views/partials/login.handlebars', authController.showLoginPage);
router.post('../views/partials/login.handlebars', authController.login);
router.get('../views/partials/signup.handlebars', authController.showSignupPage);
router.post('../views/partials/signup.handlebars', authController.signup);
router.get('../views/partials/dashboard.handlebars', authController.logout);

module.exports = router;