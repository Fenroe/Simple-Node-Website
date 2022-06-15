const express = require("express")
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/contact-me', (req, res) => {
  res.render('contact-me')
})

app.get('/:id', (req, res) => {
  res.render('404')
})

app.listen(8080, () => {
  console.log('I\'m listening!')
})
