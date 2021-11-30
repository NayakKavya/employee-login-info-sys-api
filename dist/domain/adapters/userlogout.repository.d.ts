import { UserLogoutInfo } from "../entities/user.logout.entity";
import { GetUserInfoModel } from "../models/getuserinfo.model";
import { UserLogoutModel } from "../models/user.logout.model";
import { UserDetailModel } from "../models/user.model";
import { Repository } from "typeorm";
import { WinstonLoggerService } from "src/infrastructure/logger/winston-logger.service";
export declare class UserLogoutRepository {
    private userLogoutRepository;
    private logger;
    constructor(userLogoutRepository: Repository<UserLogoutInfo>, logger: WinstonLoggerService);
    createUserLogoutInfo(userLogoutModel: UserLogoutModel): Promise<UserLogoutModel>;
    createUserInfo(userModel: UserDetailModel): Promise<UserDetailModel>;
    getUserInfo(getUserInfo: GetUserInfoModel): Promise<UserDetailModel[]>;
}
