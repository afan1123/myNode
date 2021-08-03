var fs = require('fs');

function readFile () {
  var html = fs.readFileSync('d:\\a.txt');
  return html;
}

function writeFile () {
  fs.writeFileSync('d:\\b.txt', 'helloworld--b');
  var html = fs.readFileSync('d:\\b.txt');
  return html;
}

function listCategory () {
  return 'listCategory';
}

function listProduct () {
  return 'listProduct';
}

exports.readFile = readFile;
exports.writeFile = writeFile;
exports.listProduct = listProduct;
exports.listCategory = listCategory;
