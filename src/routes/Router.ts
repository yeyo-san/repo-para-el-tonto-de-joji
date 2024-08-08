import { Router } from "express";
import userRoutes from "./userRoutes";
import { fileRouter } from "./fileRouter";
import rolRouter from "./rolRouter";
import productRouter from "./productsRouter";
import orderRouter from "./orderRouter";
import productCartRouter from "./productsCartRouter";
import cartRouter from "./cartsRouter";
import entitiesRouter from "./entitiesRouter";
import permissioRouter from "./permissionRouter";

const router = Router()

router.use('/users', userRoutes)
router.use('/uploads', fileRouter)
router.use('/rol', rolRouter)
router.use('/products', productRouter)
router.use('/orders', orderRouter)
router.use('/proCarts', productCartRouter)
router.use('/Cart', cartRouter)
router.use('/entities', entitiesRouter)
router.use('/permission', permissioRouter)

export default router