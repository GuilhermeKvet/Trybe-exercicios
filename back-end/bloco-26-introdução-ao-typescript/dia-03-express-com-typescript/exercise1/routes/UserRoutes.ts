import { Router } from "express";
import UserController from "../controllers/UserController";
import validateInputs from "../middlewares/validateInputs";

const router = Router();

const userController = new UserController();

router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);
router.post('/users', validateInputs, userController.create);
router.put('/users/:id', validateInputs, userController.update);

export default router;