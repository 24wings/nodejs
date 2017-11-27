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
require("reflect-metadata");
const service = require("./Services");
const fs = require("fs");
const path = require("path");
exports.VIEWPATH = Symbol('VIEWPATH');
exports.SERVICEPATH = Symbol('SERVICEPATH');
exports.CHECKQUERY = Symbol('CHECKQUERY');
exports.CHECKBODY = Symbol('CHECKBODY');
/**
 *
 * 装饰器
 * 如 @Views('project-manage-admin')
 * 在 ProjectManageAdmin上后,调用 this.render('index')自动渲染视图文件夹views下的project-manage-admin/index.html
 *
 *  * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 *
 */
const requiredMetadataKey = Symbol("required");
function required(target, propertyKey, parameterIndex) {
    let existingRequiredParameters = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}
exports.required = required;
function validate(target, propertyName, descriptor) {
    let method = descriptor.value;
    descriptor.value = function () {
        let requiredParameters = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
        if (requiredParameters) {
            for (let parameterIndex of requiredParameters) {
                if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
                    throw new Error("Missing required argument.");
                }
            }
        }
        return method.apply(this, arguments);
    };
}
exports.validate = validate;
var Route;
(function (Route) {
    function Controller(config) {
        return (target) => {
            target.prototype[exports.SERVICEPATH] = config.service;
        };
    }
    Route.Controller = Controller;
    class RouteBuilder {
        /**
         *
         * 构建路由
         */
        static addRoute(routeClass) {
            let service = routeClass.prototype[exports.SERVICEPATH];
            if (this.route.get(service)) {
                throw Error('重复添加路由器' + service);
            }
            else {
                let routeObj = new routeClass();
                this.route.set(service, routeObj);
                console.log('添加路由', service);
            }
            // RouteBuilder.route[SERVICEPATH] = new routeClass();
            // this.route.get()
            return this.route;
        }
        static getRoute() {
            return [
                RouteBuilder.getCoreMiddleware(),
                RouteBuilder.getCoreMiddleware(),
                RouteBuilder.getCoreMiddleware()
            ];
        }
        static getCoreMiddleware() {
            var ctrl = { service: service, db: service };
            return (ctx, next) => __awaiter(this, void 0, void 0, function* () {
                try {
                    let routeObj = this.route.get(ctx.params.service);
                    if (routeObj) {
                        // 参数检验
                        let temp = Object.assign({}, ctrl, {
                            ctx,
                            next,
                            display: (data) => ctx.render(ctx.params.service + '/' + ctx.params.action + '.pug')
                        });
                        var ActionMethod = routeObj.doAction(ctx.params.action, ctx.method.toLowerCase(), next);
                        var actionMethod = ActionMethod.bind(temp);
                        var params = service.functionParser.getFunctionParams(ActionMethod);
                        console.log(params);
                        var autoMapParam = params.map(param => ctx.query[param] | ctx.request.body[param]);
                        yield actionMethod(...autoMapParam);
                    }
                    else {
                        throw Error('路由不存在');
                    }
                }
                catch (e) {
                    ctx.body = { ok: false, data: e };
                }
            });
        }
        static scannerRoutes(dirPath) {
            let state = fs.lstatSync(dirPath);
            if (state.isDirectory()) {
                let files = fs.readdirSync(dirPath);
                files.forEach(filename => {
                    let aboFile = path.resolve(dirPath, filename);
                    let relative = path.relative(__dirname, aboFile);
                    relative = relative.replace(/\\/g, '/');
                    let routePath = './' + relative;
                    console.log('路由文件:', routePath);
                    let routeClass = require(routePath).default;
                    this.addRoute(routeClass);
                });
                return this.getRoute();
            }
            else {
                throw Error('please input a  directiory to be a scannerRoute Directory');
            }
        }
    }
    RouteBuilder.route = new Map();
    Route.RouteBuilder = RouteBuilder;
    class BaseRoute extends Object {
        constructor() {
            super();
            this.service = service;
            delete this.service;
        }
        doAction(action, method, next) {
            return next;
        }
    }
    Route.BaseRoute = BaseRoute;
})(Route = exports.Route || (exports.Route = {}));
var Check;
(function (Check) {
    function Query(key) {
        return (target, propertyKey, descriptor) => {
            let method = target[propertyKey];
            method.prototype[exports.CHECKQUERY] = key;
        };
    }
    Check.Query = Query;
    function Body() {
    }
    Check.Body = Body;
})(Check = exports.Check || (exports.Check = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29yZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tb29uL3dvcmtzcGFjZS9ub2RlanMtbWFzdGVyL3NyYy8iLCJzb3VyY2VzIjpbIkNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDRCQUEwQjtBQUUxQixzQ0FBdUM7QUFHdkMseUJBQTBCO0FBQzFCLDZCQUE4QjtBQUNuQixRQUFBLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDOUIsUUFBQSxXQUFXLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3BDLFFBQUEsVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNsQyxRQUFBLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCRztBQUdILE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRS9DLGtCQUF5QixNQUFjLEVBQUUsV0FBNEIsRUFBRSxjQUFzQjtJQUN6RixJQUFJLDBCQUEwQixHQUFhLE9BQU8sQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsSCwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDaEQsT0FBTyxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDakcsQ0FBQztBQUpELDRCQUlDO0FBRUQsa0JBQXlCLE1BQVcsRUFBRSxZQUFvQixFQUFFLFVBQTZDO0lBQ3JHLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDOUIsVUFBVSxDQUFDLEtBQUssR0FBRztRQUNmLElBQUksa0JBQWtCLEdBQWEsT0FBTyxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLEVB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