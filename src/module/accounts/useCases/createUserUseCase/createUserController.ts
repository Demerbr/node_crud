import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUSerUSeCase } from "./createUserUSeCase";






class CreateUserController {

    async handler(request: Request, response: Response){
        const { name, email, password} = request.body
        const createUserUseCase = container.resolve(CreateUSerUSeCase)
        
        await createUserUseCase.execute({name, email, password})

        return response.status(201).send()
    }
}

export { CreateUserController }