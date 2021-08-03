const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(res.on('data', (chunk) => {
    console.log(chunk.toString());
  }));
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
  res.end('Hello World,哈哈哈哈12312');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});