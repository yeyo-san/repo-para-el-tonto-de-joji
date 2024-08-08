import { injectable } from "tsyringe";
import { UsersModel } from "../models/userModel";

//Creamos la clase que nos hara las operaciones CRUD en base al modelo que le estamos transfiriendo
@injectable()
export default class UserRepository{
    async findAllUsers(){
        return await UsersModel.findAll() //Trae todos los usuarios que esten en la base de datos
    }

    async findById(id: number){
        return await UsersModel.findByPk(id) //Me trae un usuario en base al id que le transferimos
    }

    async createUser(user: Partial<UsersModel>){ 
        return await UsersModel.create(user) //Crea un usuario en base al modelo
    }

    async updateUser(id: number, updates: Partial<UsersModel>){ // Actualiza el usuario, recibiendo por parametro el id y el cuerpo de la solicitud
        try {
            const userFound = await UsersModel.findByPk(id)
            console.log(id);
            

            if(!userFound){
                throw new Error('User not found')
            }

            return await UsersModel.update(updates, {
                where : {id}
            })
        } catch (err) {
            console.log('Cannot be update user');
            
        }
    }

    async deleteUser(id: number){ //Eliminamos el usuario con base a su id
        return await UsersModel.destroy({
            where: {id}
        })
    }

    async findUserByEmail(email: string){ //Esto nos servira para autenticar el email a la hora de hacer login
        return await UsersModel.findOne({
            where: {email}
        })
    }
} 