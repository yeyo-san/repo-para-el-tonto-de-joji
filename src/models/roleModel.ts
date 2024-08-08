//Importamos los decoradores que nos ayudaran en la creacion de nuestra tabala Roles en nuestra base de datos

import { 
    Table,
    Column, 
    Model, 
    DataType, 
    PrimaryKey, 
    AutoIncrement,
    HasOne, 
} from "sequelize-typescript";
import { UsersModel } from "./userModel";
import { Permissions } from "./permissionModel";

//Tabla / clase que nos indica los parametros de los roles
@Table({
    tableName: 'roles',
    timestamps: true
})
export class RolesTableModel extends Model {
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

    @HasOne(() => UsersModel)
    user!: UsersModel[]

    @HasOne(() => Permissions)
    permission!: Permissions[] 
}