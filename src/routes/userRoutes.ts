import { Router } from "express";
import UserController from "../controllers/userController";
import { authenticateJWT } from "../middlewares/authMiddleware";
import checkPermission from "../middlewares/permissionMiddleware";

const userRoutes = Router()

// authenticateJWT, checkPermission('create'),
userRoutes.get('/', authenticateJWT, checkPermission('get'), UserController.getAllUsers)
userRoutes.post('/',  UserController.createUser)
userRoutes.post('/login', UserController.login)
userRoutes.put('/:id', authenticateJWT, checkPermission('update'), UserController.updateUser)
userRoutes.delete('/:id', authenticateJWT, checkPermission('delete'), UserController.deleteUser)

export default userRoutes
