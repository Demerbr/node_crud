import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"
import { UserRepository } from "../module/accounts/repositories/implementation/UsersRepository";


interface Ipayload{
    sub: string
}




export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){

    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new Error("Token missing");
        
    }

    const [, token] = authHeader.split(" ")

    try{

       const {sub: user_id} = verify(token,"jsonwebtoken") as Ipayload

       const usersRepository = new UserRepository

       const user = usersRepository.findById(user_id)

       if(!user){
           throw new Error("User does not exists! ");
           
       }




       next()
    }catch{
        throw new Error("Invalid token");
    }    
}