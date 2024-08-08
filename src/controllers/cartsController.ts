import { Request, Response } from "express"; //Importamos los metodos de respuestas del framework express
import { container } from "tsyringe"; //Importamos nuestro contenedor de dependencias
import CartRepository from "../repositories/cartRepository";

//Clase / controlador que recibira metodos crud y dara un estado de cara a lo que arroje nuestra peticion
export default class CartController{
    static async createNewCart(req: Request, res: Response){ //Metodo que nos sirve para crear un nuevo carrito de compras
        const _service = container.resolve(CartRepository)
        const  userId  = req.body
        try {
            const newCart = await _service.createNewCart(userId)

             res.status(201).json({ 
                    status: 201,
                    message: 'Created successfully',
                    token: newCart
                })
        } catch (err) {
            res.status(400).json({ 
                    status: 400,
                    data: err
                })   
        }
    }
}