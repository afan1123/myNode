const cheerio = require('cheerio');
// 获取HTML文档内容，内容的获取跟jQuery一样
const axios = require('axios');
const fs = require('fs');
// const url = require('url');
const path = require('path');

const httpUrl = "https://www.doutula.com/article/list/?page=2";
axios.get(httpUrl).then((res) => {
  // cherrio解析html文档
  let $ = cheerio.load(res.data);
  $('.center-wrap .list-group-item').each((index, item) => {
    let title = $(item).find('.random_title').text()
    var url = $(item).attr('href');
    let reg = /(.*?)\d/igs;
    title = reg.exec(title);
    if (title !== null) {
      title = title[1];
      parsePage(title, url);
    }
  })
})

async function parsePage (title, url) {
  let res = await axios.get(url);
  let $ = cheerio.load(res.data);
  fs.mkdir(path.join(__dirname, './img/' + title), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('创建目录成功：', + './img/' + title);
    }
  });
  $('.pic-content img').each((index, item) => {
    let imgUrl = $(item).attr('src');
    // url.parse(imgUrl);
    // 图片写入的路径和名字
    let extname = path.parse(imgUrl).ext;
    let pathName = `./img/${title}/${title}-${index}${extname}`;
    // 创建写入图片流
    let ws = fs.createWriteStream(pathName);
    axios.get(imgUrl, { responseType: 'stream' }).then((res) => {
      res.data.pipe(ws);
      res.data.on('close', () => {
        ws.close();
      })
    })
  })
}

function witeFile (word) {
  fs.writeFileSync('d:\\c.txt', word);
}

function readFile () {
  fs.readFileSync('d:\\c.txt')
}