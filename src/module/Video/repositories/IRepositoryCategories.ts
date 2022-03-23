import { DeleteResult } from "typeorm";
import { Category } from "../entities/Categories";


interface ICategoryCreateDTO{

    name: string;
    description: string;
}


interface ICategoryUpdatedDTO{
    id: string
    name: string;
    description: string;
}




interface IRepositoryCategory {


    create({name, description }: ICategoryCreateDTO): Promise<void>;

    list(): Promise<Category[]>

    findCategoryByName(name: string): Promise<Category>
    findCategoryById(id: string): Promise<Category>

    deleteCategory(id: string): Promise<DeleteResult>

    updateCategory({id, name, description}: ICategoryUpdatedDTO): Promise<Category | Error>




}

export {IRepositoryCategory, ICategoryCreateDTO, ICategoryUpdatedDTO}