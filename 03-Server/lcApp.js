const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');
class LcApp {
  constructor() {
    this.server = http.createServer();
    this.reqEvent = {};
    this.server.on('request', (req, res) => {
      let pathObj = path.parse(req.url);
      if (pathObj.dir in this.reqEvent) {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.render = render;
        req.pathObj = pathObj;
        this.reqEvent[pathObj.dir](req, res);
      } else {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h1>404页面找不到</h1>');
      }
    })
  }
  on (url, fn) {
    this.reqEvent[url] = fn;
  }
  run (port, callback) {
    this.server.listen(port, callback)
  }


}
function render (options, path) {
  fs.readFile(path, { encoding: 'utf-8', flag: 'r' }, (err, data) => {
    if (err) { return false; }
    let reg = /\{\{(.*?)\}\}/igs;
    let result;
    while (result = reg.exec(data)) {
      let strKey = result[1].trim();
      let strValue = options[strKey];
      data = data.replace(result[0], strValue);
    }
    this.end(data);
  })
}
module.exports = LcApp;