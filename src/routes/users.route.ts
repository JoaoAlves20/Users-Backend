import { Router } from "express";

import UserController from '../controller/user.controller.ts';

const router = Router();

router.get('/', UserController.findAll);

export default router;