import { EntitySchemaOptions } from "typeorm/entity-schema/EntitySchemaOptions";
import { Category } from "../entities/Categories";
import { Video } from "../entities/Videos";


interface ICreateVideosDTO{
    name: string;
    description: string;
    duration: number;
    category_id: string;
}





interface IRepositoryVideo {

    craete({name, description, duration, category_id}: ICreateVideosDTO): Promise<Video>

    list(): Promise<Video[]>

    findCategory_id(id: string): Promise<Category>

    findVideoById(id: string): Promise<Video>



}


export { IRepositoryVideo, ICreateVideosDTO}