import { Request, Response } from "express";
import { container } from "tsyringe";
import { Repository } from "typeorm";
import { Category } from "../../entities/Categories";
import { CreateCategoryUseCase } from "./createCategoryUSeCase";




class CreateCategoryController {

    


    async handle(request: Request, response: Response){
        const { name, description} = request.body;

        const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

        const result = await createCategoryUseCase.execute({name, description });

        if(result instanceof Error){

            return response.status(400).json(result.message)
        }

        return response.status(201).send();



    }
}

export { CreateCategoryController }