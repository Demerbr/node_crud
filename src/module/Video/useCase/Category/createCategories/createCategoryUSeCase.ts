import { inject, injectable } from "tsyringe";
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

    async execute({name, description}: IRequest): Promise<void | Error> {

        const findCategory = await this.repositoryCategory.findCategoryByName(name);

        if( findCategory){
            
           return new Error("Category Already Exist");
            
        }


       this.repositoryCategory.create({name, description})


    }





}


export { CreateCategoryUseCase }