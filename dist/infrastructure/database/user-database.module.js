"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_service_1 = require("../../infrastructure/configuration/config.service");
const user_setting_1 = require("../../infrastructure/constants/user-setting");
let UserDatabaseModule = class UserDatabaseModule {
};
UserDatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(config_service_1.ConfigService
                .create()
                .ensureValues([
                user_setting_1.UserSettingConstants.EMPLOYEE_INFO_POSTGRES_HOST,
                user_setting_1.UserSettingConstants.EMPLOYEE_INFO_POSTGRES_PORT,
                user_setting_1.UserSettingConstants.EMPLOYEE_INFO_POSTGRES_USERNAME,
                user_setting_1.UserSettingConstants.EMPLOYEE_INFO_POSTGRES_PASSWORD,
                user_setting_1.UserSettingConstants.EMPLOYEE_INFO_POSTGRES_DATABASE,
                user_setting_1.UserSettingConstants.EMPLOYEE_INFO_ENTITIES_PATH,
                user_setting_1.UserSettingConstants.EMPLOYEE_INFO_MIGRATION_TABLE_NAME,
                user_setting_1.UserSettingConstants.EMPLOYEE_INFO_MIGRATIONS_FILE_PATH,
                user_setting_1.UserSettingConstants.EMPLOYEE_INFO_MIGRATIONS_DIRECTORY
            ])
                .getTypeOrmConfig())
        ]
    })
], UserDatabaseModule);
exports.UserDatabaseModule = UserDatabaseModule;
;
//# sourceMappingURL=user-database.module.js.map