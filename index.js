const express = require('express');
const app = express();
const path = require('path');
var exphbs  = require('express-handlebars');

const PORT = process.env.PORT || 5000;


const os = "ehjver evaer ver v erver "
// set handlebars middleware 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// set handlebar routes 
app.get('/', function (req, res) {
    res.render('home', {
        stuff: os
    });
});


// set static folder 
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log('server is listening on ' + PORT));