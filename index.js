const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'miniproject.html'))
  
})
app.get('/templates', (req, res) => {
  res.sendFile(path.join(__dirname,'templates.html'))
  
})
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})