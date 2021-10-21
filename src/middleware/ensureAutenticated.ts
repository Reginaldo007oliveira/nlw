import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken";



export function ensureAuthenticated(request: Request, response: Response, next:NextFunction){
    const authToken = request.headers.authorization;
    if(!authToken){
        return response.status(401).json({
            erroCode: "token.invalid",
        });
    }
// Bearer 564564564564564kl4k564564 preciso desestruturar
        const [, token] = authToken.split(" ")
    try{
        const { sub} =   verify(token, process.env.JWT_SERET)
        request.user_id = sub;
    }
     catch(err){
        return response.status(401).json({errorCode: "token.expired"})
    }
    
    
}