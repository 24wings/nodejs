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
// //阿里大于发送短信验证码
const message_1 = require("./message");
class AliDaYuMessage {
    authCode(PhoneNumbers, template, SignName = '狠享赚', TemplateCode = 'SMS_85215005') {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('短信验证:', PhoneNumbers);
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                if (!template) {
                    let time = new Date().getTime().toString();
                    let Code = time.substring(time.length - 6, time.length);
                    template = { Code, product: '狠享赚' };
                }
                let result = yield this.smsClient.sendSMS({ PhoneNumbers, SignName, TemplateCode, TemplateParam: JSON.stringify(template) });
                let { Code } = result;
                if (Code === 'OK') {
                    //处理返回参数
                    resolve(result);
                }
            }));
        });
    }
    message(phone, message) {
        return __awaiter(this, void 0, void 0, function* () {
            if ({ phone, message }) {
            }
            else {
            }
            return true;
        });
    }
    constructor(accessKeyId, secretAccessKey) {
        this.smsClient = new message_1.SMSClient({ accessKeyId, secretAccessKey });
    }
    /**返回短信数组 */
    queryCode(phone) {
        //查询短信发送详情
        return new Promise(resolve => {
            let now = new Date();
            let SendDate = `${now.getFullYear()}${(now.getMonth() + 1).toString().length == 1 ? '0' + (now.getMonth() + 1).toString() : (now.getMonth() + 1).toString()}${now.getDate()}`;
            console.log(SendDate);
            this.smsClient.queryDetail({
                PhoneNumber: phone,
                SendDate,
                PageSize: '100',
                CurrentPage: "0"
            }).then(function (res) {
                let { Code, SmsSendDetailDTOs } = res;
                if (Code === 'OK') {
                    //处理发送详情内容
                    resolve(SmsSendDetailDTOs.SmsSendDetailDTO);
                }
            }, function (err) {
                //处理错误
                resolve();
            });
        });
    }
}
exports.AliDaYuMessage = AliDaYuMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRDovd29ya3NwYWNlL2N0cmwvY3RybC1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiU2VydmljZXMvQWxpRGF5dS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0JBQWdCO0FBQ2hCLHVDQUFzQztBQW1CdEM7SUFHVSxRQUFRLENBQUMsWUFBb0IsRUFBRSxRQUE0QyxFQUFFLFdBQW1CLEtBQUssRUFBRSxlQUF1QixjQUFjOztZQUM5SSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQTtZQUNsQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBTyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ3pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDWixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUMzQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEQsUUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQTtnQkFDdkMsQ0FBQztnQkFDRCxJQUFJLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM3SCxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDO2dCQUN0QixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDaEIsUUFBUTtvQkFDUixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLENBQUM7WUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0lBQ0ssT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPOztZQUN4QixFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFekIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO1lBRVIsQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztLQUFBO0lBQ0QsWUFBWSxXQUFXLEVBQUUsZUFBZTtRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksbUJBQVMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFDRCxZQUFZO0lBQ1osU0FBUyxDQUFDLEtBQWE7UUFFbkIsVUFBVTtRQUNWLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN6QixJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3JCLElBQUksUUFBUSxHQUFHLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7WUFDOUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztnQkFDdkIsV0FBVyxFQUFFLEtBQUs7Z0JBQ2xCLFFBQVE7Z0JBQ1IsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsV0FBVyxFQUFFLEdBQUc7YUFDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUc7Z0JBQ2pCLElBQUksRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxHQUFHLENBQUE7Z0JBQ3JDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNoQixVQUFVO29CQUNWLE9BQU8sQ0FBUSxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO1lBQ0wsQ0FBQyxFQUFFLFVBQVUsR0FBRztnQkFDWixNQUFNO2dCQUNOLE9BQU8sRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FFSjtBQXpERCx3Q0F5REMifQ==