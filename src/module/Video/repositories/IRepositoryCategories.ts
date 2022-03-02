import { DeleteResult } from "typeorm";
import { Category } from "../entities/Categories";


interface ICategoryCreateDTO{

    name: string;
    description: string;
}



interface IRepositoryCategory {


    create({name, description }: ICategoryCreateDTO): Promise<void>;

    list(): Promise<Category[]>

    findCategory(name: string): Promise<Category>
    findCategoryById(id: string): Promise<Category>

    deleteCategory(id: string): Promise<DeleteResult>




}

export {IRepositoryCategory, ICategoryCreateDTO}