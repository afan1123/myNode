const server = require('./server3');
const router = require('./router');
const requestHandler = require('./requestHandler');
var handle = {};
handle['/listCategory'] = requestHandler.obj.listCategory;
handle['/listProduct'] = requestHandler.obj.listProduct;

server.start(router.route, handle)