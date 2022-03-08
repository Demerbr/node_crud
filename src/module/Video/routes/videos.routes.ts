import { Router } from "express"
import { CreateVideoController } from "../useCase/Video/videoCreate/createVideoController"
import { GetAllVideoController } from "../useCase/Video/videoGetAll/getAllVideoController"




const videosRouter = Router()

const createVideoController = new CreateVideoController()
const getAllVideoController = new GetAllVideoController()


videosRouter.post("/", createVideoController.handle)
videosRouter.get("/", getAllVideoController.handle)



export { videosRouter }