const { User } = require('../models');
const bcrypt = require('bcryptjs');

exports.showLoginPage = (req, res) => {
    res.render('login');
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (user && await user.validPassword(password)) {
        req.session.user = user;
        res.redirect('/expenses');
    } else {
        res.redirect('/auth/login');
    }
};

exports.showSignupPage = (req, res) => {
    res.render('signup');
};

exports.signup = async (req, res) => {
    const { username, password } = req.body;
    await User.create({ username, password });
    res.redirect('/auth/login');
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/auth/login');
};
