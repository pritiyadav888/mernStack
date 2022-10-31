const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next)=>{
    console.log('something')
    next()
})
app.get('/', (req, res, next) => {
    console.log('something 1')
   
  res.send('Hello Worldvvvv!')
  next()
})
app.get('/two', (req, res, next) => {
    console.log('something 2')
    res.send('Hello Worldvvvv!')
    next()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})