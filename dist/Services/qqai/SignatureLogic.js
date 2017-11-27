"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
var urlencode = require('urlencode');
class SignatureLogic {
    static paramsToSign(obj, appKey) {
        var keys = Object.getOwnPropertyNames(obj).sort();
        var str = '';
        keys.forEach(key => str += key + '=' + encodeURIComponent(obj[key]) + '&');
        str += `app_key=${appKey}`;
        var md5 = crypto.createHash('md5');
        var sign = md5.update(str).digest('hex');
        return sign.toUpperCase();
    }
}
exports.SignatureLogic = SignatureLogic;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lnbmF0dXJlTG9naWMuanMiLCJzb3VyY2VSb290IjoiRDovd29ya3NwYWNlL2N0cmwvY3RybC1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiU2VydmljZXMvUVFBSS9TaWduYXR1cmVMb2dpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFrQztBQUNsQyxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFHckM7SUFDRSxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQVcsRUFBRSxNQUFjO1FBRzdDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsRCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDM0UsR0FBRyxJQUFJLFdBQVcsTUFBTSxFQUFFLENBQUM7UUFFM0IsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzVCLENBQUM7Q0FHRjtBQWZELHdDQWVDIn0=