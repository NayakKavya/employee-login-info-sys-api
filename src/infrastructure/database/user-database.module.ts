import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '../../infrastructure/configuration/config.service';
import { UserSettingConstants } from '../../infrastructure/constants/user-setting';

@Module({
    imports: [
        TypeOrmModule.forRoot(
            ConfigService
                .create()
                .ensureValues(
                    [
                        UserSettingConstants.EMPLOYEE_INFO_POSTGRES_HOST,
                        UserSettingConstants.EMPLOYEE_INFO_POSTGRES_PORT,
                        UserSettingConstants.EMPLOYEE_INFO_POSTGRES_USERNAME,
                        UserSettingConstants.EMPLOYEE_INFO_POSTGRES_PASSWORD,
                        UserSettingConstants.EMPLOYEE_INFO_POSTGRES_DATABASE,
                        UserSettingConstants.EMPLOYEE_INFO_ENTITIES_PATH,
                        UserSettingConstants.EMPLOYEE_INFO_MIGRATION_TABLE_NAME,
                        UserSettingConstants.EMPLOYEE_INFO_MIGRATIONS_FILE_PATH,
                        UserSettingConstants.EMPLOYEE_INFO_MIGRATIONS_DIRECTORY
                    ]
                )
                .getTypeOrmConfig(),

        )]
})
export class UserDatabaseModule { };