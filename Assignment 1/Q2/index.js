var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser')

var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

// parse application/json
app.use(bodyParser.json());

app.use('/assets' , express.static('assets'));

app.get('/' , function(req , res){
    res.send('Hey!!! Welcome to our Website');
});

app.get('/form' , function(req , res){
    res.render('form');
});

app.post('/form', function(req, res) {
    console.log('here');
    var ONE_DAY = 1000 * 60 * 60 * 24;
    var dob = req.body.DOB;

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(new Date().getTime() - Date.parse(dob));

    // Convert back to days
     var  days = Math.round(difference_ms/ONE_DAY);
    res.send('Hey ' + req.body.firstname + ', you have lived on this planet for ' + days + ' days');
});

app.listen(3000);