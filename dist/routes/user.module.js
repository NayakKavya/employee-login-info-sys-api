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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const userdetail_entity_1 = require("../domain/entities/userdetail.entity");
const user_repository_1 = require("../domain/adapters/user.repository");
const user_database_module_1 = require("../infrastructure/database/user-database.module");
const user_controller_1 = require("./user.controller");
const config_service_1 = require("../infrastructure/configuration/config.service");
const winston_logger_module_1 = require("../infrastructure/logger/winston.logger.module");
const user_logout_entity_1 = require("../domain/entities/user.logout.entity");
const userlogout_repository_1 = require("../domain/adapters/userlogout.repository");
let UserModule = class UserModule {
    constructor() {
        console.log('UserModule created');
    }
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_database_module_1.UserDatabaseModule,
            winston_logger_module_1.WinstonLoggerModule.forRoot({ level: config_service_1.ConfigService.create().getLogLevel() }),
            typeorm_1.TypeOrmModule.forFeature([userdetail_entity_1.UserDetail, user_logout_entity_1.UserLogoutInfo])
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_repository_1.UserRepository, userlogout_repository_1.UserLogoutRepository],
    }),
    __metadata("design:paramtypes", [])
], UserModule);
exports.UserModule = UserModule;
;
//# sourceMappingURL=user.module.js.map