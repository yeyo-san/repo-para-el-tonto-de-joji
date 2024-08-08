import { injectable } from "tsyringe";
import { RolesTableModel } from "../models/roleModel";
//Creamos la clase que nos hara las operaciones CRUD en base al modelo que le estamos transfiriendo

@injectable()
export default class RolesRepository{
    async findAllRoles(){
        return await RolesTableModel.findAll() //Trae todos los roles que esten en la base de datos
    }

    async findById(id: number){
        return await RolesTableModel.findByPk(id) //Encontramos un rol por su id
    }

    async createRol(rol: Partial<RolesTableModel>){ //Creamos un nuevo rol
        return await RolesTableModel.create(rol)
    }
}