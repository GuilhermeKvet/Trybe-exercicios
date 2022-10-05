"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class UserModel {
    constructor(connection) {
        this.connection = connection;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield this.connection.execute('SELECT * FROM users');
            return rows;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield this.connection.execute('SELECT * FROM users WHERE id = ?', [id]);
            const [user] = rows;
            return user;
        });
    }
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield this.connection.execute('SELECT * FROM users WHERE email = ?', [email]);
            const [user] = rows;
            return user.email;
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = user;
            const [dataInserted] = yield this.connection.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
            const { insertId } = dataInserted;
            return Object.assign({ id: insertId }, user);
        });
    }
    update(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = user;
            yield this.connection.execute('UPDATE users SET name=?, email=?, password=? WHERE id=?', [name, email, password, id]);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute('DELETE FROM users WHERE id=?', [id]);
        });
    }
}
exports.default = UserModel;
;
