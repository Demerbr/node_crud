import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateVideoUseCase } from "./updateVideoUseCase";







class UpdateVideoController {

    async handle(request: Request, response: Response){
        const { id } = request.params
        const { name, description, duration, category_id} = request.body

        const updateVideoUseCase = container.resolve(UpdateVideoUseCase)

        const result = await updateVideoUseCase.execute({id, name, description, duration, category_id})

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }


        return response.status(204).json(result)


    }
}

export { UpdateVideoController}