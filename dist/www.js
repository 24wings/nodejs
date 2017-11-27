"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa = require("koa");
const Router = require("koa-router");
const bodyparser = require("koa-bodyparser");
const staticServe = require("koa-static");
const views = require("koa-views");
const path = require("path");
const services = require("./Services");
const Core_1 = require("./Core");
let routes = Core_1.Route.RouteBuilder.scannerRoutes(path.resolve(__dirname, './Controllers'));
var router = new Router();
router.post('/admin.login', (ctx) => {
    var result = ctx.request.body.username == 'moon' && ctx.request.body.password == 'moon';
    ctx.body = { ok: result, data: result ? result : '用户名或密码错误' };
});
router.all('/:service/:action', ...routes)
    .post('/api/qqai/faceMerge', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    var { image, model } = ctx.request.body;
    var miniType = image.match(/\/.*;/)[0];
    image = image.replace(`data:image/${miniType}base64,`, '');
    console.log(image, model);
    let data = yield services.qqai.machineView.faceMerge(image, model);
    ctx.body = { ok: true, data: data };
}));
var app = new koa();
app.use(bodyparser({ jsonLimit: '50mb', formLimit: '50mb' }));
app.use(views(path.resolve(__dirname, '../views'), { map: { pug: 'pug' } }));
app.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    //sads
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    ctx.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    ctx.set("X-Powered-By", ' 3.2.1');
    if (ctx.method == "OPTIONS")
        ctx.body = 200;
    else {
        yield next();
    }
}))
    .use(staticServe(path.resolve(__dirname, '../public')));
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(80, () => console.log('server is running on 80'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3d3LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21vb24vd29ya3NwYWNlL25vZGVqcy1tYXN0ZXIvc3JjLyIsInNvdXJjZXMiOlsid3d3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQkFBNEI7QUFDNUIscUNBQXNDO0FBQ3RDLDZDQUE4QztBQUM5QywwQ0FBMkM7QUFDM0MsbUNBQW9DO0FBRXBDLDZCQUE4QjtBQUM5Qix1Q0FBd0M7QUFDeEMsaUNBQStCO0FBRy9CLElBQUksTUFBTSxHQUFHLFlBQUssQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFHeEYsSUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBQyxDQUFDLEdBQUcsRUFBQyxFQUFFO0lBQ2hDLElBQUksTUFBTSxHQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBRSxNQUFNLElBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFFLE1BQU0sQ0FBQztJQUNqRixHQUFHLENBQUMsSUFBSSxHQUFFLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsTUFBTSxDQUFBLENBQUMsQ0FBQSxNQUFNLENBQUEsQ0FBQyxDQUFBLFVBQVUsRUFBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLE1BQU0sQ0FBQztLQUV2QyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDL0MsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUN4QyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsUUFBUSxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUIsSUFBSSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25FLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUN0QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0wsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNwQixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5RCxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBQyxVQUFVLENBQUMsRUFBQyxFQUFDLEdBQUcsRUFBQyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsRUFBQyxDQUFFLENBQUMsQ0FBQztBQUN0RSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQU8sR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO0lBQzFCLE1BQU07SUFDTixHQUFHLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLEdBQUcsQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUscUVBQXFFLENBQUMsQ0FBQztJQUMvRyxHQUFHLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLDZCQUE2QixDQUFDLENBQUM7SUFDdkUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUE7SUFDakMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUM7UUFBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUU1QyxJQUFJLENBQUMsQ0FBQztRQUNKLE1BQU0sSUFBSSxFQUFFLENBQUM7SUFDZixDQUFDO0FBQ0gsQ0FBQyxDQUFBLENBQUM7S0FDQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUV6RCxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7QUFFakMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMifQ==