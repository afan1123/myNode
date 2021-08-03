var fs = require('fs');
fs.writeFile('d:\\a.txt', 'hello,world', (err) => {
  if (err) { throw (err) }
  else {
    fs.readFile('d:\\a.txt', 'ascii', (err, data) => {
      if (err) { throw (err) }
      else {
        console.log(data.toString());
      }
    })
  }
})