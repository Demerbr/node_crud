import {compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../errors/AppError"


import { IUsersRepository } from "../../repositories/IUserRepository"


interface IRequest{
    email: string,
    password: string
}

interface IResponse {
    user:{
        name: string,
        email: string
    },
    token: string
}

@injectable()
class AuthenticateUSerUseCase{

    constructor(
        @inject("userRepository")
        private userRepository: IUsersRepository
    ){}

    async execute({email, password}: IRequest): Promise<IResponse | AppError>{

        const user = await this.userRepository.findByEmail(email)

        if(! user){
            throw new AppError("Email or password incorrect!", 401);
            
        }

        const passwordMatch = await compare(password, user.password)
        
        if( ! passwordMatch){
            throw new AppError("Email or Password incorrect!", 401);
            
        }

        
        const token = sign({}, "jsonwebtoken", {
            subject: user.id,
            expiresIn: "1d"
        });

        const tokenReturn: IResponse = {
            token,
            user:{
                name: user.name,
                email: user.email

            }
        }

        return tokenReturn
    };
};

export { AuthenticateUSerUseCase }