import { UserLogoutInfo } from "../entities/user.logout.entity";
import { UserDetail } from "../entities/userdetail.entity";
import { GetUserInfoModel } from "../models/getuserinfo.model";
import { UserLogoutModel } from "../models/user.logout.model";
import { UserDetailModel } from "../models/user.model";
import { Repository } from "typeorm";
export declare class UserLogoutRepository {
    private UserRepository;
    private UserLogoutRepository;
    constructor(UserRepository: Repository<UserDetail>, UserLogoutRepository: Repository<UserLogoutInfo>);
    createUserLogoutInfo(userLogoutModel: UserLogoutModel): Promise<UserLogoutModel>;
    createUserInfo(userModel: UserDetailModel): Promise<UserDetailModel>;
    getUserInfo(getUserInfo: GetUserInfoModel): Promise<UserDetailModel[]>;
}
