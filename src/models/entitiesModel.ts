//Importamos decoradores
import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  HasOne
} from 'sequelize-typescript';
import { Permissions } from './permissionModel';

//Tabla / clase que nos indica los parametros de las entidades

@Table
export default class Entities extends Model{
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

    @HasOne(() => Permissions)
    permissions!: Permissions[]
}