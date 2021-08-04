var path = require('path');
var express = require('express');
var fs = require('fs');
var multer = require('multer');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(multer({ dest: path.join(__dirname, 'temp') }).array('image'));

function getExtName (filename) {
  var index = filename.lastIndexOf('.');
  var len = filename.length;
  return filename.substring(index + 1, len);
}

app.post('/uploadPhoto', (req, res) => {
  var extname = getExtName(req.files[0].originalname);
  var randomNumber = Math.ceil(Math.random * 10000000);
  var randomFileName = randomNumber + '.' + extname;
  var imgFolder = __dirname + '/public/img/';
  if (!fs.exists(imgFolder)) {
    fs.mkdir(imgFolder);
  }
  var imgFile = __dirname + "/public/img/" + randomFileName;
  var uploadTempFilePath = req.files[0].path;
  fs.readFile(uploadTempFilePath, (err, data) => {
    fs.writeFile(imgFile, data, (err) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end("<img src='img/" + randomFileName + "'/>");
    })
  })
})

app.listen(8080);