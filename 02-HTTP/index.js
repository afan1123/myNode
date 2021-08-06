const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=UTF-8');
  if (req.url === '/') {
    res.end('<h1>首页</h1>')
  } else if (req.url === '/news') {
    res.end('<h1>新闻</h1>');
  } else {

    res.end('404页面找不到')
  }
})

server.listen(3000, () => {
  console.log('服务启动完毕');
})