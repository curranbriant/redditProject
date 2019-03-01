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

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
})