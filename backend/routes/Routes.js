const express = require('express');
const router = express.Router()

const {createExpense, getExpenses, getExpenseById, updateExpense, deleteExpense, filterExpenses, searchExpenses, sortExpenses} = require('../controller/Logic')


router.post('/', createExpense)
router.get('/', getExpenses)

router.get('/filter', filterExpenses)
router.get('/search', searchExpenses )
router.get('/sort', sortExpenses)

router.get('/:id', getExpenseById)
router.put('/:id', updateExpense)
router.delete('/:id', deleteExpense)


module.exports = router