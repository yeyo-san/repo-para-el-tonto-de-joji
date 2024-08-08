import { Router } from "express";
import ProductCartController from "../controllers/productCartController";

const productCartRouter = Router();

productCartRouter.post('/', ProductCartController.addProduct)
productCartRouter.put('/:id', ProductCartController.updateProductCart)
productCartRouter.delete('/:id', ProductCartController.deleteProductCart)


export default productCartRouter