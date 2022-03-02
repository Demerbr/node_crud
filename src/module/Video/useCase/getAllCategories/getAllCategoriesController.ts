import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllCategoryUseCase } from "./getAllCategoriesUseCase";






class GetAllCategoryController{
    async handle(request: Request, response: Response){

        const getAllCategoryUseCase = container.resolve(GetAllCategoryUseCase)

        const all = await getAllCategoryUseCase.execute();

        return response.json({all})
    }



}



export { GetAllCategoryController }