var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var alphaVantageAPI = require('alpha-vantage-cli').AlphaVantageAPI;
const request = require('request');

var app = express();

//Middleware is any function that can call req, res.

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

//
app.post('/api/stocks', function (req, res, next) { 
    request()
})
//Gets CSV file with Alpha API


//Global Vars
app.use(function(req, res, next){
    res.locals.errors = null;
//    var yourApiKey = '944GEPZXLUG844NH';
  //  var theAlphaVantageAPI = alphaVantageAPI(yourApiKey, 'compact', true);
    next();
});

//Express Validator MiddleWare
app.use(expressValidator()); 

app.get('/', function(req, res){
    res.render('index', {
        title: 'Customers'
    });
});

//Link to Chart
app.get('/chart', function(req, res){
    res.render('chart');
});

//Adds user's first name
app.post('/users/add', function(req, res){
    
    req.checkBody('first_name', 'First Name is required').notEmpty();
    
    var errors = req.validationErrors();
    
    if(errors){
      res.render('index', {
        title: 'Customers',
        errors: errors
        });
    } 
    else{
        var newUser = {
        first_name: req.body.first_name
        }
    }
    
    
    console.log(newUser);
    
});

app.listen(3000, function(){
    console.log('Server Started on Port 3000');
})




