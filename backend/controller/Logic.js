const Expense = require('../model/Schema')

//create new
const createExpense = async(req,res)=> {

    try {
        const exp = await Expense.create(req.body)

        res.status(201).json({
            success: true,
            message: 'Expense Item Added!',
            data: exp
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//get all
const getExpenses = async(req,res)=> {
    
    try {
        const expenses = await Expense.find()

        res.status(200).json({
            success: true,
            count: expenses.length,
            data: expenses
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//get one
const getExpenseById = async(req,res)=> {
    
    try {
        const expense = await Expense.findById(req.params.id)

        res.status(200).json({
            success: true,
            data: expense
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//update one
const updateExpense = async(req,res)=> {
    
    try {
        const expense = await Expense.findById(req.params.id)

        const updatedExpense = await Expense.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )

        res.status(201).json({
            success: true,
            message: 'Expense Updated!',
            data: updatedExpense
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


//delete one
const deleteExpense = async(req,res)=> {
    
    try {
        const expense = await Expense.findById(req.params.id)

        await expense.deleteOne()

        res.status(201).json({
            success: true,
            message: 'Expense Deleted!'
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


//filtering
const filterExpenses = async(req,res)=> {
    
    try {
        const expenses = await Expense.find({
            category: req.params.category,
        })

        res.status(200).json({
            success: true,
            count: expenses.length,
            data: expenses
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//searching
const searchExpenses = async(req,res)=> {
    
    try {
        const key = req.query.keyword

        const expenses = await Expense.find({
            title: {
                $regex: key,
                $options: "i"
            }
        })

        res.status(200).json({
            success: true,
            count: expenses.length,
            data: expenses
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


const sortExpenses = async(req,res)=> {
    
    try {
        let {order} = req.query

        if(order === "oldest") {
             order = 1
        }
        else if(order === "latest") {
             order = -1
        }
        
        const expenses = await Expense.find().sort({
            createdAt: order
        })

        res.status(200).json({
            success: true,
            count: expenses.length,
            data: expenses
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}



module.exports = {createExpense, getExpenses, getExpenseById, updateExpense, deleteExpense, filterExpenses, searchExpenses, sortExpenses}