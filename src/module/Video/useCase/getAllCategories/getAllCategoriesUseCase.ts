import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/Categories";
import { IRepositoryCategory } from "../../repositories/IRepositoryCategories";





@injectable()
class GetAllCategoryUseCase{
    constructor(
    @inject("repositoryCategory")
    private repositoryCategory: IRepositoryCategory
    ){}

    async execute(): Promise<Category[]> {

      const listCategory = this.repositoryCategory.list() 

      return listCategory
    }

}


export { GetAllCategoryUseCase }