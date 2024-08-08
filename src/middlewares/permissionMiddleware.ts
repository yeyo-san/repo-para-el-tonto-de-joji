import { Request, Response, NextFunction } from 'express';
import { Permissions } from '../models/permissionModel';

interface UserPayload {
  id: number;
  email: string;
  roleId: number; // Asegúrate de incluir el roleId en el payload del JWT
}

const checkPermission = ( action: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as UserPayload;  // Obtener el usuario del JWT
    
    if (!user) return res.sendStatus(401); // Usuario no autenticado

    // Buscar los permisos del rol del usuario para la entidad dada
    const permissions = await Permissions.findOne({
      where: {
        roleId: user.roleId,
      },
    });

    if (!permissions) return res.sendStatus(403); // No se encontraron permisos

    // Verificar si el usuario tiene permiso para realizar la acción solicitada
    switch (action) {
      case 'create':
        if (!permissions.canCreate) return res.sendStatus(403);
        break;
      case 'update':
        if (!permissions.canUpdate) return res.sendStatus(403);
        break;
      case 'delete':
        if (!permissions.canDelete) return res.sendStatus(403)
        ;
        break;
      case 'get':
        if (!permissions.canGet) return res.sendStatus(403);
        break;
      default:
        return res.sendStatus(400); // Acción inválida
    }

    next();
  };
};

export default checkPermission