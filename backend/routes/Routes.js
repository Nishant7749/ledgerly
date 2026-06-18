const express = require('express');
const router = express.Router()

const {createExpense, getExpenses, getExpenseById, updateExpense, deleteExpense, filterExpenses} = require('../controller/Logic')


router.post('/', createExpense)

router.get('/', getExpenses)

router.get('/:id', getExpenseById)

router.put('/:id', updateExpense)

router.delete('/:id', deleteExpense)

router.get('/category/:category', filterExpenses)


module.exports = router