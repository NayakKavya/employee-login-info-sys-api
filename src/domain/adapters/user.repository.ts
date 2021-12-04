import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IUserPort } from "src/domain/adapters/user.port";
import { Repository } from "typeorm";
import { UserDetail } from "../entities/userdetail.entity";
import { GetUserInfoModel } from "../models/getuserinfo.model";
import { UserDetailModel } from "../models/user.model";
import { UserMapper } from "../../infrastructure/mapper/user.mapper";
import { WinstonLoggerService } from "../../infrastructure/logger/winston-logger.service";

/* UserRepository class implements interface IUserPost and this repository interacts with the database */
@Injectable()
export class UserRepository implements IUserPort {
    constructor(@InjectRepository(UserDetail) private userRepository: Repository<UserDetail>,
        private logger: WinstonLoggerService,
    ) {
        this.logger.setContext(UserRepository.name);
        console.log('UserRepository created')
    }

    /** This method receives userModel from UserController and save the userModel in database 
    * An object of UserDetailModel is created and returned as response
    */
    async createUserInfo(userModel: UserDetailModel): Promise<UserDetailModel> {
        this.logger.info(`in createUserInfo info #UserModel  ${userModel}`);
        this.logger.info('in createUserInfo repository info', { createUserInfo: userModel });
        const users = await this.userRepository.save(userModel);
        this.logger.info('in createUserInfo repository users info', { createUserInfo: users });
        const um = new UserDetailModel(users.userId, users.browser, users.machineId, users.shopId, users.userLogin, users.loginDate)
        return um;
    }

    /** This method in repository receives userID and shopId through getUserInfoModel and checks for user 
     * if user is found returns userModel as response
     */
    async getUserInfo(getUserInfoModel: GetUserInfoModel): Promise<UserDetailModel[]> {
        this.logger.info(`in getUserInfo info #UserId #ShopId ${getUserInfoModel}`);
        this.logger.info('in getUserInfo repository info', { getUserInfo: getUserInfoModel });
        const users = await this.userRepository.find({
            where: { userId: getUserInfoModel.userId, shopId: getUserInfoModel.shopId }
        })
        return UserMapper.toDomains(users);
    }


    /** This method in repository receives userId and shopId from UserController
     * and deletes user with same userId and shopId fron user_details table in database
     */
    async delUserInfo(userId, shopId): Promise<any> {
        this.logger.info(`in deleteUserInfoModel info #UserId ${userId} #ShopNo ${shopId}`);
        this.logger.info('in delUserInfo repository info', { delUserInfo: userId, shopId });
        const users = this.userRepository.delete({ userId: userId, shopId: shopId })
        users.then(value => { this.logger.info('in deleteUserInfo repository info deleteValue', { delUserInfo: value }) })
        return users;
    }

}