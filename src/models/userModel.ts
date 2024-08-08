//Importamos los decoradores que nos ayudaran en la creacion de nuestra tabala user en nuestra base de datos

import { 
    Table,
    Column, 
    Model, 
    DataType, 
    PrimaryKey, 
    AutoIncrement, 
    HasOne,
    ForeignKey,
    HasMany
} from "sequelize-typescript";
import { CartModel } from "./cartModel";
import { RolesTableModel } from "./roleModel";
import { OrdersModel } from "./orderModel";

//Tabla / clase que nos indica los parametros de los usuarios
@Table({
    tableName: 'users',
    timestamps: true
})
export class UsersModel extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    email!: string 

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    password!: string

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    image_url!: string | null; 

    @ForeignKey(() => RolesTableModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    role!: number

    @HasMany(() => OrdersModel)
    oders!: OrdersModel[]

    @HasOne(() => CartModel)
    cart!: CartModel[]
}