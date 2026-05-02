import type { Request, Response, NextFunction } from "express";

export const authorize = (roles: string[]) => {
    return (request: Request, response: Response, next: NextFunction) => {
        const { userRole } = request;

        if (!roles.includes(userRole)) {
            return response.status(403).json({ error: 'Acesso negado: permissão insuficiente' });
        }

        next();
    }
}