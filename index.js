const express = require('express')
var path = require('path');
const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.render('index', { title: 'Speak-it API', description: 'Welcome to Speak-it API' });
})

app.listen(app.get('port'), () => {
    console.log(`Speak-it API listening on port ${port}!`)
})