import { Router } from "express";

import UserController from '../controller/user.controller.ts';

const router = Router();

// Rotas de usuários
router.get('/', UserController.findAll);
router.get('/:id', UserController.findById);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;