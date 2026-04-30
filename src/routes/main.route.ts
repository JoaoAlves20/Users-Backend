import { Router } from "express";

import userRouter from './users.route.ts';

export const router = Router();

router.use('/users', userRouter);