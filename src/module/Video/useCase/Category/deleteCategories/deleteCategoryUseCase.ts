import { inject, injectable } from "tsyringe"
import { IRepositoryCategory } from "../../../repositories/IRepositoryCategories"

interface IRequest{

    id: string
}



@injectable()
class DeleteCategoryUseCase {

    constructor(
        @inject("repositoryCategory")
        private repositoryCategory: IRepositoryCategory
    ){}

    async execute({ id }: IRequest){
        

        const findCategory = await this.repositoryCategory.findCategoryById(id)

        if(! findCategory){
            return new Error("Category does not existis")
        }

      return  await this.repositoryCategory.deleteCategory(id)

    }


}


export { DeleteCategoryUseCase }