var express = require('express');
var path = require('path');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');


// routes
var capitalizeRouter = require('./routes/capitalize.route.js');
var oddEvenRouter = require('./routes/oddEven.route.js');

app.use(express.static('src/server/public'));

//uses
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res) {
  console.log('base route get');
  
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

// route uses
app.use('/capitalize', capitalizeRouter);
app.use('/oddEven', oddEvenRouter);

app.listen(4005, function() {
  console.log('up on 4005');
});
