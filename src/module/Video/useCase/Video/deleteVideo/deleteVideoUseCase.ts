import { inject, injectable } from "tsyringe";
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

    async execute({id}: IRequestVideo): Promise <void | Error> {

        const findId = await this.repositoryVideo.findVideoById(id)


        if(! findId){
            return new Error("Video id does not exists")
        }

        return await this.repositoryVideo.deleteVideo(id)

        
    }



}


export { DeleteVideoUseCase }