import { UserRepository } from "src/domain/adapters/user.repository";
import { UserLogoutRepository } from "src/domain/adapters/userlogout.repository";
import { UserLogoutModel } from "src/domain/models/user.logout.model";
import { UserDetailModel } from "src/domain/models/user.model";
import { WinstonLoggerService } from "src/infrastructure/logger/winston-logger.service";
export declare class UserController {
    private userRepository;
    private userLogoutRepository;
    private logger;
    constructor(userRepository: UserRepository, userLogoutRepository: UserLogoutRepository, logger: WinstonLoggerService);
    createUserInfo(userModel: UserDetailModel): Promise<UserDetailModel>;
    detUserInfoModel(userId: string, shopNo: number): Promise<any>;
    GetUserInfoModel(userModel: UserDetailModel): Promise<UserDetailModel[]>;
    createUserLogoutInfo(userLogoutModel: UserLogoutModel): Promise<UserLogoutModel>;
}
