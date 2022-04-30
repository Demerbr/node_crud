import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { hash } from "bcrypt"
import { User } from "../../entities/Users";
import { AppError } from "../../../../errors/AppError";

interface IRequest{
    name: string,
    email: string,
    password: string,
    isAdmin: boolean,
}

@injectable()
class CreateUSerUSeCase {

    constructor(
        @inject("userRepository")
        private userRespository: IUsersRepository
    ){}

    async execute({name, email, password, isAdmin}: IRequest): Promise<User>{

        const ifEmailExists = await this.userRespository.findByEmail(email)

        if( ifEmailExists ){
            throw new AppError("User already exists", 400);
        }

        const passwordHash = await hash(password, 8)

       const user =  await this.userRespository.create({name, email, password: passwordHash, isAdmin})

       return user
    }
}

export {CreateUSerUSeCase}