"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLogoutInfo = void 0;
const typeorm_1 = require("typeorm");
let UserLogoutInfo = class UserLogoutInfo {
    constructor() {
        console.log('User Logout entity created');
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserLogoutInfo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_id',
        type: 'character varying',
    }),
    __metadata("design:type", String)
], UserLogoutInfo.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'browser',
        type: 'character varying',
    }),
    __metadata("design:type", String)
], UserLogoutInfo.prototype, "browser", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'machine_id',
        type: 'character varying',
    }),
    __metadata("design:type", String)
], UserLogoutInfo.prototype, "machineId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'shop_id',
        type: 'numeric',
    }),
    __metadata("design:type", Number)
], UserLogoutInfo.prototype, "shopId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'login_date',
        type: 'timestamp without time zone',
    }),
    __metadata("design:type", Date)
], UserLogoutInfo.prototype, "loginDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'logout_date',
        type: 'timestamp without time zone',
    }),
    __metadata("design:type", Date)
], UserLogoutInfo.prototype, "logoutDate", void 0);
UserLogoutInfo = __decorate([
    (0, typeorm_1.Entity)({
        name: 'user_track'
    }),
    __metadata("design:paramtypes", [])
], UserLogoutInfo);
exports.UserLogoutInfo = UserLogoutInfo;
//# sourceMappingURL=user.logout.entity.js.map