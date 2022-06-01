const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

const db = process.env.DB;
mongoose.connect(`mongodb://${db || 'localhost'}:27017/todoListDatabase`, {useNewUrlParser: true});

require('./routes/todo')(app);

app.listen(3001, function() {
  console.log('Server started on port 3001');
})
