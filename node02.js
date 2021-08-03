var http = require('http')
var options = {
  hostname: 'www.baidu.com',
  port: 80,
  method: 'get'
}
var req = http.request(options, (res) => {
  res.on('data', (chunk) => {
    console.log(chunk.toString());
  })
})
req.on('error', (err) => {
  console.log('出错了');
  console.log(err.message);
})
req.end();
