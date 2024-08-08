//Importamos container de tsyringe para almacenar y inyectar nuestras dependecias mas adelante en los servicios y controladores
import { container } from "tsyringe";
import UserRepository from "../repositories/userRepository.";
import OrdersRepository from "../repositories/orderRepository";
import ProductCartRepository from "../repositories/productCartRepository";
import ProductsRepository from "../repositories/productsRepository";
import RolesRepository from "../repositories/rolesRepository";
import EntitiesRepository from "../repositories/entitiesRepository";
import UserServices from "../services/userServices";
import ProductServices from "../services/productsServies";
import ProductCartServices from "../services/productsCartServices";
import OrderServices from "../services/oderServices";
import CartRepository from "../repositories/cartRepository";
import PermissionRepository from "../repositories/permissionRepositories";

//Instanciamos repositorios, cada una de ellas una vez para ahorrar memoria
container.registerSingleton<UserRepository>(UserRepository)
container.registerSingleton<OrdersRepository>(OrdersRepository)
container.registerSingleton<ProductCartRepository>(ProductCartRepository)
container.registerSingleton<ProductsRepository>(ProductsRepository)
container.registerSingleton<RolesRepository>(RolesRepository)
container.registerSingleton<EntitiesRepository>(EntitiesRepository)
container.registerSingleton<PermissionRepository>(PermissionRepository)

//Instanciamos servicios, cada uno de ellos una vez para ahorrar memoria
container.registerSingleton<UserServices>(UserServices)
container.registerSingleton<ProductServices>(ProductServices)
container.registerSingleton<ProductCartServices>(ProductCartServices)
container.registerSingleton<OrderServices>(OrderServices)
container.registerSingleton<CartRepository>(CartRepository)



