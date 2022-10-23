import { ResultSetHeader } from "mysql2/promise";
import MySQLConnection from "../../utils/MySQLConnection";
import { IUser } from "../entities/IUser";

export default class UserRepository {
    private persistence: MySQLConnection
    
    constructor() {
        this.persistence = new MySQLConnection()
    }

    public create = async (user: IUser): Promise<IUser> => {
        const { username, email, password } = user;

        const query = 'INSERT INTO solid_example.users (username, email, password) VALUES (?, ?, ?)';
        const values = [username, email, password];

        const [result] = await this.persistence.connect().execute<ResultSetHeader>(query, values);
        const { insertId: id } = result;

        const newUser: IUser = { id, username, email, password };
        return newUser;
    }
}