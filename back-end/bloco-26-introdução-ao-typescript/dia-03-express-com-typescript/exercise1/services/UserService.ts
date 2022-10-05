import { NotFoundError } from "restify-errors";
import User from "../interfaces/UserInterface";
import connection from "../models/connection";
import UserModel from "../models/UserModel";

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getById(id: number): Promise<User> {
    const user = await this.model.getById(id);
    return user;
  }

  public async create(user: User): Promise<User> {
    const newUser = await this.model.create(user);
    return newUser;
  }

  public async update(id: number, user: User) {
    const emailFound = await this.model.getByEmail(user.email);
    
    if (emailFound) {
      throw new NotFoundError('ValidationError');
    }
    await this.model.update(id, user);
  }

  public async delete(id: number) {
    const userFound = await this.model.getById(id);
    
    if (!userFound) {
      throw new NotFoundError('NotFoundError');
    }

    await this.model.delete(id);
  }
};