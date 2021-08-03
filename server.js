var http = require('http');
var url = require('url');
var querystring = require('querystring');

const sayHi = require('./server2')

const hostname = '127.0.0.1';
const port = 3000;

function service (req, res) {
  sayHi.hi()
  var query = url.parse(req.url).query;
  var params = querystring.parse(query)
  console.log(params.name);
  res.writeHead(200, { 'Content-type': 'text/plain' });
  res.end('hello,world')
}
var server = http.createServer(service);
server.listen(port, hostname, () => {
  console.log(`服务器启动，请打开http://${hostname}:${port}`);
})