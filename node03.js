var http = require('http');
var querystring = require('querystring');
var str = querystring.stringify({ name: '张三', age: 18 });
console.log(str);
// var options = { hostname: 'www.baidu.com', port: 80, method: 'get' }
// http.get(options, (res) => {
//   res.on('data', (chunk) => {

//     console.log(chunk.toString());
//   })
// })