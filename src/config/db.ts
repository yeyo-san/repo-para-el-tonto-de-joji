//Importamos sequelize para poder configuar nuestra conexion a nuestra base de datos
import { Sequelize } from "sequelize-typescript";
import { UsersModel } from "../models/userModel";
import { ProdcutsModel } from "../models/productModel";
import { RolesTableModel } from "../models/roleModel";
import { CartModel } from "../models/cartModel";
import { OrdersModel } from "../models/orderModel";
import { ProductCartModel } from "../models/productCart";
import Entities from "../models/entitiesModel";
import { Permissions } from "../models/permissionModel";

const sequelizeStart: Sequelize = new Sequelize({
    dialect: 'mysql', //En que dialecto nos comunicaremos con la base
    host: 'localhost', //A que parte atacaremos
    username: 'root', //Username de la base de datos
    password: '', //Contraseña de nuestra base de datos
    database: 'prueba_database', //Nombre de nuestra base de datos
    models: [UsersModel, ProdcutsModel, RolesTableModel, CartModel, OrdersModel, ProductCartModel, Entities, Permissions] //Estos son los modelos que se crearan en nuestra base de datos una vez arriba el servidor
})


// Sincroniza los modelos con la base de datos, solo la descomento cuando hago cambios en los modelos para que no se este haciendo el proceso una y otra vez
// sequelizeStart.sync({ alter: true }) // Usar `alter: true` para ajustar la base de datos al esquema de modelos
//   .then(() => {
//   console.log('Database & tables created or updated!');    })
//   .catch((error) => {
//   console.error('Error syncing database:', error);
// });

export default sequelizeStart