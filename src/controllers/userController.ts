import { Request, Response } from "express"; // Importamos request y response para typar las respuestas del servidor
import { container } from "tsyringe"; //Importamos nuestro contenedor de dependecias
import UserServices from "../services/userServices"; //Importamos nuestros servicios de usuario
import upload from "../middlewares/multerConfig"; //Importamos config para subir url de la imagen a la data base


//Controlador que recibira peticiones crud y dara un estado de cara a lo que arroje nuestra peticion
export default class UserController{

    //Metodo para traer todos los usuarios
    static async getAllUsers(_: Request, res: Response){
        const _service = container.resolve(UserServices)     //Inyectamos nuestra dependencia con el contenedor

        
        try {
            const users = await _service.getAllUsers();

            if(!users){
                throw new Error('Users not found')
            }
            
            res.status(200).json({ 
                status: 200,
                data: users
            })
        } catch (err) {
            res.status(404).json({ 
                status: 404,
                data: err
            })   
        }
    }

    //Metodo para crear un nuevo usuario con lo que pasemos en el cuerpo de la solicitud
    static async createUser( req: Request, res: Response ) {
        upload.single('image')(req, res, async (err: any) =>{
           
            const _service = container.resolve(UserServices) //Inyectamos nuestra dependencia con el contenedor
            const data = req.body
            
            const imagePath = req.file
                ?`http://localhost:3000/e-comfast/uploads/${req.file.filename}`
                : null
    
            
            try {
                // if (!data.name || !data.tamañoDelCuloDeUnoADiez || !data.email) {
                //     return res.status(400).json({
                //         status: 400,
                //         message: "Required fields are missing"
                //     });
                // }

                const user = await _service.createUser({
                    ...data,
                    image_url: imagePath,
                });                
                
                res.status(201).json({ 
                    status: 201,
                    message: 'Created successfully',
                    token: user
                })
            } catch (err) {
                res.status(400).json({ 
                    status: 400,
                    data: err
                })   
        }
        })
    }

    //Metodo para actualizar un usuario ya registrado en la base de datos // sin token no se puede hacer
    static async updateUser( req: Request, res: Response ){
        const _service = container.resolve(UserServices)  //Inyectamos nuestra dependencia con el contenedor
        const {name, email, password, role} = req.body
        const { id } = req.params
        console.log(id);
        
        
        try {
            const user = await _service.updateUser(parseInt(id), {name, email, password, role} );
            
            res.status(200).json({ 
                status: 201,
                data: user
            })
        } catch (err) {
            res.status(400).json({ 
                status: 400,
                data: err
            })   
        }
    }

    //Metodo para eliminar un usuario ya registrado en base de datos con base a su ID // sin token no se puede hacer
     static async deleteUser ( req: Request, res: Response){
        const _service = container.resolve(UserServices)  //Inyectamos nuestra dependencia con el contenedor

        try {
            const user = await _service.deleteUser(parseInt(req.params.id));
            
            res.status(200).json({ 
                status: 201,
                data: user
            })
        } catch (err) {
            res.status(400).json({ 
                status: 400,
                data: err
            })   
        }
    }

    //Metodo que nos permite inicias sesion como usuarios ya creados en la base de datos, la funcion nos arroja un token que expira en una hora
    static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      console.log(email, password);
      
      const userService = container.resolve(UserServices); //Inyectamos nuestra dependencia con el contenedor
      const token = await userService.getUserByEmail(email, password);

      res.status(200).json({
        status:200,
        message: 'Logged in successfully',
        token,
       });
    } catch (error) {  //Si nuestras credenciales son invalidas nos dira que no es posible acceder
      console.error("Login error:", error);
      res.status(401).json({ message: 'Cannot access the page' });
    }
  }

}