import { Router } from "express";
import RolController from "../controllers/rolesController";

const rolRouter = Router()

rolRouter.get('/', RolController.getAllRoles)
rolRouter.post('/', RolController.createRol)

export default rolRouter