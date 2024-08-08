import { Request, Response } from "express"; //Importamos los metodos de respuestas del framework express
import { container } from "tsyringe";
import EntitiesRepository from "../repositories/entitiesRepository";

export default class EntitiesController{
    static async createNewEntitie( req: Request, res: Response){
        const _service = container.resolve(EntitiesRepository)
        const { name } = req.body
        
        try {
            const entitieCreated = await _service.createEntitie({name})

            if(!entitieCreated){
                throw new Error('Cannot be created the entitie')
            }

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

    static async getEntities(_: Request, res: Response){
        const _service = container.resolve(EntitiesRepository)

        try {
            const entities = await _service.findAllEntities()

            if(!entities){
                throw new Error('Entities not found')
            }

            res.status(200).json({
                status: 200,
                data: entities
            })
            
        } catch (err) {
            res.status(404).json({
                status: 404,
                error: err
            })
        }
    }
}