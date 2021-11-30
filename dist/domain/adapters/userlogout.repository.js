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
var UserLogoutRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLogoutRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_logout_entity_1 = require("../entities/user.logout.entity");
const typeorm_2 = require("typeorm");
const winston_logger_service_1 = require("../../infrastructure/logger/winston-logger.service");
let UserLogoutRepository = UserLogoutRepository_1 = class UserLogoutRepository {
    constructor(userLogoutRepository, logger) {
        this.userLogoutRepository = userLogoutRepository;
        this.logger = logger;
        this.logger.setContext(UserLogoutRepository_1.name);
        console.log('UserLogoutRepository created');
    }
    async createUserLogoutInfo(userLogoutModel) {
        this.logger.info('in createUserLogoutInfo info #UserModel  ${userModel}');
        this.logger.error('in createUserLogoutInfo error', { key: 'value' });
        this.logger.debug('in createUserLogoutInfo debug', { key: 'value' });
        this.logger.warn('in createUserLogoutInfo warn');
        console.log(userLogoutModel);
        const res = await this.userLogoutRepository.save(userLogoutModel);
        console.log('RES""""', res);
        return res;
    }
    createUserInfo(userModel) {
        throw new Error("Method not implemented.");
    }
    getUserInfo(getUserInfo) {
        throw new Error("Method not implemented.");
    }
};
UserLogoutRepository = UserLogoutRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_logout_entity_1.UserLogoutInfo)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        winston_logger_service_1.WinstonLoggerService])
], UserLogoutRepository);
exports.UserLogoutRepository = UserLogoutRepository;
//# sourceMappingURL=userlogout.repository.js.map