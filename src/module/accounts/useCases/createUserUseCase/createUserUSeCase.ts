import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { hash } from "bcrypt"

interface IRequest{
    name: string,
    email: string,
    password: string,
}

@injectable()
class CreateUSerUSeCase {

    constructor(
        @inject("userRepository")
        private userRespository: IUsersRepository
    ){}

    async execute({name, email, password}: IRequest): Promise<void>{

        const ifEmailExists = await this.userRespository.findByEmail(email)

        if( ifEmailExists ){
            throw new Error("User alredy exists");
        }

        const passwordHash = await hash(password, 8)

        await this.userRespository.create({name, email, password: passwordHash})
    }
}

export {CreateUSerUSeCase}