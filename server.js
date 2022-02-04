const express = require('express')
const app = express();
const port = 5000;
//import router
const indexRouter = require('./routers/indexRouter')
const userRouter = require('./routers/userRouter')

app.use('/', indexRouter)
app.use('/users', userRouter)

app.listen(port, () => {
    console.log(`App running on port${port}`)
})