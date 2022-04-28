import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/AppError";
import { Category } from "../../../entities/Categories";
import { IRepositoryCategory } from "../../../repositories/IRepositoryCategories";

interface CategoryUpdateRequest {
    id: string;
    name: string;
    description: string;
}



@injectable()
class UpdateCategoryUsecase {

    constructor(
        @inject("repositoryCategory")
        private repositoryCategory: IRepositoryCategory
    ){}

    async execute({id, name, description}: CategoryUpdateRequest): Promise<Category | AppError | Error >{


        const category = await this.repositoryCategory.findCategoryById(id)

        if(! category){
            throw new AppError("Category does not Exists")
        }

        const result = await this.repositoryCategory.updateCategory({id, name, description})

        return result 

        

    }


}


export { UpdateCategoryUsecase }