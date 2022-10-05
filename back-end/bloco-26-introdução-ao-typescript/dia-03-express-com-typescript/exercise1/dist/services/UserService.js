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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const restify_errors_1 = require("restify-errors");
const connection_1 = __importDefault(require("../models/connection"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
class UserService {
    constructor() {
        this.model = new UserModel_1.default(connection_1.default);
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.model.getAll();
            return users;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.model.getById(id);
            return user;
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield this.model.create(user);
            return newUser;
        });
    }
    update(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const emailFound = yield this.model.getByEmail(user.email);
            if (emailFound) {
                throw new restify_errors_1.NotFoundError('ValidationError');
            }
            yield this.model.update(id, user);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userFound = yield this.model.getById(id);
            if (!userFound) {
                throw new restify_errors_1.NotFoundError('NotFoundError');
            }
            yield this.model.delete(id);
        });
    }
}
exports.default = UserService;
;
