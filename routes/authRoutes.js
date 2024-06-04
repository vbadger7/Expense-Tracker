const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/login', authController.showLoginPage);
router.post('/login', authController.login);
router.get('/signup', authController.showSignupPage);
router.post('/signup', authController.signup);
router.post('/logout', authController.logout);

module.exports = router;