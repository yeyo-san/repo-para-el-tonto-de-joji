import { injectable } from "tsyringe";
import { ProductCartModel } from "../models/productCart";

//Creamos la clase que nos hara las operaciones CRUD en base al modelo que le estamos transfiriendo
@injectable()
export default class ProductCartRepository{
    async addProduct(product: Partial<ProductCartModel>){
        return await ProductCartModel.create(product) //Agregar un producto al carro de compras
    }

    async updateProductCart(id: number, updates: Partial<ProductCartModel>){ // Actualiza una orden, recibiendo por parametro el id y el cuerpo de la solicitud
        try {
            const cartFound = await ProductCartModel.findByPk(id)

            if(!cartFound){
                throw new Error('Cart not found')
            }

            return await ProductCartModel.update(updates, {
                where : {id}
            })
        } catch (err) {
            console.log('Cannot be update Cart');
            
        }
    }

    async deleteProductCart(id: number){ //Elimina una orden con base al id suministrado
        return await ProductCartModel.destroy({
            where: {id}
        })
    }
} 