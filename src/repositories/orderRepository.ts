import { injectable } from "tsyringe";
import { OrdersModel } from "../models/orderModel";
//Creamos la clase que nos hara las operaciones CRUD en base al modelo que le estamos transfiriendo
@injectable()
export default class OrdersRepository{
    async findAllOrders(){
        return await OrdersModel.findAll() //Trae todas las ordenes que esten en la base de datos
    }

    async findById(id: number){
        return await OrdersModel.findByPk(id) //Me trae una orden en base al id que le transferimos
    }

    async createOrder(order: Partial<OrdersModel>){ 
        return await OrdersModel.create(order) //Crea una orden en base al modelo
    }

    async updateOrder(id: number, updates: Partial<OrdersModel>){ // Actualiza una orden, recibiendo por parametro el id y el cuerpo de la solicitud
        try {
            const orderFound = await OrdersModel.findByPk(id)

            if(!orderFound){
                throw new Error('order not found')
            }

            return await OrdersModel.update(updates, {
                where : {id}
            })
        } catch (err) {
            console.log('Cannot be update order');
            
        }
    }

    async deleteOrder(id: number){ //Elimina una orden con base al id suministrado
        return await OrdersModel.destroy({
            where: {id}
        })
    }

    async findOrdersByUserId(userId: number){ 
        return await OrdersModel.findAll({
            where: {userId}
        })
    }
} 