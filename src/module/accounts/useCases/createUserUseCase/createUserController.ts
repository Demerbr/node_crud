import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUSerUSeCase } from "./createUserUSeCase";






class CreateUserController {

    async handler(request: Request, response: Response){
        const { name, email, password} = request.body
        const createUserUseCase = container.resolve(CreateUSerUSeCase)
        
       const user =  await createUserUseCase.execute({name, email, password})
       
       console.log(user)
        return response.status(201).json(user)

    }
}

export { CreateUserController }