const express = require('express')
const dbConnect=require('./dbConnect')
const cors=require('cors')



const userRoute=require('./routes/usersRoute');
const transactionsRoute=require('./routes/transactionsRoute')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/users/',userRoute)
app.use('/api/transactions/',transactionsRoute)

const port =process.env.PORT || 5000


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Node Js server started at  port ${port}!`))
