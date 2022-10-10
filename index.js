const express = require('express'),
    pug = require('pug'),
    path = require('path'),
    app = express(),
    port = 3000


// Configure express
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'assets')));

// Setup routes
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})


// Listen
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})