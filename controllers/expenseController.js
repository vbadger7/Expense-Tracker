const { Expense } = require('../models');

exports.showExpenses = async (req, res) => {
    if (!req.session.user) {
        return res.redirect('/auth/login');
    }

    const expenses = await Expense.findAll({ where: { userId: req.session.user.id } });
    res.render('dashboard', { expenses: JSON.stringify(expenses) });
};

exports.addExpense = async (req, res) => {
    if (!req.session.user) {
        return res.redirect('/auth/login');
    }

    const { description, amount, date } = req.body;
    await Expense.create({ description, amount, date, userId: req.session.user.id });
    res.redirect('/expenses');
};
