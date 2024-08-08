import { Permissions } from "../models/permissionModel";
import { injectable } from "tsyringe";

@injectable()
export default class PermissionRepository{
    async createNewPermissions(entitie: Partial<Permissions>){
        return await Permissions.create(entitie)
    }
}