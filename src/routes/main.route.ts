import { Router } from "express";

import userRouter from './users.route.ts';
import { authMiddleware } from "../middleware/authJWT.ts";
import LoginController from '../controller/login.controller.ts'

export const router = Router();

// Rotas de usuários
router.use('/users', authMiddleware, userRouter);

// Rotas de login
router.post('/login', LoginController.login);