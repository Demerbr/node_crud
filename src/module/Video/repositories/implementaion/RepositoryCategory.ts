import { DeleteResult, getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Categories";
import { ICategoryCreateDTO, ICategoryUpdatedDTO, IRepositoryCategory } from "../IRepositoryCategories";







class repositoryCategory implements IRepositoryCategory {

    private repository: Repository<Category>;


    constructor(){
        this.repository = getRepository(Category)
    }


    async create({ name, description }: ICategoryCreateDTO): Promise<void> {

        const createCategory = this.repository.create({
            name,
            description
        });

        
        await this.repository.save(createCategory)

    }

    
    async list(): Promise<Category[]> {

        const listCategories = await this.repository.find();

        return listCategories
        
    }

    async findCategoryByName(name: string): Promise<Category> {
        const findByName = await this.repository.findOne({name})

        return findByName
    }

    async findCategoryById(id: string): Promise<Category> {
        const findByid = await this.repository.findOne({id})

        
        return findByid
    }

    async deleteCategory(id: string): Promise<DeleteResult> {
        const deletCat = await this.repository.delete(id);

        return deletCat

    }

    async updateCategory({ id, name, description }: ICategoryUpdatedDTO): Promise<Category | Error> {
    
        const category = await this.repository.findOne({id})

    
        

        category.name = name ? name : category.name
        category.description = description ? description : category.description;

        await this.repository.save(category)

        return category

    }




    


}

export { repositoryCategory }