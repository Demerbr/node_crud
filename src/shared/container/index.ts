import { container } from "tsyringe";
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


