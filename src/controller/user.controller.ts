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

    async findById(request: Request, response: Response) {
        const { id } = request.params;
        
        const data = await UserService.findById(id as string);

        if (!data) {
            return response.status(404).json({ error: 'User not found' });
        }

        response.status(200).json(data);
    }

    async create(request: Request, response: Response) {
        const user_create = request.body;

        if (!user_create.username || !user_create.email || !user_create.password) {
            return response.status(400).json({ error: 'username, password and email is requireds' });
        }

        const success = await UserService.create(user_create);

        if (!success) {
            return response.status(400).json({ error: 'error in created user' });
        }

        response.status(201).json({ success: 'created user' });
    }

    async update(request: Request, response: Response) {
        const body_updated = request.body;
        const { id } = request.params;

        if (!body_updated) {
            return response.status(400).json({ error: 'needed of body to update user' });
        }

        const success = await UserService.update(id as string, body_updated);

        if (!success) {
            return response.status(400).json({ error: 'error in updated user' });
        }

        response.status(200).json({ success: 'updated user' });
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        const success = await UserService.delete(id as string);

        if (!success) {
            return response.status(400).json({ error: 'error in deleted user' });
        }

        response.status(200).json({ success: 'deleted user' });
    }
}

export default new UserController();