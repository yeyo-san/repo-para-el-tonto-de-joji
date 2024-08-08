//Importamos decoradores

import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import Entities from './entitiesModel';
import { RolesTableModel } from './roleModel';

//Tabla / clase que nos indica los parametros de los permisos
@Table
export class Permissions extends Model{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id!: number;

    @ForeignKey(() => RolesTableModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    roleId!: number

    @ForeignKey(() => Entities)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    entityId!: number;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    canCreate!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    canUpdate!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    canDelete!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    canGet!: boolean;
}