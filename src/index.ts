//Importamos dependecias que nos ayudaran con el inicio de nuestra app

import 'reflect-metadata'
import  express  from 'express'
import sequelizeStart from './config/db' // Esta especificamente es nuestra conexion a la base de datos
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'
import router from './routes/Router'

const app = express()
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/e-comfast/uploads', express.static(path.join(__dirname, 'public/uploads')));

//Con esto le estamos diciendo a la app desde donde nos atacaran a nosotros para hacernos peticiones, con los metodos permitidos y su cabezera
const corsOptions = {
    origin: 'http://127.0.0.1:5500', 
    methods: ['GET', 'POST', 'PUT', 'DELETE',],
    allowedHeaders: ['Content-Type', 'Authorization'] 
};

app.use(cors(corsOptions))

app.use('/e-comfast', router)

const startServer = async () => {
    try {
        await sequelizeStart.authenticate()
        console.log('Connection successfully with the data base');

        await sequelizeStart.sync()
        app.listen(3000, () =>{
            console.log('Server liseting on the port 3000');
            
        })
    } catch (err) {
        console.log('Connection faild', err);
        
    }
}

startServer()