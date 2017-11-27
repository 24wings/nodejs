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
            case 'gfk':
                return this.gfk;
        }
    }
    gfk(username, password) {
    }
    before() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.next();
        });
    }
    after() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
};
default_1 = __decorate([
    Core_1.Route.Controller({ service: "game" })
], default_1);
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9vbi93b3Jrc3BhY2Uvbm9kZWpzLW1hc3Rlci9zcmMvIiwic291cmNlcyI6WyJDb250cm9sbGVycy9HYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0NBQW9EO0FBS3BELGdCQUFBLEtBQXFCLFNBQVEsWUFBSyxDQUFDLFNBQVM7SUFDeEMsUUFBUSxDQUFDLE1BQWMsRUFBRSxNQUFjO1FBQ25DLE1BQU0sQ0FBQSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDWCxLQUFLLEtBQUs7Z0JBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQztJQUNMLENBQUM7SUFFRCxHQUFHLENBQUMsUUFBUSxFQUFDLFFBQVE7SUFFckIsQ0FBQztJQUtLLE1BQU07O1lBQ1IsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQztLQUFBO0lBRUssS0FBSzs7UUFFWCxDQUFDO0tBQUE7Q0FDSixDQUFBO0FBdEJEO0lBREMsWUFBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzthQXVCckMifQ==