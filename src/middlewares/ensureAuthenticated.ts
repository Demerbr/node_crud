import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"
import { AppError } from "../errors/AppError";
import { UserRepository } from "../module/accounts/repositories/implementation/UsersRepository";


interface IPayload{
    sub: string
}




export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction){

    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new AppError("Token missing", 401);
        
    }

    const [, token] = authHeader.split(" ")

    try{

       const { sub } = verify(token,"jsonwebtoken") as IPayload

       request.user_id = sub;
           
       next()
    
    
    }catch{
        throw new AppError("Invalid token", 401);
    }    
}