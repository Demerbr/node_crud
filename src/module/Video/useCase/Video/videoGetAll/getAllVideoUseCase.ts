import { inject, injectable } from "tsyringe";
import { IRepositoryVideo } from "../../../repositories/IRepositoryVideos";








@injectable()
class GetAllVideosUseCase {

    constructor(
        @inject("repositoryVideo")
        private repositoryVideo: IRepositoryVideo
    ){}
    
    async execute(){

        const videos = await this.repositoryVideo.list()

        return videos
    }


}



export { GetAllVideosUseCase }