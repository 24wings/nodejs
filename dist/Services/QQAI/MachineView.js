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
                time_stamp: Math.round(parseInt((new Date().getTime() / 1000).toFixed(1))),
            };
            var sign = options['sign'] = SignatureLogic_1.SignatureLogic.paramsToSign(options, this.appKey);
            var body = yield this.requestApi(MachineView.FACE_COSMETIC, options);
            return body;
        });
    }
    detectFace(image, mode = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            var options = {
                app_id: this.appId,
                mode,
                image,
                nonce_str: (Math.random() * 1000000 + '').replace('.', ''),
                time_stamp: Math.round(parseInt((new Date().getTime() / 1000).toFixed(1))),
            };
            var sign = options['sign'] = SignatureLogic_1.SignatureLogic.paramsToSign(options, this.appKey);
            var body = yield this.requestApi(MachineView.FACE_DETECT, options);
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
MachineView.FACE_DETECT = "https://api.ai.qq.com/fcgi-bin/face/face_detectface";
exports.MachineView = MachineView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFjaGluZVZpZXcuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9vbi93b3Jrc3BhY2Uvbm9kZWpzLW1hc3Rlci9zcmMvIiwic291cmNlcyI6WyJTZXJ2aWNlcy9RUUFJL01hY2hpbmVWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpQ0FBa0M7QUFFbEMscURBQWtEO0FBQ2xELG1DQUFvQztBQUdwQyxNQUFNLENBQUMsa0NBQWtDLElBQUksK0JBQWMsQ0FBQyxZQUFZLENBQ3RFO0lBQ0UsSUFBSSxFQUFFLFFBQVE7SUFDZCxNQUFNLEVBQUUsS0FBSztJQUNiLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLFNBQVMsRUFBRSxZQUFZO0NBQ3hCLEVBQ0Qsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO0FBSXZDO0lBb0ZFLFlBQW9CLEtBQWEsRUFBVSxNQUFjO1FBQXJDLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQztJQTVFeEQsU0FBUyxDQUFDLE1BQWMsRUFBRSxLQUFhOztZQUczQyxJQUFJLE9BQU8sR0FBRztnQkFDWixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2xCLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQzFELFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFFLEtBQUssRUFBRSxLQUFLO2dCQUNaLEtBQUssRUFBRSxNQUFNO2FBQ2QsQ0FBQztZQUNGLElBQUksSUFBSSxHQUFHLCtCQUFjLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFB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