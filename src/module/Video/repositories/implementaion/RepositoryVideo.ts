import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Categories";
import { Video } from "../../entities/Videos";
import { ICreateVideosDTO, IRepositoryVideo, IUpdateVideoDTO } from "../IRepositoryVideos";







class RepositoryVideo implements IRepositoryVideo{

    private repository: Repository<Video>
    private repoCategory: Repository<Category>



    constructor(){
        this.repository = getRepository(Video),
        this.repoCategory = getRepository(Category)
    }
   

   async craete({ name, description, duration, category_id }: ICreateVideosDTO): Promise<Video> {
        const  createVideo = this.repository.create({
            name,
            description,
            duration,
            category_id

        })

        console.log(createVideo)
        await this.repository.save(createVideo)


        return createVideo
    }

    async list(): Promise<Video[]> {

        const listVideos = await this.repository.find({
            relations: ["category"]
        });

        return listVideos
        
    }

    async findCategory_id(id: string): Promise<Category> {
      const findCategory_id = await this.repoCategory.findOne({id})

      return findCategory_id
    }

    async findVideoById(id: string): Promise<Video> {
        const findByid = await this.repository.findOne({id})


        return findByid
    }

    async findVideoByName(name: string): Promise<Video> {
        const findByName = await this.repository.findOne({name})

        return findByName
    }

    async deleteVideo(id: string): Promise<void> {
        const delVideo = await this.repository.delete({id})
    }

    async updateVideo({ id, name, description, duration, category_id }: IUpdateVideoDTO): Promise<Video | Error> {

        const video = await this.repository.findOne({id})

    
        

        video.name = name ? name : video.name
        video.description = description ? description : video.description;
        video.duration = duration ? duration : video.duration
        video.category_id = category_id ? category_id : video.category_id
        


        await this.repository.save(video)

        return video
        

    }



}

export { RepositoryVideo }