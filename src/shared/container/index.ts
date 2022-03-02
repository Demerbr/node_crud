import { container } from "tsyringe";
import { repositoryCategory } from "../../module/Video/repositories/implementaion/RepositoryCategory";
import { IRepositoryCategory } from "../../module/Video/repositories/IRepositoryCategories";










container.registerSingleton<IRepositoryCategory>(
    "repositoryCategory",
    repositoryCategory,
)