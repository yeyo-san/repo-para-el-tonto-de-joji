import { Request, Response } from "express"; // Importamos request y response para typar las respuestas del servidor
import { container } from "tsyringe"; //Importamos nuestro contenedor de dependecias
import ProductCartServices from "../services/productsCartServices";//Importamos los servicios

//Clase/ controlador que recibira peticiones crud y dara un estado de cara a lo que arroje nuestra peticion
export default class ProductCartController{
    static async addProduct(req: Request, res: Response){ //Metodo para añadir un nuevo producto al carro de compras
        const _service = container.resolve(ProductCartServices)
        const {cartId, productId, quantity} = req.body;
        
        try {
            const productCart = await _service.addProductToCart({cartId, productId, quantity})

            res.status(201).json({ 
                status: 201,
                data: productCart
            })
        } catch (err) {
            res.status(400).json({ 
                status: 400,
                data: err
            })   
        }
    }
    //Metodo para actualizar la cantidad del carro de compras
    static async updateProductCart( req: Request, res: Response ) { 
            const _service = container.resolve(ProductCartServices)
            const {cartId, productId, quantity} = req.body;
            
            try {
                const product = await _service.updateProductCart(parseInt(req.params.id),{cartId, productId, quantity});                
                
                res.status(201).json({ 
                    status: 201,
                    message: 'Update successfully',
                    data: product
                })
            } catch (err) {
                res.status(400).json({ 
                    status: 400,
                    data: err
                })   
            }
        }
        
        //Metodo para eliminar un producto del carro de compras
        static async deleteProductCart( req: Request, res: Response ){ 
        const _service = container.resolve(ProductCartServices)
        const { id } = req.params        
        
        try {
            const productCart = await _service.deleteProductOfCart(parseInt(id));
            
            res.status(200).json({ 
                status: 200,
                data: productCart
            })
        } catch (err) {
            res.status(400).json({ 
                status: 400,
                data: err
            })   
        }
    }

}