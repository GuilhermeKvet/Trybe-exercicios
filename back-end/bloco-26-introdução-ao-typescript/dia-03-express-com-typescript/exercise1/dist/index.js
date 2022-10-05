"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const error_1 = __importDefault(require("./middlewares/error"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.status(200).send('Express + TypeScript');
});
app.use(UserRoutes_1.default);
// middleware de erro, sempre no final!
app.use(error_1.default);
module.exports = app;
