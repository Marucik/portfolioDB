var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require("./db.json");

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('<center><h1>Sorki, nic tu nie znajdziesz :c</h1></center>');
})

app.get('/projects', (req, res) => {
    res.json(db.projects);
})

app.get('/tech', (req, res) => {
    res.json(db.tech);
})

app.get('/contact', (req, res) => {
    res.json(db.contact);
})


let PORT = process.env.PORT || 80;

app.listen(PORT, function () {
    console.log(`Server listening on port: ${PORT}`);
  })