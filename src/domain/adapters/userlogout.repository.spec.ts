import { Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserLogoutInfo } from "../entities/user.logout.entity";
import { UserLogoutRepository } from "./userlogout.repository";
import { WinstonLoggerModule } from "../../infrastructure/logger/winston.logger.module";
import { ConfigService } from "../../infrastructure/configuration/config.service";

let date = new Date();
const logoutUserService = {
    userId: "User17",
    browser: "chrome",
    machineId: "10.102.20.45",
    shopId: 123,
    loginDate: date,
    logoutDate: date,
};

describe('User Logout Repository', () => {
    let userLogoutRepository: UserLogoutRepository;
    let repo: Repository<UserLogoutInfo>;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [WinstonLoggerModule.forRoot({ level: ConfigService.create().getLogLevel() }),],
            providers: [UserLogoutRepository,
                {
                    provide: getRepositoryToken(UserLogoutInfo),
                    useValue: {
                        save: jest.fn().mockResolvedValue(logoutUserService),

                    },
                },
            ],
        }).compile();

        userLogoutRepository = module.get<UserLogoutRepository>(UserLogoutRepository);
        repo = module.get<Repository<UserLogoutInfo>>(getRepositoryToken(UserLogoutInfo));
    });

    describe('createUserLogoutInfo', () => {
        it('create user logout info ', async () => {

            jest.spyOn(repo, 'save');
            const user = await userLogoutRepository.createUserLogoutInfo(logoutUserService)
            expect(user).toEqual(logoutUserService);

        });
    });


});