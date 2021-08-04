const http = require('http');
const url = require('url');
// const port = 3000;
// const hostname = '127.0.0.1';
function start (route, handle) {
  function onRequest (req, res) {
    var pathname = url.parse(req.url).pathname;
    var html = route(handle, pathname);
    res.writeHead(200, { 'Content-type': 'text/plain;charset=UTF-8' });
    res.write(html);
    res.end();
  }
  http.createServer(onRequest).listen(8088, () => {
    console.log(`服务已启动`);
  })
}
exports.start = start;