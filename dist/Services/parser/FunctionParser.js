"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FunctionParser {
    getFunctionParams(func) {
        // 先用正则匹配,取得符合参数模式的字符串.
        // 第一个分组是这个: ([^)]*) 非右括号的任意字符
        var args = func.toString().match(/\(([^)]*)\)/)[1];
        // 用逗号来分隔参数(arguments string).
        return args.split(",").map(function (arg) {
            // 去除注释(inline comments)以及空格
            return arg.replace(/\/\*.*\*\//, "").trim();
        }).filter(function (arg) {
            // 确保没有 undefined.
            return arg;
        });
    }
}
exports.FunctionParser = FunctionParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb25QYXJzZXIuanMiLCJzb3VyY2VSb290IjoiRDovd29ya3NwYWNlL2N0cmwvY3RybC1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiU2VydmljZXMvUGFyc2VyL0Z1bmN0aW9uUGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFDSSxpQkFBaUIsQ0FBQyxJQUFjO1FBQzVCLHVCQUF1QjtRQUN2Qiw4QkFBOEI7UUFDOUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCw4QkFBOEI7UUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRztZQUNwQyw0QkFBNEI7WUFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUc7WUFDbkIsa0JBQWtCO1lBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FHSjtBQWhCRCx3Q0FnQkMifQ==