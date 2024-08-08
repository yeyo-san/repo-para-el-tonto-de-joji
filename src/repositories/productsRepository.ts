import { injectable } from "tsyringe";
import { ProdcutsModel } from "../models/productModel";
//Creamos la clase que nos hara las operaciones CRUD en base al modelo que le estamos transfiriendo
@injectable()
export default class ProductsRepository{
    async findAllProducts(){
        return await ProdcutsModel.findAll() //Trae todos los productos que esten en la base de datos
    }

    async findById(id: number){
        return await ProdcutsModel.findByPk(id) //Me trae un producto en base al id que le transferimos
    }

    async createProduct(product: Partial<ProdcutsModel>){ 
        return await ProdcutsModel.create(product) //Crea un producto en base al modelo
    }

    async updateProduct(id: number, updates: Partial<ProdcutsModel>){ // Actualiza el producto, recibiendo por parametro el id y el cuerpo de la solicitud
        try {
            const userFound = await ProdcutsModel.findByPk(id)

            if(!userFound){
                throw new Error('Product not found')
            }

            return await ProdcutsModel.update(updates, {
                where : {id}
            })
        } catch (err) {
            console.log('Cannot be update product');
            
        }
    }

    async deleteProduct(id: number){
        return await ProdcutsModel.destroy({
            where: {id}
        })
    }
} 