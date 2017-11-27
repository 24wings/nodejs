"use strict";
const MachineView_1 = require("./MachineView");
module.exports = class {
    constructor(appId, appKey) {
        this.appId = appId;
        this.appKey = appKey;
        this.machineView = new MachineView_1.MachineView(this.appId, this.appKey);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9vbi93b3Jrc3BhY2Uvbm9kZWpzLW1hc3Rlci9zcmMvIiwic291cmNlcyI6WyJTZXJ2aWNlcy9RUUFJL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrQ0FBNEM7QUFDNUMsaUJBQVM7SUFLTCxZQUFtQixLQUFhLEVBQVMsTUFBYztRQUFwQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUp2RCxnQkFBVyxHQUFHLElBQUkseUJBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUlJLENBQUM7Q0FDL0QsQ0FBQSJ9