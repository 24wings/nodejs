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
const assert = require("assert");
const SignatureLogic_1 = require("./SignatureLogic");
const request = require("request");
assert('E8F6F347D549FE514F0C9C452C95DA9D' == SignatureLogic_1.SignatureLogic.paramsToSign({
    text: '腾讯开放平台',
    app_id: 10000,
    time_stamp: '1493449657',
    nonce_str: '20e3408a79'
}, 'a95eceb1ac8c24ee28b70f7dbba912bf'));
class MachineView {
    constructor(appId, appKey) {
        this.appId = appId;
        this.appKey = appKey;
    }
    faceMerge(base64, model) {
        return __awaiter(this, void 0, void 0, function* () {
            var options = {
                app_id: this.appId,
                nonce_str: (Math.random() * 1000000 + '').replace('.', ''),
                time_stamp: Math.round(parseInt((new Date().getTime() / 1000).toFixed(1))),
                model: model,
                image: base64
            };
            var sign = SignatureLogic_1.SignatureLogic.paramsToSign(options, this.appKey);
            options['sign'] = sign;
            var body = yield this.requestApi(MachineView.FACE_MERGE, options, "POST");
            return body;
        });
    }
    /**
     * app_id	是	int	正整数	1000001	应用标识（AppId）
    time_stamp	是	int	正整数	1493468759	请求时间戳（秒级）
    nonce_str	是	string	非空且长度上限32字节	fa577ce340859f9fe	随机字符串
    sign	是	string	非空且长度固定32字节	B250148B284956EC5218D4B0503E7F8A	签名信息，详见接口鉴权
    cosmetic	是	int	正整数	1	美妆编码，定义见下文描述
    image	是	string	原始图片的base64编码数据（大小上限500KB）	...	待处理图
     */
    faceCosmetic(cosmetic, image) {
        return __awaiter(this, void 0, void 0, function* () {
            var options = {
                app_id: this.appId,
                cosmetic,
                image,
                nonce_str: (Math.random() * 1000000 + '').replace('.', ''),
                time_stamp: (Math.random() * 1000000 + '').replace('.', ''),
            };
            var sign = options['sign'] = SignatureLogic_1.SignatureLogic.paramsToSign(options, this.appKey);
            var body = yield this.requestApi(MachineView.FACE_COSMETIC, options);
            return body;
        });
    }
    requestApi(url, options, method = "Get") {
        return new Promise(resolve => {
            var res = request.post({
                url,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, formData: options
            }, (err, res, body) => {
                if (err)
                    console.error('err:', err);
                else {
                    delete options.image;
                    console.log(`request url:${url}   `, options);
                    resolve(JSON.parse(body));
                }
            });
        });
    }
}
/**人脸美妆 */
MachineView.FACE_COSMETIC = "https://api.ai.qq.com/fcgi-bin/ptu/ptu_facecosmetic";
/**人脸融合 */
MachineView.FACE_MERGE = "https://api.ai.qq.com/fcgi-bin/ptu/ptu_facemerge";
exports.MachineView = MachineView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFjaGluZVZpZXcuanMiLCJzb3VyY2VSb290IjoiRDovd29ya3NwYWNlL2N0cmwvY3RybC1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiU2VydmljZXMvUVFBSS9NYWNoaW5lVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsaUNBQWtDO0FBRWxDLHFEQUFrRDtBQUNsRCxtQ0FBb0M7QUFHcEMsTUFBTSxDQUFDLGtDQUFrQyxJQUFJLCtCQUFjLENBQUMsWUFBWSxDQUN0RTtJQUNFLElBQUksRUFBRSxRQUFRO0lBQ2QsTUFBTSxFQUFFLEtBQUs7SUFDYixVQUFVLEVBQUUsWUFBWTtJQUN4QixTQUFTLEVBQUUsWUFBWTtDQUN4QixFQUNELGtDQUFrQyxDQUFDLENBQUMsQ0FBQztBQUl2QztJQW1FRSxZQUFvQixLQUFhLEVBQVUsTUFBYztRQUFyQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUE1RHhELFNBQVMsQ0FBQyxNQUFjLEVBQUUsS0FBYTs7WUFHM0MsSUFBSSxPQUFPLEdBQUc7Z0JBQ1osTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNsQixTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUMxRCxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxRSxLQUFLLEVBQUUsS0FBSztnQkFDWixLQUFLLEVBQUUsTUFBTTthQUNkLENBQUM7WUFDRixJQUFJLElBQUksR0FBRywrQkFBYyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdELE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzFFLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFHZCxDQUFDO0tBQUE7SUFFRDs7Ozs7OztPQU9HO0lBQ0csWUFBWSxDQUFDLFFBQWdCLEVBQUUsS0FBYTs7WUFDaEQsSUFBSSxPQUFPLEdBQUc7Z0JBQ1osTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNsQixRQUFRO2dCQUNSLEtBQUs7Z0JBQ0wsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFDMUQsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQzthQUM1RCxDQUFBO1lBQ0QsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLCtCQUFjLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDOUUsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDckUsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7S0FBQTtJQUVPLFVBQVUsQ0FBQyxHQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sR0FBRyxLQUFLO1FBRXJELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMzQixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUNwQjtnQkFDRSxHQUFHO2dCQUNILE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxtQ0FBbUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPO2FBQ3BGLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUNwQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7b0JBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxDQUFDO29CQUNKLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsS0FBSyxFQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM3QyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUU1QixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUdMLENBQUM7O0FBaEVELFVBQVU7QUFDSSx5QkFBYSxHQUFHLHFEQUFxRCxDQUFDO0FBRXBGLFVBQVU7QUFDSSxzQkFBVSxHQUFHLGtEQUFrRCxDQUFDO0FBTGhGLGtDQW9FQyJ9