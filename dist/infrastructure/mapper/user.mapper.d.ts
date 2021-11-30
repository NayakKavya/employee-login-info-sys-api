import { UserDetail } from "../../domain/entities/userdetail.entity";
import { UserDetailModel } from "../../domain/models/user.model";
import { Optional } from "typescript-optional";
export declare class UserMapper {
    static toDomain(repoEntity: UserDetail): Optional<UserDetailModel>;
    static toDomains(repoEntities: UserDetail[]): UserDetailModel[];
}
