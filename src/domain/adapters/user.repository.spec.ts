import { Repository } from 'typeorm';
import { UserRepository } from '../adapters/user.repository'
import { UserDetail } from '../entities/userdetail.entity';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserDetailModel } from '../models/user.model'
import { WinstonLoggerModule } from '../../infrastructure/logger/winston.logger.module';
import { ConfigService } from '../../infrastructure/configuration/config.service';

const userArray = [
    new UserDetailModel('User17', 'chrome', '10.102.20.45', 123, 'login', new Date()),
    new UserDetailModel('User18', 'edge', '10.102.20.33', 122, 'login', new Date())
]

const loginUserService = {
    userId: "User17",
    browser: "chrome",
    machineId: "10.102.20.45",
    shopId: 123,
    userLogin: "login",
    loginDate: new Date(),
};
const getUser = {
    userId: "User17",
    shopId: 123,
}

describe('User Repository', () => {
    let repository: UserRepository;
    let repo: Repository<UserDetail>;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [WinstonLoggerModule.forRoot({ level: ConfigService.create().getLogLevel() }),],
            providers: [UserRepository,
                {
                    provide: getRepositoryToken(UserDetail),
                    useValue: {
                        save: jest.fn().mockResolvedValue(loginUserService),
                        find: jest.fn().mockResolvedValue(userArray),
                        delete: jest.fn().mockResolvedValue(loginUserService)
                    },
                },
            ],
        }).compile();

        repository = module.get<UserRepository>(UserRepository);
        repo = module.get<Repository<UserDetail>>(getRepositoryToken(UserDetail));
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });
    describe('createUserInfo', () => {
        it('create user info ', async () => {

            jest.spyOn(repo, 'save');
            const user = await repository.createUserInfo(loginUserService)
            expect(user).toEqual(loginUserService);

        });
    });

    describe('getUserInfo', () => {
        it('get user info ', async () => {

            jest.spyOn(repo, 'find');
            const user = await repository.getUserInfo(getUser)
            expect(user).toEqual(userArray);

        });
    });

    describe('delUserInfo', () => {
        it('del user info ', async () => {

            jest.spyOn(repo, 'delete');
            const user = await repository.delUserInfo("User17", 123)
            expect(user).toEqual(loginUserService);

        });
    });
});

