"use strict";
const MachineView_1 = require("./MachineView");
module.exports = class {
    constructor(appId, appKey) {
        this.appId = appId;
        this.appKey = appKey;
        this.machineView = new MachineView_1.MachineView(this.appId, this.appKey);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRDovd29ya3NwYWNlL2N0cmwvY3RybC1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiU2VydmljZXMvUVFBSS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0NBQTRDO0FBQzVDLGlCQUFTO0lBS0wsWUFBbUIsS0FBYSxFQUFTLE1BQWM7UUFBcEMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKdkQsZ0JBQVcsR0FBRyxJQUFJLHlCQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFJSSxDQUFDO0NBQy9ELENBQUEifQ==