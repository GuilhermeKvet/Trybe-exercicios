import { IUser } from "../model/entities/IUser";
import User from "../model/entities/User";
import UserRepository from "../model/repository/UserRepository";
import UserValidation from "../validations/UserValidation";

export default class UserService {

    constructor(
        private userRepository = new UserRepository()
    ) {}

    public create = async(user: User): Promise<IUser> => {
        if(!UserValidation.validateUser(user.email, user.password))
            throw new Error('User or Password are')
        const result = await this.userRepository.create(user)
        return result
    }
}