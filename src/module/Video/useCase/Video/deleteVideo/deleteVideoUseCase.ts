import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/AppError";
import { IRepositoryVideo } from "../../../repositories/IRepositoryVideos";

interface IRequestVideo{

    id: string
}





@injectable()
class DeleteVideoUseCase {

    constructor(
        @inject("repositoryVideo")
        private repositoryVideo: IRepositoryVideo
    ){}

    async execute({id}: IRequestVideo): Promise <void | Error | AppError> {

        const findId = await this.repositoryVideo.findVideoById(id)


        if(! findId){
            return new AppError("Video id does not exists", 404)
        }

        return await this.repositoryVideo.deleteVideo(id)

        
    }



}


export { DeleteVideoUseCase }