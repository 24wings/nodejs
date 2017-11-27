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
            case "faceMerge": return this.testFaceMerge;
            //      case 'faceDetect':return this.faceDetect;
            case 'qqai/Cosmetic': return this.testFaceMerge;
            default: return this.testFaceMerge;
        }
    }
    before() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.next();
        });
    }
    display() {
    }
    after() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    testFaceMerge() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.display();
        });
    }
};
default_1 = __decorate([
    Core_1.Route.Controller({ service: "testQQAI" })
], default_1);
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdFFRQUlDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21vb24vd29ya3NwYWNlL25vZGVqcy1tYXN0ZXIvc3JjLyIsInNvdXJjZXMiOlsiQ29udHJvbGxlcnMvVGVzdFFRQUlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrQ0FBb0Q7QUFLcEQsZ0JBQUEsS0FBcUIsU0FBUSxZQUFLLENBQUMsU0FBUztJQUN4QyxRQUFRLENBQUMsTUFBYyxFQUFFLE1BQWM7UUFDbkMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNiLEtBQUssV0FBVyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzVDLGlEQUFpRDtZQUNqRCxLQUFLLGVBQWUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNoRCxTQUFTLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLENBQUM7SUFDTCxDQUFDO0lBQ0ssTUFBTTs7WUFDUixNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDO0tBQUE7SUFDRCxPQUFPO0lBRVAsQ0FBQztJQUNLLEtBQUs7OERBQUssQ0FBQztLQUFBO0lBRVgsYUFBYTs7WUFDZixNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QixDQUFDO0tBQUE7Q0FJSixDQUFBO0FBdkJEO0lBREMsWUFBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQzthQXdCekMifQ==