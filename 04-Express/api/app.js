var express = require('express');
var app = express();

app.engine('html', require('express-art-template'));
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/commnet', (req, res) => {
  res.render('comment.html');
})

app.listen(8080, () => {
  console.log('服务启动', 'http://127.0.0.1:8080');
})