

const route= require('koa-route');
var koaBody=require('koa-body');
const Koa = require('koa');
const app = new Koa();







// 首页 —— 广告（超值特惠）
var homeAdData = require('./home/ad.js');


// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./home/list.js');


const about = ctx => {

    ctx.response.body = homeAdData ;
};

const main = ctx => {
    ctx.response.body = homeListData;
};

app.use(route.get('/api/homelist/:city/:page', main));
app.use(route.get('/api/homead', about));
app.listen(3000);
//开始服务并生成路由
//app.use(router.routes());
//app.use(router.allowedMethods());
//app.listen(3000);
