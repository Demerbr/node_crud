import { Router } from "express"
import { userSchema } from "../middlewares/validator/createUser-schema"
import { ValidationCreateUSerSchema } from "../middlewares/validator/validateCreateUser"
import { CreateUserController } from "../module/accounts/useCases/createUserUseCase/createUserController"


const usersRouter = Router()

const createUserController = new CreateUserController()

usersRouter.post("/",userSchema, ValidationCreateUSerSchema, createUserController.handler)



export { usersRouter }