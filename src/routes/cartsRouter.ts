import { Router } from "express";
import CartController from "../controllers/cartsController";

const cartRouter = Router()

cartRouter.post('/', CartController.createNewCart)

export default cartRouter