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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLogoutRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_logout_entity_1 = require("../entities/user.logout.entity");
const userdetail_entity_1 = require("../entities/userdetail.entity");
const typeorm_2 = require("typeorm");
let UserLogoutRepository = class UserLogoutRepository {
    constructor(UserRepository, UserLogoutRepository) {
        this.UserRepository = UserRepository;
        this.UserLogoutRepository = UserLogoutRepository;
        console.log('UserLogoutRepository created');
    }
    async createUserLogoutInfo(userLogoutModel) {
        console.log(userLogoutModel);
        const res = await this.UserLogoutRepository.save(userLogoutModel);
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
UserLogoutRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(userdetail_entity_1.UserDetail)),
    __param(1, (0, typeorm_1.InjectRepository)(user_logout_entity_1.UserLogoutInfo)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserLogoutRepository);
exports.UserLogoutRepository = UserLogoutRepository;
//# sourceMappingURL=userlogout.repository.js.map