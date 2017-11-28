const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const uuid = require('uuid')
const db = require('./model/model.js')
const port = process.env.PORT || 3000

app.disable('x-powered-by')
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(bodyParser.json())

// const bankRoutes = require('./src/routes/routes.js')
// app.use('/', bankRoutes)



//console.log(db)

app.get('/banks', (req, res, next) => {
  res.json( {db} )
})

app.get('/banks/:id', (req, res, next) => {
    const { id } = req.params
    if (!id) return next({status: 400,message: 'series not found'})
    let result = db.filter(function(ele) {
      return ele.id === id
    })
    res.status(200).json(result[0])
  })










app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err })
})
  
app.use((req, res, next) => {
    res.status(404).json({ error: { message: 'Not found' }})
})
  
const listener = () => `Listening on port ${port}!`
app.listen(port, listener)
  
module.exports = app