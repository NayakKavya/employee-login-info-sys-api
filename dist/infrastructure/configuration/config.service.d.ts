import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare class ConfigService {
    private env;
    private static svc;
    static create(): ConfigService;
    private constructor();
    private getValue;
    getTypeOrmConfig(): TypeOrmModuleOptions;
    getPort(): string;
    isProduction(): boolean;
    ensureValues(keys: string[]): this;
    getBaseURl(key: string): string;
    getLogLevel(): string;
}
