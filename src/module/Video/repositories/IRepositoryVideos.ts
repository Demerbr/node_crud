import { EntitySchemaOptions } from "typeorm/entity-schema/EntitySchemaOptions";
import { Category } from "../entities/Categories";
import { Video } from "../entities/Videos";


interface ICreateVideosDTO{
    name: string;
    url: string;
    description: string;
    duration: number;
    category_id: string;
}

interface IUpdateVideoDTO{

    id: string;
    url: string;
    name: string;
    description: string
    duration: number
    category_id:string

}





interface IRepositoryVideo {

    craete({name, description, duration, category_id}: ICreateVideosDTO): Promise<Video>

    list(): Promise<Video[]>

    findCategory_id(id: string): Promise<Category>

    findVideoByName(name: string): Promise<Video>


    findVideoById(id: string): Promise<Video>

    deleteVideo(id: string): Promise<void>

    updateVideo({id, name, description, duration, category_id}: IUpdateVideoDTO): Promise<Video | Error>





}


export { IRepositoryVideo, ICreateVideosDTO, IUpdateVideoDTO}