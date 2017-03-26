var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')

var app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/getState', function(req, res, next) {
  fs.readFile('./state.json', 'utf8', function (err, data) {
    if (err) throw err
    res.json(JSON.parse(data))
  });
})

app.post('/updateState', function (req, res, next) {
  console.log(JSON.stringify(req.body))
  fs.writeFile('./state.json', JSON.stringify(req.body), function (err, succ) {
    if (err) throw err
    res.send(succ)
  })
})

app.listen(3000)

console.log("Running on port 3000...")
