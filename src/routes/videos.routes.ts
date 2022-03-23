import { Router } from "express"
import { DeleteVideoController } from "../module/Video/useCase/Video/deleteVideo/deleteVideoController"
import { UpdateVideoController } from "../module/Video/useCase/Video/updateVideo/updateVideoController"
import { CreateVideoController } from "../module/Video/useCase/Video/videoCreate/createVideoController"
import { GetAllVideoController } from "../module/Video/useCase/Video/videoGetAll/getAllVideoController"




const videosRouter = Router()

const createVideoController = new CreateVideoController()
const getAllVideoController = new GetAllVideoController()
const deleteVideoController = new DeleteVideoController()
const updateVideoController = new UpdateVideoController()


videosRouter.post("/", createVideoController.handle)
videosRouter.get("/", getAllVideoController.handle)
videosRouter.delete("/:id", deleteVideoController.handle)
videosRouter.put("/:id",updateVideoController.handle)



export { videosRouter }