import type { RequestHandler } from "express";
import jwt from 'jsonwebtoken';

import { config } from "../config/server.config.ts";
import type { TokenPayLoad } from "../dtos/user.types.ts";

export const authMiddleware: RequestHandler = (request, response, next) => {
    const { authorization } = request.headers;

    if (!authorization) {
        return response.status(401).json({ error: 'Token não fornecido' });
    }

    const parts = authorization.split(' ');

    if (parts.length !== 2) {
        return response.status(401).json({ error: 'Token mal formatado' });
    }

    const [scheme, token] = parts;

    if (scheme !== 'Bearer') {
        return response.status(401).json({ error: 'Formato inválido' });
    }
    
    if (!token) {
        return response.status(401).json({ error: 'Token inválido' });
    }

    try {
        const data = jwt.verify(token, config.jwt_secret);
        const { id, role } = data as TokenPayLoad;

        request.userId = id;
        request.userRole = role;

        next();
    } catch (error) {
        console.error('DEU RUIM no TOKEN', error);
        return response.status(401).json({ error: 'Token inválido ou expirado' });
    }
}