"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
let default_1 = class default_1 extends Core_1.Route.BaseRoute {
    doAction(action, method) {
        switch (action) {
            case "faceMerge": return this.faceMerge;
            case 'faceCosmetic': return this.faceCosmetic;
            case "detectFace": return this.detectFace;
            default: return this.faceMerge;
        }
    }
    faceMerge() {
        return __awaiter(this, void 0, void 0, function* () {
            let { image, model } = this.ctx.request.body;
            var miniType = image.match(/\/.*;/)[0];
            console.log(miniType);
            image = image.replace(`data:image${miniType}base64,`, '');
            console.log("参数：", image, model);
            let data = yield this.service.qqai.machineView.faceMerge(image, model);
            this.ctx.body = { ok: true, data: data.ret == 0 ? `data:image${miniType}base64,` + data.data.image : data.ret };
            //ss
        });
    }
    faceCosmetic(image, cosmetic) {
        return __awaiter(this, void 0, void 0, function* () {
            this.ctx.body = yield this.service.qqai.machineView.faceCosmetic(cosmetic, image);
        });
    }
    before() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.next();
        });
    }
    after() { }
    detectFace() {
        return __awaiter(this, void 0, void 0, function* () {
            let { image, model } = this.ctx.request.body;
            var miniType = image.match(/\/.*;/)[0];
            console.log(miniType);
            image = image.replace(`data:image${miniType}base64,`, '');
            var data = yield this.service.qqai.machineView.detectFace(image, model ? model : 1);
            this.ctx.body = { ok: true, data };
        });
    }
};
__decorate([
    __param(0, Core_1.required),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], default_1.prototype, "faceCosmetic", null);
default_1 = __decorate([
    Core_1.Route.Controller({ service: "qqai" })
], default_1);
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVFBSUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9vbi93b3Jrc3BhY2Uvbm9kZWpzLW1hc3Rlci9zcmMvIiwic291cmNlcyI6WyJDb250cm9sbGVycy9RUUFJQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0NBQW9EO0FBS3BELGdCQUFBLGVBQXFCLFNBQVEsWUFBSyxDQUFDLFNBQVM7SUFDeEMsUUFBUSxDQUFDLE1BQWMsRUFBRSxNQUFjO1FBQ25DLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDYixLQUFLLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN4QyxLQUFLLGNBQWMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUM5QyxLQUFLLFlBQVksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMxQyxTQUFTLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ25DLENBQUM7SUFJTCxDQUFDO0lBQ1EsU0FBUzs7WUFDZCxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUU3QyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFdEIsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxRQUFRLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLFFBQVEsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDaEgsSUFBSTtRQUNSLENBQUM7S0FBQTtJQUdLLFlBQVksQ0FBWSxLQUFhLEVBQUUsUUFBZ0I7O1lBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFdEYsQ0FBQztLQUFBO0lBQ0ssTUFBTTs7WUFDUixNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDO0tBQUE7SUFDRCxLQUFLLEtBQUssQ0FBQztJQUVMLFVBQVU7O1lBQ1osSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFFN0MsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXRCLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsUUFBUSxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDMUQsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1FBRXZDLENBQUM7S0FBQTtDQUNKLENBQUE7QUFwQkc7SUFBcUIsV0FBQSxlQUFRLENBQUE7Ozs7NkNBRzVCO0FBN0JMO0lBREMsWUFBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzthQStDckMifQ==