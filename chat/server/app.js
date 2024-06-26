
var port = 3001;
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require('mongoose')
const createError = require('http-errors')
const cors = require('cors')


var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
app.use(cors());
require("dotenv").config(); 
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/auth", require('./routes/auth') );

// app.use((err, req , res ,next ) => {
//     if (err.name = 'MongoError' || err.name === 'ValidationError'  || err.name === 'CastError'){
//       err.status = 422 ;
//     }
//     res.status(err.status || 500).json({message: err.message || 'some error accured.'});

// });

// app.use((err, req , res ,next ) => {
//     if (req.get('accept').includes('json')){
//         return next (createError(404));
//     }
//     res.status(404).sendFile(path.join(__dirname,'public', 'index.html'));
// })



app.listen(port , () => console.log(`the sever run in ${port}`))
mongoose.connect('mongodb://localhost:27017/chat')
module.exports = app;
