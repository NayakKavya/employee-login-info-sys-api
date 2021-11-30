export declare class UserDetailModel {
    userId: string;
    browser: string;
    machineId: string;
    shopId: number;
    userLogin: string;
    loginDate: Date;
    constructor(userId: string, browser: string, machineId: string, shopId: number, userLogin: string, loginDate: Date);
}
export declare class LoginStatus {
    status: string;
    response: UserDetailModel;
    constructor(status: string, response: UserDetailModel);
}
