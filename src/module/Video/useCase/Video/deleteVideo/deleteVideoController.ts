import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteVideoUseCase } from "./deleteVideoUseCase";






class DeleteVideoController {

async handle(request: Request, response: Response){
    const { id } = request.params

    const deleteVideosUseCase = container.resolve(DeleteVideoUseCase)

    const result = await deleteVideosUseCase.execute({id})

    if(result instanceof Error ){
        return response.status(400).json(result.message)
    }

    return response.status(204).end()


}


}


export { DeleteVideoController }