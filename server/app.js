var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const dbConnection = require('./db/DB');

dbConnection().then(r=>console.log(r));

var indexRouter = require('./routes/index');
var productRouter = require('./routes/products');
var contactRouter=require('./routes/contact');


var app = express();

// view engine setup
/*middleware*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
/*define log format*/
app.use(logger('dev'));
/*convert request data to json*/
app.use(express.json());
/*when we pass form data as url encoded they convert to json*/
app.use(express.urlencoded({ extended: false }));
/*req cookies*/
app.use(cookieParser());
/*static path define(public kiyn eka thmi static path thiyenne)*/
app.use(express.static(path.join(__dirname, 'public')));

/*Enable cors for all route*/
app.use(cors())
/*hadel preflight req*/
/*
app.options('*',cors())
*/
/*path of route*/
app.use('/', indexRouter);/*http//:localhost/4000/*/
app.use('/products', productRouter);
app.use('/contact', contactRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
