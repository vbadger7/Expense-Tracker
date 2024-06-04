const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.get('./expenseRoutes.js', expenseController.showExpenses);
router.post('./expenseRoutes.js', expenseController.addExpense);

module.exports = router;
