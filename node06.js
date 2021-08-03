var url = require('url');
// var urlObj = url.parse('https://www.bilibili.com/video/BV1w64y147JA?p=8');
// console.log(urlObj);

console.log(url.format({ protocol: 'https', hostname: 'www.baidu.com', port: '80', search: 'name=zhnagsan' }));