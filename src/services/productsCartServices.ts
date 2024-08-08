import ProductCartRepository from "../repositories/productCartRepository";
import { inject, injectable } from "tsyringe";
import { ProductCartModel } from "../models/productCart";

@injectable()
export default class ProductCartServices{
    constructor(@inject(ProductCartRepository) private productsCartMethods: ProductCartRepository){}

    async addProductToCart(product: Partial<ProductCartModel>){
        return await this.productsCartMethods.addProduct(product)
    }

    async updateProductCart(id: number, product: Partial<ProductCartModel>){
        return await this.productsCartMethods.updateProductCart(id, product)
    }

    async deleteProductOfCart(id:number){
        await this.productsCartMethods.deleteProductCart(id)
    }
}