const express = require('express')
const app = express()
const hbs = require('hbs')
const parser = require('body-parser')
const methodOverride = require('method-override')

app.set('view engine', 'hbs')
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(express.static("public"));
app.use(require('./routes/index.js'))

app.listen(2000, () => console.log('listenting on port 2000'))