import { inject, injectable } from "tsyringe";
import { Video } from "../../../entities/Videos";
import { IRepositoryVideo } from "../../../repositories/IRepositoryVideos";


interface IVideosRequest {
    name: string;
    description: string;
    duration: number;
    category_id: string;
}




@injectable()
class CreateVideoUseCase {

    constructor(
        @inject("repositoryVideo")
        private repositoryVideo: IRepositoryVideo
    ){}
    


    async execute({name, description, duration, category_id }: IVideosRequest): Promise<Video | Error>{

        const ifIExistCategory = await this.repositoryVideo.findCategory_id(category_id)

        if(! ifIExistCategory){
            throw  new Error("Category does not exists");
            
        }
        

        const ifExistsVideo = await this.repositoryVideo.findVideoByName(name)

        if(ifExistsVideo){

            return new Error("Video already exists")
        }


        const video =  this.repositoryVideo.craete({
            name,
            description,
            duration,
            category_id
        })


        return video

    }



}


export { CreateVideoUseCase }   