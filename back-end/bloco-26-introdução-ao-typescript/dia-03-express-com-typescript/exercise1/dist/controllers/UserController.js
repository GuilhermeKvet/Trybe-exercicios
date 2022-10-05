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
const UserService_1 = __importDefault(require("../services/UserService"));
class UserController {
    constructor() {
        this.userService = new UserService_1.default();
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.getAll();
            res.status(200).json(users);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const user = yield this.userService.getById(id);
            res.status(200).json(user);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const newUser = yield this.userService.create(req.body);
            res.status(201).json(newUser);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            yield this.userService.update(id, req.body);
            res.status(204).end();
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            yield this.userService.delete(id);
            res.status(200).json({ message: 'Usuário deletado com sucesso!' });
        });
    }
}
exports.default = UserController;
;
