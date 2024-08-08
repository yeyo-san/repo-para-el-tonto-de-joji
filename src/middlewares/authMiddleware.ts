import { Request, Response, NextFunction } from "express"; 
import jwt from "jsonwebtoken";

export const SECRET_KEY = 'Riwi2023' //Secret key que utilizaremos a la hora de generar el token

declare global {
    namespace Express {
        interface Request{
            user?: any
        }
    }
}

//Exportamos funcion que nos autenticara el token en donde sea que lo requiramos
export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization; //Pasamos el token por headers para la validacion
    
    if(authHeader){
        const token = authHeader.split(' ')[1]
    

        jwt.verify(token, SECRET_KEY, (err, user) => {
            if(err){
                return res.sendStatus(403)
            }

            req.user = user
            next();
        })
    } else{
        res.sendStatus(401)
    }
} 