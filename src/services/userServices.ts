import UserRepository from "../repositories/userRepository.";
import { inject, injectable } from "tsyringe";
import { UsersModel } from "../models/userModel";
import { SECRET_KEY } from "../middlewares/authMiddleware";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';

@injectable()
export default class UserServices{
    constructor(@inject(UserRepository) private userMethods: UserRepository){}

    async getAllUsers(){
        return await this.userMethods.findAllUsers()
    }

    async createUser(user: Partial<UsersModel>){
        if (!user.name || !user.email || !user.password) {
            throw new Error("Username, email, and password are required");
        }

        const hashedPassword = await bcrypt.hash(user.password, 10)
        user.password = hashedPassword

        await this.userMethods.createUser(user)
    }

    async updateUser(id: number, update: Partial<UsersModel>){
        return await this.userMethods.updateUser(id, update)
    }

    async deleteUser(id:number){
        await this.userMethods.deleteUser(id)
    }

    async getUserByEmail(email: string, password: string){
        const userFound = await this.userMethods.findUserByEmail(email)
        console.log(userFound);
        
        if (!userFound) throw new Error("User not found");

        const isPasswordValid = await bcrypt.compare(password, userFound.password)
        console.log(isPasswordValid);
        
        if(!isPasswordValid) throw new Error('Wrong password')

        const payload = { id: userFound.id, email: userFound.email, roleId: userFound.role}
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h"})

        return token
    }
}
