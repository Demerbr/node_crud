import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/AppError";
import { IRepositoryCategory } from "../../../repositories/IRepositoryCategories";

interface IRequest{
    name: string;
    description: string;
}




@injectable()
class CreateCategoryUseCase {

    constructor(
        @inject("repositoryCategory")
        private repositoryCategory: IRepositoryCategory
    ){}

    async execute({name, description}: IRequest): Promise<void | Error | AppError> {

        const findCategory = await this.repositoryCategory.findCategoryByName(name);

        if( findCategory){
            
           throw new AppError("Category Already Exist");
            
        }


       this.repositoryCategory.create({name, description})


    }





}


export { CreateCategoryUseCase }