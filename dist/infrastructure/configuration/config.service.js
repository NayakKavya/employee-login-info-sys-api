"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const dotenv = require("dotenv");
const user_setting_1 = require("../constants/user-setting");
dotenv.config();
class ConfigService {
    constructor(env) {
        this.env = env;
        console.log('svc created');
    }
    static create() {
        if (!this.svc) {
            this.svc = new ConfigService(process.env);
        }
        return this.svc;
    }
    getValue(key, throwOnMissing = true) {
        const value = process.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }
        return value;
    }
    getTypeOrmConfig() {
        const dbType = this.getValue(user_setting_1.UserSettingConstants.PRODUCTS_DATABASE_TYPE);
        let type1 = 'sqlite';
        switch (dbType) {
            case 'postgres':
                type1 = 'postgres';
                break;
            case 'mysql':
                type1 = 'mysql';
                break;
            default:
                break;
        }
        const options = {
            type: type1,
            host: this.getValue(user_setting_1.UserSettingConstants.PRODUCTS_POSTGRES_HOST),
            port: parseInt(this.getValue(user_setting_1.UserSettingConstants.PRODUCTS_POSTGRES_PORT)),
            username: this.getValue(user_setting_1.UserSettingConstants.PRODUCTS_POSTGRES_USERNAME),
            password: this.getValue(user_setting_1.UserSettingConstants.PRODUCTS_POSTGRES_PASSWORD),
            database: this.getValue(user_setting_1.UserSettingConstants.PRODUCTS_POSTGRES_DATABASE),
            entities: [this.getValue(user_setting_1.UserSettingConstants.PRODUCTS_ENTITIES_PATH)],
            migrationsTableName: this.getValue(user_setting_1.UserSettingConstants.PRODUCTS_MIGRATION_TABLE_NAME),
            migrations: [this.getValue(user_setting_1.UserSettingConstants.PRODUCTS_MIGRATIONS_FILE_PATH)],
            schema: "user",
            cli: {
                migrationsDir: this.getValue(user_setting_1.UserSettingConstants.PRODUCTS_MIGRATIONS_DIRECTORY)
            }
        };
        console.log(options);
        return options;
    }
    getPort() {
        return this.getValue('API_GATEWAY_PORT', true);
    }
    isProduction() {
        const mode = this.getValue('MODE', false);
        return mode != 'DEV';
    }
    ensureValues(keys) {
        keys.forEach(k => this.getValue(k, true));
        return this;
    }
    getBaseURl(key) {
        return this.getValue(key, true);
    }
    getLogLevel() {
        const level = this.getValue('PRODUCT_LOG_LEVEL', false);
        return level;
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map