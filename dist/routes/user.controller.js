"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var UserController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../domain/adapters/user.repository");
const userlogout_repository_1 = require("../domain/adapters/userlogout.repository");
const user_logout_model_1 = require("../domain/models/user.logout.model");
const user_model_1 = require("../domain/models/user.model");
const winston_logger_service_1 = require("../infrastructure/logger/winston-logger.service");
let UserController = UserController_1 = class UserController {
    constructor(userRepository, userLogoutRepository, logger) {
        this.userRepository = userRepository;
        this.userLogoutRepository = userLogoutRepository;
        this.logger = logger;
        this.logger.setContext(UserController_1.name);
        console.log('users service controller created');
    }
    createUserInfo(userModel) {
        this.logger.info(`in createUserInfo info #UserModel  ${userModel}`);
        this.logger.info('in createUserInfo controller info', { delUserInfoModel: userModel });
        const res = this.userRepository.createUserInfo(userModel);
        return res;
    }
    detUserInfoModel(userId, shopNo) {
        this.logger.info(`in deleteUserInfoModel info #UserId ${userId} #ShopNo ${shopNo}`);
        this.logger.info('in delUserInfoModel controller info', { delUserInfoModel: userId, shopNo });
        return this.userRepository.delUserInfo(userId, shopNo);
    }
    getUserInfo(userModel) {
        this.logger.info(`in getUserInfo info #UserModel ${userModel}`);
        this.logger.info('in getUserInfo controller info', { getUserInfo: userModel });
        return this.userRepository.getUserInfo(userModel);
    }
    createUserLogoutInfo(userLogoutModel) {
        this.logger.info(`in createUserLogoutInfo info #UserLogoutModel  ${userLogoutModel}`);
        this.logger.info('in createUserLogoutInfo controller info', { createUserLogoutInfo: userLogoutModel });
        const ret = this.userLogoutRepository.createUserLogoutInfo(userLogoutModel);
        return ret;
    }
};
__decorate([
    (0, common_1.Post)('/save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.UserDetailModel]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createUserInfo", null);
__decorate([
    (0, common_1.Delete)('/delUserInfo/:userId/:shopNo'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('shopNo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "detUserInfoModel", null);
__decorate([
    (0, common_1.Post)('/getUserInfo'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.UserDetailModel]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUserInfo", null);
__decorate([
    (0, common_1.Post)('/logout'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_logout_model_1.UserLogoutModel]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createUserLogoutInfo", null);
UserController = UserController_1 = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        userlogout_repository_1.UserLogoutRepository,
        winston_logger_service_1.WinstonLoggerService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map