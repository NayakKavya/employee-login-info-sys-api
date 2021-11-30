import { UserDetailModel } from "src/domain/models/user.model";
import { GetUserInfoModel } from "../models/getuserinfo.model";
export interface IUserPort {
    createUserInfo(userModel: UserDetailModel): Promise<UserDetailModel>;
    getUserInfo(getUserInfo: GetUserInfoModel): Promise<UserDetailModel[]>;
    delUserInfo(userId: any, shopId: any): Promise<UserDetailModel>;
}
