import { inject, injectable } from "tsyringe";
import { IRepositoryVideo } from "../../../repositories/IRepositoryVideos";


interface IRequestUpdateVideo{
    id: string;
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

    async execute({id, name, description, duration, category_id}: IRequestUpdateVideo){

        const findId = await this.repositoryVideo.findVideoById(id)

        if(! findId){
            return new Error("Video does not exists")
        }

        const result = await this.repositoryVideo.updateVideo({id, name, description, duration, category_id}) 
        
        return result


    }


}


export { UpdateVideoUseCase }