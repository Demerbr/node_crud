import { Router } from "express";
import { CreateCategoryController } from "../useCase/createCategories/createCategoryController";
import { DeleteCategoryController } from "../useCase/deleteCategories/deleteCategotyController";
import { GetAllCategoryController } from "../useCase/getAllCategories/getAllCategoriesController";



const categoriesRouter = Router()
const categoriesRouterDel = Router()


const createCategoryController = new CreateCategoryController()
const getAllCategoryController = new GetAllCategoryController()
const deleteCategoryController = new DeleteCategoryController()


categoriesRouter.post("/", createCategoryController.handle)

categoriesRouter.get("/", getAllCategoryController.handle)

categoriesRouterDel.delete("/", deleteCategoryController.handle)

export { categoriesRouter, categoriesRouterDel }