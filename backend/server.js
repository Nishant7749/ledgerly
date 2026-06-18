const express = require('express')
  const app = express()
const cors = require('cors');
const connectDB = require('./config/Db')
const Router = require('./routes/Routes')
const UserRouter = require('./routes/userRoutes')

connectDB()

app.use(cors())

app.use(express.json())

app.use('/expenses', Router)
app.use('/auth', UserRouter)

app.get('/', (req, res)=> {
    res.send('Ledger on Work...')
})


app.listen(3000, ()=> {
    console.log('[connection] http://localhost:3000')
})