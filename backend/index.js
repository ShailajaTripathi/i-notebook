const connectToMongo=require('./db')
const express = require('express')
const app = express()
const port = 3000
connectToMongo();


//if we want to use req.body so we have to put this middleware
app.use(express.json())


//Available rouutes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
