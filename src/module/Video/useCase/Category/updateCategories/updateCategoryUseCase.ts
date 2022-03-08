import { inject, injectable } from "tsyringe";
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

    async execute({id, name, description}: CategoryUpdateRequest): Promise<Category | Error>{


        const category = await this.repositoryCategory.findCategoryById(id)

        if(! category){
            return new Error("Category does not Exists")
        }

        
        



        

        const result = await this.repositoryCategory.updateCategory({id, name, description})

    

       return result 

        

    }


}


export { UpdateCategoryUsecase }