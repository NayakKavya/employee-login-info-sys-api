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
var UserRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_port_1 = require("./user.port");
const typeorm_2 = require("typeorm");
const userdetail_entity_1 = require("../entities/userdetail.entity");
const user_model_1 = require("../models/user.model");
const user_mapper_1 = require("../../infrastructure/mapper/user.mapper");
const winston_logger_service_1 = require("../../infrastructure/logger/winston-logger.service");
let UserRepository = UserRepository_1 = class UserRepository {
    constructor(userRepository, logger) {
        this.userRepository = userRepository;
        this.logger = logger;
        this.logger.setContext(UserRepository_1.name);
        console.log('UserRepository created');
    }
    async createUserInfo(userModel) {
        this.logger.info('in createUserInfo info #UserModel  ${userModel}');
        this.logger.error('in createUserInfo error', { key: 'value' });
        this.logger.debug('in createUserInfo debug', { key: 'value' });
        this.logger.warn('in createUserInfo warn');
        const users = await this.userRepository.save(userModel);
        console.log("user inserted", users);
        const um = new user_model_1.UserDetailModel(users.userId, users.browser, users.machineId, users.shopId, users.userLogin, users.loginDate);
        return um;
    }
    async getUserInfo(getUserInfoModel) {
        this.logger.info('in getUserByUserId info #UserId #ShopId ${getUserModel}');
        this.logger.error('in getUserByUserId error', { key: 'value' });
        this.logger.debug('in getUserByUserId debug', { key: 'value' });
        this.logger.warn('in getUserByUserId warn');
        const users = await this.userRepository.find({
            where: { userId: getUserInfoModel.userId, shopId: getUserInfoModel.shopId }
        });
        return user_mapper_1.UserMapper.toDomains(users);
    }
    async delUserInfo(userId, shopId) {
        this.logger.info('in deleteUserInfoModel info #UserId #ShopNo ${getUserModel}');
        this.logger.error('in deleteUserInfoModel error', { key: 'value' });
        this.logger.debug('in deleteUserInfoModel debug', { key: 'value' });
        this.logger.warn('in deleteUserInfoModel warn');
        console.log("userId", userId, "shopid", shopId);
        const users = this.userRepository.delete({ userId: userId, shopId: shopId });
        users.then(value => { console.log(value); });
        return users;
    }
};
UserRepository = UserRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(userdetail_entity_1.UserDetail)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        winston_logger_service_1.WinstonLoggerService])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map