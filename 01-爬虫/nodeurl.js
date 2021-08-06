let url = require('url');
// let httpUrl = "https://game.bilibili.com/2021bilibiliGamefbh/?msource=1&source=trackadf_0f5cb37284c54a729f445bba3c026c85&gameID=164";
// var urlObj = url.parse(httpUrl);
// console.log(urlObj);

let baseUrl = "http://www.baidu.com";
let target = "./qinaduan.html";

var newUrl = url.resolve(baseUrl, target)
console.log(newUrl);


