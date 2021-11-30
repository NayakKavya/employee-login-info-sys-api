import { IUserPort } from "src/domain/adapters/user.port";
import { Repository } from "typeorm";
import { UserDetail } from "../entities/userdetail.entity";
import { UserDetailModel } from "../models/user.model";
export declare class UserRepository implements IUserPort {
    private UserRepository;
    constructor(UserRepository: Repository<UserDetail>);
    createUserInfo(userModel: UserDetailModel): Promise<UserDetailModel>;
    getUserInfo(getUserInfoModel: UserDetailModel): Promise<UserDetailModel[]>;
    delUserInfo(userId: any, shopId: any): Promise<any>;
}
