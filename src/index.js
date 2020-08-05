const express = require('express')
const app = express();
const morgan = require('morgan')
const cors = require('cors')

const userRoutes = require('./routes/users.routes')
const taksRoutes = require('./routes/tasks.routes')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Config
app.set('PORT', process.env.PORT || 8000)

//Middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/users', userRoutes)
app.use('/tasks', taksRoutes)

app.listen(app.get('PORT'), () => console.log(`Listen in port ${app.get('PORT')}`))