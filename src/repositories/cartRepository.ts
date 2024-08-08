import { injectable } from "tsyringe";
import { CartModel } from "../models/cartModel";

//Creamos la clase que nos hara las operaciones CRUD en base al modelo que le estamos transfiriendo
@injectable()
export default class CartRepository{
    async createNewCart(userId: Partial<CartModel>){
        return await CartModel.create(userId)
    }
}