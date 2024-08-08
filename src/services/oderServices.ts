import OrdersRepository from "../repositories/orderRepository";
import { inject, injectable } from "tsyringe";
import { OrdersModel } from "../models/orderModel";


@injectable()
export default class OrderServices{
    constructor(@inject(OrdersRepository) private orderMethods: OrdersRepository){}

    async getAllOrders(){
        return await this.orderMethods.findAllOrders()
    }

    async createOrders(product: Partial<OrdersModel>){
        return await this.orderMethods.createOrder(product)
    }

    async updateOrders(id: number, update: Partial<OrdersModel>){
        return await this.orderMethods.updateOrder(id, update)
    }

    async deleteOrders(id:number){
        return await this.orderMethods.deleteOrder(id)
    }

    async foundOrdersByUserId(userId: number){
        return await this.orderMethods.findOrdersByUserId(userId)
    }
}