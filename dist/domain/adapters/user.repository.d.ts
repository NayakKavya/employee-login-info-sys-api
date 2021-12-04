import { IUserPort } from "src/domain/adapters/user.port";
import { Repository } from "typeorm";
import { UserDetail } from "../entities/userdetail.entity";
import { GetUserInfoModel } from "../models/getuserinfo.model";
import { UserDetailModel } from "../models/user.model";
import { WinstonLoggerService } from "../../infrastructure/logger/winston-logger.service";
export declare class UserRepository implements IUserPort {
    private userRepository;
    private logger;
    constructor(userRepository: Repository<UserDetail>, logger: WinstonLoggerService);
    createUserInfo(userModel: UserDetailModel): Promise<UserDetailModel>;
    getUserInfo(getUserInfoModel: GetUserInfoModel): Promise<UserDetailModel[]>;
    delUserInfo(userId: any, shopId: any): Promise<any>;
}
