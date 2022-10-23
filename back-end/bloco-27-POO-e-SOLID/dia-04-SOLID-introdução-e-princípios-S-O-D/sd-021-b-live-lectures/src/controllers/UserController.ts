import UserService from "../services/UserService";
import { NextFunction, Request, Response } from 'express';
import User from "../model/entities/User";

export class UserController {
    
    constructor(private userService: UserService) {}
    
    public createUser = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const result = await this.userService.create(req.body as User);
            res.status(200).json({
                message: result,
            });
        } catch (error) {
            next(error)
        }

    }
}