import ProductsRepository from "../repositories/productsRepository";
import { inject, injectable } from "tsyringe";
import { ProdcutsModel } from "../models/productModel";


@injectable()
export default class ProductServices{
    constructor(@inject(ProductsRepository) private productMethods: ProductsRepository){}

    async getAllProducts(){
        return await this.productMethods.findAllProducts()
    }

    async createProducts(product: Partial<ProdcutsModel>){
        return await this.productMethods.createProduct(product)
    }

    async updateProduct(id: number, update: Partial<ProdcutsModel>){
        return await this.productMethods.updateProduct(id, update)
    }

    async deleteProduct(id:number){
        await this.productMethods.deleteProduct(id)
    }
}