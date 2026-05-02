import { Router } from "express";

import UserController from '../controller/user.controller.ts';
import { authorize } from "../middleware/authorize.ts";

const router = Router();

// Rotas de usuários
router.get('/', UserController.findAll);
router.get('/:id', UserController.findById);
router.post('/', authorize(['ADMIN']), UserController.create);
router.put('/:id', authorize(['ADMIN']), UserController.update);
router.delete('/:id', authorize(['ADMIN']), UserController.delete);

export default router;