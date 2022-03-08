import{Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateCategoryUsecase } from "./updateCategoryUseCase"





class UpdateCategoryController {

    async handle( request: Request, response: Response){

        const { id } = request.params
        const { name, description} = request.body

        const updateCategoryUsecase = container.resolve(UpdateCategoryUsecase)

        const result = await updateCategoryUsecase.execute({id, name, description})

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }

}

export { UpdateCategoryController }