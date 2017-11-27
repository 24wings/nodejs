import koa = require('koa');
import Router = require('koa-router');
import bodyparser = require('koa-bodyparser');
import staticServe = require('koa-static');
import views = require('koa-views');
import pug = require('pug');
import path = require('path'); 
import services = require('./Services');
import { Route } from './Core';  
 

let routes = Route.RouteBuilder.scannerRoutes(path.resolve(__dirname, './Controllers'));


var router = new Router();
router.post('/admin.login',(ctx)=>{
  var result =ctx.request.body.username=='moon'&&ctx.request.body.password=='moon';
  ctx.body ={ok:result,data:result?result:'用户名或密码错误'};
});
router.all('/:service/:action', ...routes)
 //ss
  .post('/api/qqai/faceMerge', async (ctx, next) => {  
    var { image, model } = ctx.request.body;
    var miniType = image.match(/\/.*;/)[0];
    image = image.replace(`data:image/${miniType}base64,`, '');  
    console.log(image, model);
    let data = await services.qqai.machineView.faceMerge(image, model);
    ctx.body = { ok: true, data: data };
  });


var app = new koa();
app.use(bodyparser({ jsonLimit: '50mb', formLimit: '50mb' }));
app.use(views(path.resolve(__dirname,'../views'),{map:{pug:'pug'}} ));
app.use(async (ctx, next) => {
  //sads
  ctx.set("Access-Control-Allow-Origin", "*"); 
  ctx.set("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  ctx.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  ctx.set("X-Powered-By", ' 3.2.1')
  if (ctx.method == "OPTIONS") ctx.body = 200;
  /*让options请求快速返回*/
  else {
    await next();
  }
})
  .use(staticServe(path.resolve(__dirname, '../public')))

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(80, () => console.log('server is running on 80'));