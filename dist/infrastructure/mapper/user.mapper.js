"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const userdetail_entity_1 = require("../../domain/entities/userdetail.entity");
const user_model_1 = require("../../domain/models/user.model");
const typescript_optional_1 = require("typescript-optional");
class UserMapper {
    static toDomain(repoEntity) {
        if (!repoEntity) {
            return typescript_optional_1.Optional.empty();
        }
        console.log("shopid", repoEntity);
        const userModel = new user_model_1.UserDetailModel(repoEntity.userId, repoEntity.browser, repoEntity.machineId, repoEntity.shopId, repoEntity.userLogin, repoEntity.loginDate);
        console.log("shopid", userModel);
        return typescript_optional_1.Optional.of(userModel);
    }
    static toDomains(repoEntities) {
        const userModels = new Array();
        repoEntities.forEach(re => {
            const userModel = this.toDomain(re);
            userModels.push(userModel.get());
        });
        return userModels;
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=user.mapper.js.map