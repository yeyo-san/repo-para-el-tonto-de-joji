import { Request, Response } from "express"; //Importamos los metodos de respuestas del framework express
import { container } from "tsyringe";
import PermissionRepository from "../repositories/permissionRepositories";

export default class PermissionController{
    static async createPermission( req: Request, res: Response){
        const _service = container.resolve(PermissionRepository)

        try {
            const permissionEntitieCreated = _service.createNewPermissions(req.body)
        
            res.status(201).json({
                status: 201,
                message: 'Created succesfully'
            })
        } catch (err) {
            res.status(400).json({ 
                status: 400,
                data: err
            })  
        }
    }
}