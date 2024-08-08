import { Request, Response } from "express"; // Importamos request y response para typar las respuestas del servidor
import { container } from "tsyringe"; //Importamos nuestro contenedor de dependecias
import OrderServices from "../services/oderServices";//Importamos los servicios

//Clase / controlador que recibira metodos crud y dara un estado de cara a lo que arroje nuestra peticion
export default class OrderController{
    static async getAllOrders(_: Request, res: Response){ //Metodo que nos servira para traer todas las ordenes de la base de datos
        const _service = container.resolve(OrderServices)
        
        try {
            const order = await _service.getAllOrders();

            if(!order){
                throw new Error('Orders not found')
            }
            
            res.status(200).json({ 
                status: 200,
                data: order
            })
        } catch (err) {
            res.status(404).json({ 
                status: 404,
                data: err
            })   
        }
    }

    static async createOrder( req: Request, res: Response ) { //Metodo que nos creara una orden nueva y la inyectara en la base de datos
            const _service = container.resolve(OrderServices)
            const data = req.body //Requerimos todo desde el cuerpo de la solicitud
            
            try {
                const product = await _service.createOrders(data); //Pasamos el cuerpo para la creacion de la orden            
                
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

    static async updateOrder( req: Request, res: Response ){ //Metodo que nos servira para actualizar una orden
        const _service = container.resolve(OrderServices)
        const {userId, productCartId, total} = req.body
        console.log(userId, productCartId, total);
        
        const { id } = req.params        
        
        try {
            const order = await _service.updateOrders(parseInt(id), {userId, productCartId, total} ); //Pasamos todo lo requerido por el cuerpo y parametros y el servicio se encarga de manejar la solicitud y dar respuesta
            
            res.status(200).json({ 
                status: 201,
                data: order
            })
        } catch (err) {
            res.status(400).json({ 
                status: 400,
                data: err
            })   
        }
    }

     static async deleteOrder ( req: Request, res: Response){ //Metodo para eliminar una orden en base al id que le pasemos por parametros
        const _service = container.resolve(OrderServices)

        try {
            const orderDeleted = await _service.deleteOrders(parseInt(req.params.id));
            
            res.status(200).json({ 
                status: 201,
                data: orderDeleted
            })
        } catch (err) {
            res.status(400).json({ 
                status: 400,
                data: err
            })   
        }
    }

    static async findOrderByUserId(req: Request, res: Response){ //Metodo para buscar todas las ordenes que tenga un usuario en base a su id
        const _service = container.resolve(OrderServices)
        const { userId } = req.params
        console.log(userId);
        

        try {
            const ordersFound = await _service.foundOrdersByUserId(parseInt(userId))
        
             res.status(200).json({ 
                status: 200,
                data: ordersFound
            })
        } catch (err) {
            res.status(404).json({ 
                status: 404,
                data: err
            })   
        }
 
    }

}