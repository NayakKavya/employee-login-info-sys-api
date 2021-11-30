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
exports.UserDetail = void 0;
const typeorm_1 = require("typeorm");
let UserDetail = class UserDetail {
    constructor() {
        console.log('User Login entity created');
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserDetail.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_id',
        type: 'character varying',
    }),
    __metadata("design:type", String)
], UserDetail.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'browser',
        type: 'character varying',
    }),
    __metadata("design:type", String)
], UserDetail.prototype, "browser", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'machine_id',
        type: 'character varying',
    }),
    __metadata("design:type", String)
], UserDetail.prototype, "machineId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'shop_id',
        type: 'integer',
    }),
    __metadata("design:type", Number)
], UserDetail.prototype, "shopId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_login',
        type: 'character varying',
    }),
    __metadata("design:type", String)
], UserDetail.prototype, "userLogin", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'login_date',
        type: 'timestamp without time zone',
    }),
    __metadata("design:type", Date)
], UserDetail.prototype, "loginDate", void 0);
UserDetail = __decorate([
    (0, typeorm_1.Entity)({
        name: 'user_details'
    }),
    __metadata("design:paramtypes", [])
], UserDetail);
exports.UserDetail = UserDetail;
//# sourceMappingURL=userdetail.entity.js.map