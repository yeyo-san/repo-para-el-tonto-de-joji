//Importamos los decoradores que nos ayudaran en la creacion de nuestra tabala ProductsCart en nuestra base de datos

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
import { CartModel } from "./cartModel";
import { ProdcutsModel } from "./productModel";
import { OrdersModel } from "./orderModel";

//Tabla / clase que nos indica los parametros de el carro de productos
@Table ({
    tableName: 'productCart',
    timestamps: true
})
export class ProductCartModel extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @ForeignKey(() => CartModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    cartId!: number

    @ForeignKey(() => ProdcutsModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    productId!: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    quantity!: number

    @HasMany(() => OrdersModel)
    orders!: OrdersModel
    
    @BelongsTo(() => CartModel)
    cart!: CartModel

    @BelongsTo(() => ProdcutsModel)
    product!: ProdcutsModel
}