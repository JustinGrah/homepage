const express = require('express'),
    pug = require('pug'),
    path = require('path'),
    app = express(),
    port = 3000;


// Configure express
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'assets')));

// Setup routes
app.get('/', (req, res) => {
    res.render('index');
})

// Route set every request as a param. Then route based on the param. If Param is inavild, route to /
app.get('/:pageID', (req, res) => {
    if (undefined != req.params.pageID) {
        switch (req.params.pageID) {
            case 'about':
                res.render('about');
                break;

            case 'projects':
                res.render('projects');
                break;

            case 'contact':
                res.render('contact');
                break;

            case '/home':
                res.render('index');
                break;

            default:
                res.redirect('/');
                break;
        }
    }
})

// Listen
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})