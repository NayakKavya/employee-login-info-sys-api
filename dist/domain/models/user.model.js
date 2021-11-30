"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginStatus = exports.UserDetailModel = void 0;
class UserDetailModel {
    constructor(userId, browser, machineId, shopId, userLogin, loginDate) {
        this.userId = userId;
        this.browser = browser;
        this.machineId = machineId;
        this.shopId = shopId;
        this.userLogin = userLogin;
        this.loginDate = loginDate;
        console.log('user Detailmodel created');
    }
}
exports.UserDetailModel = UserDetailModel;
class LoginStatus {
    constructor(status, response) {
        this.status = status;
        this.response = response;
    }
}
exports.LoginStatus = LoginStatus;
//# sourceMappingURL=user.model.js.map