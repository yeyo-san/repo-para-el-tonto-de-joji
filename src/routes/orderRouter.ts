import { Router } from "express";
import OrderController from "../controllers/odersControllers";
import { authenticateJWT } from "../middlewares/authMiddleware";
import checkPermission from "../middlewares/permissionMiddleware";

const orderRouter = Router()

orderRouter.get('/', authenticateJWT, OrderController.getAllOrders)
orderRouter.get('/:userId', authenticateJWT, OrderController.findOrderByUserId)
orderRouter.post('/', authenticateJWT, OrderController.createOrder)
orderRouter.put('/:id', authenticateJWT, OrderController.updateOrder)
orderRouter.delete('/:id', authenticateJWT, checkPermission('delete'), OrderController.deleteOrder)

export default orderRouter