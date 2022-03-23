import { Router } from "express"
import { CreateUserController } from "../module/accounts/useCases/createUserUseCase/createUserController"


const usersRouter = Router()

const createUserController = new CreateUserController()

usersRouter.post("/", createUserController.handler)



export { usersRouter }