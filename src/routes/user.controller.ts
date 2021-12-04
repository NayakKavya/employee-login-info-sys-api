import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { UserRepository } from "../domain/adapters/user.repository";
import { UserLogoutRepository } from "../domain/adapters/userlogout.repository";
import { UserLogoutModel } from "../domain/models/user.logout.model";
import { UserDetailModel } from "../domain/models/user.model";
import { WinstonLoggerService } from "../infrastructure/logger/winston-logger.service";

@Controller()
export class UserController {
    constructor(
        private userRepository: UserRepository,
        private userLogoutRepository: UserLogoutRepository,
        private logger: WinstonLoggerService,) {
        this.logger.setContext(UserController.name);
        console.log('users service controller created')
    }

    @Post('/save')
    createUserInfo(@Body() userModel: UserDetailModel) {
        this.logger.info(`in createUserInfo info #UserModel  ${userModel}`);
        this.logger.info('in createUserInfo controller info', { delUserInfoModel: userModel });
        const res = this.userRepository.createUserInfo(userModel)
        return res;
    }

    @Delete('/delUserInfo/:userId/:shopNo')
    detUserInfoModel(@Param('userId') userId: string, @Param('shopNo') shopNo: number) {
        this.logger.info(`in deleteUserInfoModel info #UserId ${userId} #ShopNo ${shopNo}`);
        this.logger.info('in delUserInfoModel controller info', { delUserInfoModel: userId, shopNo });
        return this.userRepository.delUserInfo(userId, shopNo)
    }

    @Post('/getUserInfo')
    getUserInfo(@Body() userModel: UserDetailModel) {
        this.logger.info(`in getUserInfo info #UserModel ${userModel}`);
        this.logger.info('in getUserInfo controller info', { getUserInfo: userModel });
        return this.userRepository.getUserInfo(userModel)
    }

    @Post('/logout')
    createUserLogoutInfo(@Body() userLogoutModel: UserLogoutModel) {
        this.logger.info(`in createUserLogoutInfo info #UserLogoutModel  ${userLogoutModel}`);
        this.logger.info('in createUserLogoutInfo controller info', { createUserLogoutInfo: userLogoutModel });
        const ret = this.userLogoutRepository.createUserLogoutInfo(userLogoutModel)
        return ret;
    }


}