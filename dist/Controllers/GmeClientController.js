"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Core_1 = require("../Core");
let default_1 = class extends Core_1.Route.BaseRoute {
    doAction(action, method) {
        switch (action) {
            case 'connect':
                return this.connect;
        }
    }
    before() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.next();
        });
    }
    after() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            let time = new Date().getTime();
            this.ctx.body = { ok: true, data: time };
        });
    }
};
default_1 = __decorate([
    Core_1.Route.Controller({ service: "gameClient" })
], default_1);
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR21lQ2xpZW50Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tb29uL3dvcmtzcGFjZS9ub2RlanMtbWFzdGVyL3NyYy8iLCJzb3VyY2VzIjpbIkNvbnRyb2xsZXJzL0dtZUNsaWVudENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtDQUFvRDtBQUtwRCxnQkFBQSxLQUFxQixTQUFRLFlBQUssQ0FBQyxTQUFTO0lBQ3hDLFFBQVEsQ0FBQyxNQUFjLEVBQUUsTUFBYztRQUNuQyxNQUFNLENBQUEsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQ1gsS0FBSyxTQUFTO2dCQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7SUFDTCxDQUFDO0lBQ0ssTUFBTTs7WUFDUixNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDO0tBQUE7SUFDSyxLQUFLOzhEQUFHLENBQUM7S0FBQTtJQUVULE9BQU87O1lBQ1QsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBQyxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxDQUFDO1FBQ3RDLENBQUM7S0FBQTtDQUVKLENBQUE7QUFqQkQ7SUFEQyxZQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDO2FBa0IzQyJ9