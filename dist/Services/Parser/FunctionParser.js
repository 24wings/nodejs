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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb25QYXJzZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9vbi93b3Jrc3BhY2Uvbm9kZWpzLW1hc3Rlci9zcmMvIiwic291cmNlcyI6WyJTZXJ2aWNlcy9QYXJzZXIvRnVuY3Rpb25QYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUNJLGlCQUFpQixDQUFDLElBQWM7UUFDNUIsdUJBQXVCO1FBQ3ZCLDhCQUE4QjtRQUM5QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELDhCQUE4QjtRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHO1lBQ3BDLDRCQUE0QjtZQUM1QixNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRztZQUNuQixrQkFBa0I7WUFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUdKO0FBaEJELHdDQWdCQyJ9