const mongoose = require('mongoose');

const connectDB = async()=> {
    try {
        const connect = await mongoose.connect('mongodb://127.0.0.1:27017/ledgerly')
        console.log('DB Connected!')
    } catch (error) {
        console.error('DB Error!')
        process.exit(1)
    }
}

module.exports = connectDB