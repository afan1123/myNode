const http = require('http');
const url = require('url');
const axios = require('axios');
const request = require("request");
const iconv = require('iconv-lite');

const baseURL = 'https://www.dytt8.net/html/gndy/index.html';
let ROOTURL = 'https://www.dytt8.net';


function req (options) {
  return new Promise((resolve, reject) => {
    request(options, (err, res, body) => {
      body = iconv.decode(body, "gb2312");
      if (err) {
        reject(err)
      } else {
        resolve({ res, body })
      }
    })
  })
}

// 获取起始页的所有分类
async function getClassUrl () {
  const option = {
    encoding: null,
    url: baseURL
  }
  let { res, body } = await req(option);
  let reg = /<div id="menu"><div class="contain"><ul>\s+<li>(.*?)<font color=red>收藏本站/igs
  let result = reg.exec(body)[1];
  let reg1 = /<a href="(.*?)">(.*?)<\/a>/igs;
  let matchResult = result.match(reg1);
  let array = [];
  for (let i = 0; i < matchResult.length; i++) {
    let reg2 = /<a href="(.*?)">(.*?)<\/a>/igs;
    let res1 = reg2.exec(matchResult[i]);
    let obj = {
      url: ROOTURL + res1[1],
      category: res1[2]
    }
    array.push(obj)
  }
  return array;
}


// 获取分类里的电影的链接
async function getMovies (url) {
  const option = {
    encoding: null,
    url
  }
  let { res, body } = await req(option);
  let reg = /<div class="co_content8">(.*?)条记录/igs;
  let reg1 = /<a href="(.*?)" class="ulink">(.*?)<\/a>/igs;
  let result = reg.exec(body)[1];
  let matchResult = result.match(reg1);
  let array = [];
  for (let i = 0; i < matchResult.length; i++) {
    let reg2 = /<a href="(.*?)" class="ulink">(.*?)<\/a>/igs;
    let res1 = reg2.exec(matchResult[i]);
    let obj = {
      url: ROOTURL + res1[1],
      movieName: res1[2]
    }
    array.push(obj)
  }
  return array;
}

getClassUrl().then((urls) => {
  getMovies(urls[0].url)
});

