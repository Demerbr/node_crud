import { container } from "tsyringe";
import { UserRepository } from "../../module/accounts/repositories/implementation/UsersRepository";
import { IUsersRepository } from "../../module/accounts/repositories/IUserRepository";
import { repositoryCategory } from "../../module/Video/repositories/implementaion/RepositoryCategory";
import { RepositoryVideo } from "../../module/Video/repositories/implementaion/RepositoryVideo";
import { IRepositoryCategory } from "../../module/Video/repositories/IRepositoryCategories";
import { IRepositoryVideo } from "../../module/Video/repositories/IRepositoryVideos";










container.registerSingleton<IRepositoryCategory>(
    "repositoryCategory",
    repositoryCategory,
)



container.registerSingleton<IRepositoryVideo>(
    "repositoryVideo",
    RepositoryVideo
)

container.registerSingleton<IUsersRepository>(
    "userRepository",
    UserRepository
)


