import { UserRepository } from "../domain/adapters/user.repository";
import { UserLogoutRepository } from "../domain/adapters/userlogout.repository";
import { UserLogoutModel } from "../domain/models/user.logout.model";
import { UserDetailModel } from "../domain/models/user.model";
import { WinstonLoggerService } from "../infrastructure/logger/winston-logger.service";
export declare class UserController {
    private userRepository;
    private userLogoutRepository;
    private logger;
    constructor(userRepository: UserRepository, userLogoutRepository: UserLogoutRepository, logger: WinstonLoggerService);
    createUserInfo(userModel: UserDetailModel): Promise<UserDetailModel>;
    detUserInfoModel(userId: string, shopNo: number): Promise<any>;
    getUserInfo(userModel: UserDetailModel): Promise<UserDetailModel[]>;
    createUserLogoutInfo(userLogoutModel: UserLogoutModel): Promise<UserLogoutModel>;
}
