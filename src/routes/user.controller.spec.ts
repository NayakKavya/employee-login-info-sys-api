import { Test } from "@nestjs/testing";
import { ConfigService } from "../infrastructure/configuration/config.service";
import { WinstonLoggerModule } from "../infrastructure/logger/winston.logger.module";
import { UserRepository } from "../domain/adapters/user.repository";
import { UserLogoutRepository } from "../domain/adapters/userlogout.repository";
import { UserController } from "./user.controller";
jest.mock('../domain/adapters/user.repository')
jest.mock('../domain/adapters/userlogout.repository')

describe('User Controller', () => {

    let userController: UserController;
    let userRepository: UserRepository;
    let userLogoutRepo: UserLogoutRepository;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [WinstonLoggerModule.forRoot({ level: ConfigService.create().getLogLevel() }),],
            controllers: [UserController],
            providers: [UserRepository, UserLogoutRepository]
        }).compile();

        userController = module.get<UserController>(UserController);
        userRepository = module.get<UserRepository>(UserRepository);
        userLogoutRepo = module.get<UserLogoutRepository>(UserLogoutRepository);
    });

    it('UserController to be defined', () => {
        expect(userController).toBeDefined();
    })
    describe('User Controller Methods', () => {
        it('Create User info to have been called', () => {
            const loginUser = {
                userId: "User17",
                browser: "chrome",
                machineId: "10.102.20.45",
                shopId: 123,
                userLogin: "login",
                loginDate: new Date(),
            };
            userController.createUserInfo(loginUser);
            expect(userRepository.createUserInfo).toHaveBeenCalled();
        });


        it('Get User info to have been called', () => {
            const loginUser = {
                userId: "User17",
                browser: "chrome",
                machineId: "10.102.20.45",
                shopId: 123,
                userLogin: "login",
                loginDate: new Date(),
            };
            userController.getUserInfo(loginUser);
            expect(userRepository.getUserInfo).toHaveBeenCalled();
        });


        it('Del User info to have been called', () => {
            userController.detUserInfoModel("User1", 123);
            expect(userRepository.delUserInfo).toHaveBeenCalled();
        });


        it('CreateUserLogoutInfo to have been called', () => {
            const logoutUser = {
                userId: "User17",
                browser: "chrome",
                machineId: "10.102.20.45",
                shopId: 123,
                loginDate: new Date(),
                logoutDate: new Date(),
            };
            userController.createUserLogoutInfo(logoutUser);
            expect(userLogoutRepo.createUserLogoutInfo).toHaveBeenCalled();
        });
    });
});