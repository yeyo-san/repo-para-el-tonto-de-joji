import { Request, Response } from "express"; // Importamos request y response para typar las respuestas del servidor
import { container } from "tsyringe"; //Importamos nuestro contenedor de dependecias
import ProductServices from "../services/productsServies"; //Importamos los servicios

//Controlador que recibira peticiones crud y dara un estado de cara a lo que arroje nuestra peticion
export default class ProductController{
    
    //Metodo para traernos todos los productos de la base de datos
    static async getAllProducts(_: Request, res: Response){
        const _service = container.resolve(ProductServices)
        
        try {
            const product = await _service.getAllProducts();

            if(!product){
                throw new Error('Products not found')
            }
            
            res.status(200).json({ 
                status: 200,
                data: product
            })
        } catch (err) {
            res.status(404).json({ 
                status: 404,
                data: err
            })   
        }
    }

    //Metodo para crear un producto he inyectarlo a la base de datos
    static async createProduct( req: Request, res: Response ) {
            const _service = container.resolve(ProductServices)
            const data = req.body
            
            try {
                const product = await _service.createProducts(data);                
                
                res.status(201).json({ 
                    status: 201,
                    message: 'Created successfully',
                    token: product
                })
            } catch (err) {
                res.status(400).json({ 
                    status: 400,
                    data: err
                })   
            }
        }

    //Metodo para actualizar un producto
    static async updateProduct( req: Request, res: Response ){
        const _service = container.resolve(ProductServices)
        const {name, price, description, stock} = req.body
        const { id } = req.params        
        
        try {
            const product = await _service.updateProduct(parseInt(id), {name, price, description, stock} );
            
            res.status(200).json({ 
                status: 201,
                data: product
            })
        } catch (err) {
            res.status(400).json({ 
                status: 400,
                data: err
            })   
        }
    }

    //Metodo para eliminar un producto de la base de datos
     static async deleteProduct ( req: Request, res: Response){
        const _service = container.resolve(ProductServices)

        try {
            const productDeleted = await _service.deleteProduct(parseInt(req.params.id));
            
            res.status(200).json({ 
                status: 201,
                data: productDeleted
            })
        } catch (err) {
            res.status(400).json({ 
                status: 400,
                data: err
            })   
        }
    }

}