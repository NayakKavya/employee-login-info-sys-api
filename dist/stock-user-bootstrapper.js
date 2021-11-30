"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_service_1 = require("./infrastructure/configuration/config.service");
const user_module_1 = require("./routes/user.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(user_module_1.UserModule);
    console.log("port :", config_service_1.ConfigService.create().getPort());
    await app.listen(config_service_1.ConfigService.create().getPort());
}
bootstrap();
//# sourceMappingURL=stock-user-bootstrapper.js.map