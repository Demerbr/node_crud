import { Request, Response } from "express"
import { container } from "tsyringe"
import { GetAllVideosUseCase } from "./getAllVideoUseCase"










class GetAllVideoController {
    

    async handle(request: Request, response: Response){
        
        const getAllVideosUseCase = container.resolve(GetAllVideosUseCase)

        const videos = await getAllVideosUseCase.execute()

        return response.json(videos)




    }







}


export { GetAllVideoController }