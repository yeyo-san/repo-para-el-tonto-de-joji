import { Router } from "express";
import PermissionController from "../controllers/permissionController";

const permissioRouter = Router()

permissioRouter.post('/', PermissionController.createPermission)

export default permissioRouter