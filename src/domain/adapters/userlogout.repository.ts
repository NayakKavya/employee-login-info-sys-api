import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserLogoutInfo } from "../entities/user.logout.entity";
import { GetUserInfoModel } from "../models/getuserinfo.model";
import { UserLogoutModel } from "../models/user.logout.model";
import { UserDetailModel } from "../models/user.model";
import { Repository } from "typeorm";
import { WinstonLoggerService } from "../../infrastructure/logger/winston-logger.service";

/* UserRepository implements interface IUserPost and this repository interacts with the database */
@Injectable()
export class UserLogoutRepository {

    constructor(
        @InjectRepository(UserLogoutInfo) private userLogoutRepository: Repository<UserLogoutInfo>,
        private logger: WinstonLoggerService,) {
        this.logger.setContext(UserLogoutRepository.name);
        console.log('UserLogoutRepository created')
    }

    /** This method receives userLogoutModel from UserController and 
    * saves the user details in user_track table in database
    */
    async createUserLogoutInfo(userLogoutModel: UserLogoutModel): Promise<UserLogoutModel> {
        this.logger.info(`in createUserLogoutInfo info #UserModel  ${userLogoutModel}`);
        this.logger.info('in delUserInfo logout repository info', { createUserLogoutInfo: userLogoutModel });
        console.log(userLogoutModel)
        const res = await this.userLogoutRepository.save(userLogoutModel)
        this.logger.info('in delUserInfo repository res info', { delUserInfo: res });
        return res;
    }

    /** This method is not implemented */
    createUserInfo(userModel: UserDetailModel): Promise<UserDetailModel> {
        throw new Error("Method not implemented.");
    }

    /** This method is not implemented */
    getUserInfo(getUserInfo: GetUserInfoModel): Promise<UserDetailModel[]> {
        throw new Error("Method not implemented.");
    }

}