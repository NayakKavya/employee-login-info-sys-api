export class UserDetailModel {
    constructor(public userId: string, public browser: string, public machineId: string, public shopId: number,
        public userLogin: string, public loginDate: Date) {
        console.log('user Detailmodel created')
    }
}

export class LoginStatus {
    constructor(public status: string, public response: UserDetailModel) { }
}

