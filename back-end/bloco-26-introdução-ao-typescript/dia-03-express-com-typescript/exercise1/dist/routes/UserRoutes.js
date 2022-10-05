"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const validateInputs_1 = __importDefault(require("../middlewares/validateInputs"));
const router = (0, express_1.Router)();
const userController = new UserController_1.default();
router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);
router.post('/users', validateInputs_1.default, userController.create);
router.put('/users/:id', validateInputs_1.default, userController.update);
exports.default = router;
