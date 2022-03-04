import { Router } from "express";
import { CreateCategoryController } from "../useCase/createCategories/createCategoryController";
import { DeleteCategoryController } from "../useCase/deleteCategories/deleteCategotyController";
import { GetAllCategoryController } from "../useCase/getAllCategories/getAllCategoriesController";
import { UpdateCategoryController } from "../useCase/updateCategories/updateCategoryController";



const categoriesRouter = Router()
const categoriesRouterDel = Router()


const createCategoryController = new CreateCategoryController()
const getAllCategoryController = new GetAllCategoryController()
const deleteCategoryController = new DeleteCategoryController()
const updateCategoryController = new UpdateCategoryController()


categoriesRouter.post("/", createCategoryController.handle)

categoriesRouter.get("/", getAllCategoryController.handle)

categoriesRouterDel.delete("/:id", deleteCategoryController.handle)

categoriesRouter.put("/:id", updateCategoryController.handle)



export { categoriesRouter, categoriesRouterDel }


