var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var usersRouter = require('./routes/users');
const roverRouter = require('./routes/rover');

var app = express();
if(process.env.NODE_ENV !== 'production') { app.use(cors({ origin: "http://localhost:3001", optionsSuccessStatus: 200 })); }

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* GET home page. */
app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/user', usersRouter);
app.use('/rover', roverRouter);

module.exports = app;
