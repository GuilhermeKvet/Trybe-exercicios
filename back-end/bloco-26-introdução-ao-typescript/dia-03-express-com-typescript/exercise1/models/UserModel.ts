import { Pool, ResultSetHeader } from "mysql2/promise";
import User from "../interfaces/UserInterface";

export default class UserModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<User[]> {
    const [rows] = await this.connection.execute('SELECT * FROM users');
    return rows as User[];
  }

  public async getById(id: number): Promise<User> {
    const [rows] = await this.connection.execute(
      'SELECT * FROM users WHERE id = ?',
      [id],
    );
    const [user] = rows as User[];
    return user;
  }

  public async getByEmail(email: string): Promise<string> {
    const [rows] = await this.connection.execute(
      'SELECT * FROM users WHERE email = ?',
      [email],
    );
    const [user] = rows as User[];
    return user.email;
  }

  public async create(user: User): Promise<User> {
    const { name, email, password } = user;
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password],
    );
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }

  public async update(id: number, user: User) {
    const { name, email, password } = user;
    await this.connection.execute(
      'UPDATE users SET name=?, email=?, password=? WHERE id=?',
      [name, email, password, id],
    );
  }

  public async delete(id: number) {
    await this.connection.execute(
      'DELETE FROM users WHERE id=?',
      [id],
    );
  }
};
