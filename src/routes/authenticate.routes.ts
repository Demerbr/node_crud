import { Router } from "express"
import { AuthencateUSerController } from "../module/accounts/useCases/authenticateUser/AuthenticateUserController"


const authenticaterouter = Router()

const authenticateUSerController = new AuthencateUSerController()


authenticaterouter.post("/sessions", authenticateUSerController.handle)



export { authenticaterouter }