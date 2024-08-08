//Importamos los decoradores que nos ayudaran en la creacion de nuestra Orders Products en nuestra base de datos

import { 
    Table,
    Column, 
    Model, 
    DataType, 
    PrimaryKey, 
    AutoIncrement, 
    BelongsTo,
    ForeignKey
} from "sequelize-typescript";
import { UsersModel } from "./userModel";
import { ProductCartModel } from "./productCart";import { INTEGER } from "sequelize";

//Tabla / clase que nos indica los parametros de las ordenes
@Table({
    tableName: 'orders',
    timestamps: true
})
export class OrdersModel extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @ForeignKey(() => UsersModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    userId!: number;

    @ForeignKey(() => ProductCartModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    productCartId!: number

    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    total!: number 


    @BelongsTo(() => UsersModel)
    user!: UsersModel

    @BelongsTo(() => ProductCartModel)
    productCart!: ProductCartModel
}