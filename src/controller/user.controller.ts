import type { Request, Response } from 'express';

import UserService from '../service/users.service.ts';

class UserController {
    async findAll(_: Request, response: Response) {
        const data = await UserService.findAll();

        if (!data) {
            return response.status(404).json({ error: 'Users not found' });
        }

        response.status(200).json(data);
    }
}

export default new UserController();