import type { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { config } from '../config/server.config.ts';
import UserService from '../service/users.service.ts';

class LoginController {
    async login(request: Request, response: Response) {
        const { email, password } = request.body;

        const user = await UserService.findByEmail(email);

        if (user?.length == 0 || !user) {
            return response.status(401).json({ error: 'Email incorreto' });
        }

        const isPasswordValid = bcrypt.compare(password, user[0].password);

        if (!isPasswordValid) {
            return response.status(401).json({ error: 'Senha incorreta' });
        }

        const token = jwt.sign(
            { id: user[0].id, email: user[0].email },
            config.jwt_secret,
            { expiresIn: '1d' }
        )

        response.status(200).json({ token })
    }
}

export default new LoginController();