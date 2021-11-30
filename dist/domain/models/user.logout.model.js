"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLogoutModel = void 0;
class UserLogoutModel {
    constructor(userId, browser, machineId, shopId, loginDate, logoutDate) {
        this.userId = userId;
        this.browser = browser;
        this.machineId = machineId;
        this.shopId = shopId;
        this.loginDate = loginDate;
        this.logoutDate = logoutDate;
        console.log('user logout model created');
    }
}
exports.UserLogoutModel = UserLogoutModel;
//# sourceMappingURL=user.logout.model.js.map