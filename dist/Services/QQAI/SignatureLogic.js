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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lnbmF0dXJlTG9naWMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9vbi93b3Jrc3BhY2Uvbm9kZWpzLW1hc3Rlci9zcmMvIiwic291cmNlcyI6WyJTZXJ2aWNlcy9RUUFJL1NpZ25hdHVyZUxvZ2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQWtDO0FBQ2xDLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUdyQztJQUNFLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBVyxFQUFFLE1BQWM7UUFHN0MsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUMzRSxHQUFHLElBQUksV0FBVyxNQUFNLEVBQUUsQ0FBQztRQUUzQixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUIsQ0FBQztDQUdGO0FBZkQsd0NBZUMifQ==