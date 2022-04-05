import { isConstructorToken } from "tsyringe/dist/typings/providers/injection-token";
import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/Users";
import { ICreateUserDTO, IUsersRepository } from "../IUserRepository";





class UserRepository implements IUsersRepository{

    private repository: Repository<User>;

    constructor(){
        this.repository = getRepository(User)
    }

    


    async create({name, email, password}: ICreateUserDTO): Promise<User> {
       const user = this.repository.create({
           name,
           email,
           password
       })

       this.repository.save(user)

       return user
    }
    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({email})

        console.log(user)

        return user

        
    }
    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne({id})

        return user
    }


}

export { UserRepository }