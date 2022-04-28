import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateVideoUseCase } from "./createVideoUseCase";







class CreateVideoController {

    async handle ( request: Request, response: Response){
        const {name, url, description, duration, category_id  } = request.body


      


        const createVideoUseCase = container.resolve(CreateVideoUseCase)

        const result = await createVideoUseCase.execute({name, url, description, duration, category_id})


        if(result instanceof Error ){

          return response.status(400).json(result.message)
        }

        return response.status(201).send()

    }



}

export { CreateVideoController }