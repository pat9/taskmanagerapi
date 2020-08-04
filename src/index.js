const express = require('express')
const app = express();
const morgan = require('morgan')

const userRoutes = require('./routes/users.routes')

//Config
app.set('PORT', process.env.PORT || 8000)

//Middlewares
app.use(morgan('dev'))
app.use(express.json())

//routes
app.use('/users', userRoutes)

app.listen(app.get('PORT'), () => console.log(`Listen in port ${app.get('PORT')}`))