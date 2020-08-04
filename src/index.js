const express = require('express')
const app = express();
const morgan = require('morgan')

//Config
app.set('PORT', process.env.PORT || 8000)

//Middlewares
app.use(morgan('dev'))


app.listen(app.get('PORT'), () => console.log(`Listen in port ${app.get('PORT')}`))