const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.get('./expenxeRoutes.js', expenseController.showExpenses);
router.post('./expenxeRoutes.js', expenseController.addExpense);

module.exports = router;
