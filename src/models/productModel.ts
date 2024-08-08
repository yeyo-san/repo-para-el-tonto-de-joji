//Importamos los decoradores que nos ayudaran en la creacion de nuestra tabala Products en nuestra base de datos

import { 
    Table,
    Column, 
    Model, 
    DataType, 
    PrimaryKey, 
    AutoIncrement,
    HasMany, 
} from "sequelize-typescript";
import { ProductCartModel } from "./productCart";

//Tabla / clase que nos indica los parametros de productos

@Table({
    tableName: 'products',
    timestamps: true
})
export class ProdcutsModel extends Model {
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
        type: DataType.DECIMAL,
        allowNull: false,
    })
    price!: number 

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description!: string

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    stock!: number

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    image_url!: string | null; 

    @HasMany(() => ProductCartModel)
    productCart!: ProductCartModel[] 
}