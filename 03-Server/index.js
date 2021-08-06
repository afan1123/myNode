const lcApp = require('./lcApp');
// import { lcApp } from './lcApp';
const app = new lcApp();

app.on('/', (req, res) => {
  res.end('首页');
})
app.on('/news', (req, res) => {
  res.end('新闻页');
})
app.on('/movies', (req, res) => {
  let movies = [
    {
      name: "暴雪",
      brief: "1"
    }, {
      name: "火山",
      brief: "2"
    }
  ];
  let index = req.pathObj.base;
  res.render(movies[index], './index.html')
})









app.run(3000, () => {
  console.log('服务已启动',);
})