import { Request, Response } from 'express';
import User from '../interfaces/UserInterface';
import UserService from "../services/UserService";

export default class UserController {
  private userService = new UserService();

  public getAll = async (req: Request, res: Response) => {
    const users = await this.userService.getAll();
    res.status(200).json(users);
  };

  public getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = await this.userService.getById(id);
    res.status(200).json(user);
  };

  public create = async (req: Request<{}, {}, User>, res: Response) => {
    const newUser = await this.userService.create(req.body);
    res.status(201).json(newUser);
  };

  public update = async (req: Request< any, {}, User>, res: Response) => {
    const id = Number(req.params.id);
    await this.userService.update(id, req.body);
    res.status(204).end();
  };

  public delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.userService.delete(id);
    res.status(200).json({ message: 'Usuário deletado com sucesso!' });
  };
};