const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.get('/', expenseController.showExpenses);
router.post('/', expenseController.addExpense);

module.exports = router;
