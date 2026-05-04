import { supabase } from "../schema/supabase.ts";

import type { user_create, user_update } from '../dtos/user.types.ts';

class UserService {
    async findAll() {
        const { data, error } = await supabase.from('users').select();

        if (error) {
            console.error('DEU RUIM no FindAll', error);
            return null;
        }

        return data;
    }

    async findById(id: string) {
        const { data, error } = await supabase.from('users').select().eq('id', id);

        if (error) {
            console.error('DEU RUIM no FindById', error);
            return null;
        }

        return data;
    }

    async search(username: string) {
        const { data, error } = await supabase.from('users').select().eq('username', username);

        if (error) {
            console.error('DEU RUIM no Search', error);
            return null;
        }

        return data;
    }

    async findByEmail(email: string) {
        const { data, error } = await supabase.from('users').select().eq('email', email);

        if (error) {
            console.error('DEU RUIM no FindByEmail', error);
            return null;
        }

        return data;
    }

    async create(user: user_create) {
        const { error, success } = await supabase.from('users').insert(user);

        if (error) {
            console.error('DEU RUIM no create', error);
            return null;
        }

        return success;
    }

    async update(id: string, user: user_update) {
        const {
            error, success
        } = await supabase.from('users').update(user).eq('id', id);

        if (error) {
            console.error('DEU RUIM no update', error);
            return null;
        }

        return success;
    }

    async delete(id: string) {
        const { success, error } = await supabase.from('users').delete().eq('id', id);

        if (error) {
            console.error('DEU RUIM no delete', error);
            return null;
        }

        return success;
    }
}

export default new UserService();