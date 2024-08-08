//Importamos los decoradores que nos ayudaran en la creacion de nuestra tabala Products en nuestra base de datos

import { 
    Table,
    Column, 
    Model, 
    DataType, 
    PrimaryKey, 
    AutoIncrement,
    BelongsTo,
    ForeignKey,
    HasMany
} from "sequelize-typescript";
import { UsersModel } from "./userModel";
import { ProductCartModel } from "./productCart";

//Tabla / clase que nos indica los parametros de el carro de compras
@Table({
    tableName: 'cart',
    timestamps: true
})
export class CartModel extends Model {
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
    userId!: number

    @BelongsTo(() => UsersModel)
    user!: UsersModel

    @HasMany(() => ProductCartModel)
    productCart!: ProductCartModel[] 
}