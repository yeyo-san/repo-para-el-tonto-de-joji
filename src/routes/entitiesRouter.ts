import { Router } from 'express';
import EntitiesController from '../controllers/entitiesController';

const entitiesRouter = Router()

entitiesRouter.get('/', EntitiesController.getEntities)
entitiesRouter.post('/', EntitiesController.createNewEntitie)

export default entitiesRouter