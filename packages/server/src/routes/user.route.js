import { Router } from "express";
import { userController } from "../controllers/user.controller.js";

const router = Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/logout', userController.logoutUser);
router.post('/refresh', userController.refreshToken);

export { router as userRouter };
