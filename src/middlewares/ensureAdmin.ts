import { NextFunction, Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { User } from "../module/accounts/entities/Users";
import { UserRepository } from "../module/accounts/repositories/implementation/UsersRepository";





export async function ensureAdmin( request: Request, response: Response, next: NextFunction){

    const { user_id } = request

    const usersRepositories = getRepository(User)

    const { isAdmin } = await usersRepositories.findOne(user_id)

    if(! isAdmin){

        throw new AppError("Unauthorized", )
    }

    next()

    
}