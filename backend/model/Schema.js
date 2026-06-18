const mongoose = require('mongoose');

const expSchema =  mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    amount: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true,
        enum: [
            'Food',
            'Travel',
            'Shopping',
            'EMIs',
            'Others'
        ]
    },

    date: {
        type: Date,
        default: Date.now,
    },
}, {timestamps: true})

module.exports = mongoose.model('Expense', expSchema)