import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateCategoryController } from "../module/Video/useCase/Category/createCategories/createCategoryController";
import { DeleteCategoryController } from "../module/Video/useCase/Category/deleteCategories/deleteCategotyController";
import { GetAllCategoryController } from "../module/Video/useCase/Category/getAllCategories/getAllCategoriesController";
import { UpdateCategoryController } from "../module/Video/useCase/Category/updateCategories/updateCategoryController";



const categoriesRouter = Router()
const categoriesRouterDel = Router()


const createCategoryController = new CreateCategoryController()
const getAllCategoryController = new GetAllCategoryController()
const deleteCategoryController = new DeleteCategoryController()
const updateCategoryController = new UpdateCategoryController()

categoriesRouter.use(ensureAuthenticated)

categoriesRouter.post("/", createCategoryController.handle)

categoriesRouter.get("/", getAllCategoryController.handle)

categoriesRouterDel.delete("/:id", deleteCategoryController.handle)

categoriesRouter.put("/:id", updateCategoryController.handle)



export { categoriesRouter, categoriesRouterDel }


