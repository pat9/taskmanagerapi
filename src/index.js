const express = require('express')
const app = express();
const morgan = require('morgan')
const cors = require('cors')

const userRoutes = require('./routes/users.routes')
const taksRoutes = require('./routes/tasks.routes')

//Config
app.set('PORT', process.env.PORT || 8000)

//Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors("*"))

//routes
app.use('/users', userRoutes)
app.use('/tasks', taksRoutes)

app.listen(app.get('PORT'), () => console.log(`Listen in port ${app.get('PORT')}`))