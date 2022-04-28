import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/AppError";
import { IRepositoryVideo } from "../../../repositories/IRepositoryVideos";


interface IRequestUpdateVideo{
    id: string;
    url: string
    name: string;
    description: string
    duration: number
    category_id:string
}





@injectable()
class UpdateVideoUseCase{

    constructor(
        @inject("repositoryVideo")
        private repositoryVideo: IRepositoryVideo
    ){}

    async execute({id, url, name, description, duration, category_id}: IRequestUpdateVideo){

        const findId = await this.repositoryVideo.findVideoById(id)

        if(! findId){
            throw new AppError("Video does not exists", 400)
        }

        const result = await this.repositoryVideo.updateVideo({id, url, name, description, duration, category_id}) 
        
        return result


    }


}


export { UpdateVideoUseCase }