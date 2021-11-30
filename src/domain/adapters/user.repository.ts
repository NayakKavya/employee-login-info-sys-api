import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IUserPort } from "src/domain/adapters/user.port";
import { Repository } from "typeorm";
import { UserDetail } from "../entities/userdetail.entity";
import { UserLogoutInfo } from "../entities/user.logout.entity";
import { GetUserInfoModel } from "../models/getuserinfo.model";
import { LoginStatus, UserDetailModel } from "../models/user.model";
import { UserMapper } from "../../infrastructure/mapper/user.mapper";
import { WinstonLoggerService } from "../../infrastructure/logger/winston-logger.service";

/* UserRepository class implements interface IUserPost and this repository interacts with the database */
@Injectable()
export class UserRepository implements IUserPort {
    constructor(@InjectRepository(UserDetail) private userRepository: Repository<UserDetail>,
    private logger: WinstonLoggerService,
    // @InjectRepository(UserLogoutInfo) private UserLogoutRepository: Repository<UserLogoutInfo>,
) {
    this.logger.setContext(UserRepository.name);
        console.log('UserRepository created')
    }

     /** This method receives userModel from UserController and save the userModel in database 
     * An object of UserDetailModel is created and returned as response
     */
    async createUserInfo(userModel: UserDetailModel): Promise<UserDetailModel> {
        this.logger.info('in createUserInfo info #UserModel  ${userModel}');
        this.logger.error('in createUserInfo error', { key: 'value' });
        this.logger.debug('in createUserInfo debug', { key: 'value' });
        this.logger.warn('in createUserInfo warn');
        const users = await this.userRepository.save(userModel);
        console.log("user inserted",users)
            const um = new UserDetailModel(users.userId, users.browser, users.machineId, users.shopId, users.userLogin, users.loginDate)
           return um;
         
    }

    /** This method in repository receives userID and shopId through getUserInfoModel and checks for user 
     * if user is found returns userModel as response
     */
    async getUserInfo(getUserInfoModel: UserDetailModel):  Promise<UserDetailModel[]>  {
        this.logger.info('in getUserByUserId info #UserId #ShopId ${getUserModel}');
        this.logger.error('in getUserByUserId error', { key: 'value' });
        this.logger.debug('in getUserByUserId debug', { key: 'value' });
        this.logger.warn('in getUserByUserId warn');
        const users = await this.userRepository.find({
            where: { userId: getUserInfoModel.userId, shopId: getUserInfoModel.shopId }
        })
        return UserMapper.toDomains(users);
    }


    /** This method in repository receives userId and shopId from UserController
     * and deletes user with same userId and shopId fron user_details table in database
     */
    async delUserInfo(userId,shopId):  Promise<any>  {
        this.logger.info('in deleteUserInfoModel info #UserId #ShopNo ${getUserModel}');
        this.logger.error('in deleteUserInfoModel error', { key: 'value' });
        this.logger.debug('in deleteUserInfoModel debug', { key: 'value' });
        this.logger.warn('in deleteUserInfoModel warn');
         console.log("userId", userId,"shopid",shopId,)
        const users = this.userRepository.delete({userId: userId, shopId: shopId})
        users.then(value => {console.log(value)})
        return users;
    }

}