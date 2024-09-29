const express = require('express')
const morgan = require('morgan')

const app = express()

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(express.json())

app.use((req, res, next) =>{
    console.log('Hello from the middleware')
    next()
})
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    next()
})

app.get('/', (req, res) => {
    res.send('Welcome To The StayNest API!');
});

module.exports = app