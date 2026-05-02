import { supabase } from "../schema/supabase.ts";

import type { user_create, user_update } from '../dtos/user.types.ts';

class UserService {
    async findAll() {
        const { data, error } = await supabase.from('users').select();

        if (error) {
            console.error('DEU RUIM', error);
            return null;
        }

        return data;
    }

    async findById(id: string) {
        const { data, error } = await supabase.from('users').select().eq('id', id);

        if (error) {
            console.error('DEU RUIM', error);
            return null;
        }

        return data;
    }

    async findByEmail(email: string) {
        const { data, error } = await supabase.from('users').select().eq('email', email);

        if (error) {
            console.error('DEU RUIM', error);
            return null;
        }

        return data;
    }

    async create(user: user_create) {
        const { error, success } = await supabase.from('users').insert(user);

        if (error) {
            console.error('DEU RUIM', error);
            return null;
        }

        return success;
    }

    async update(id: string, user: user_update) {
        const {
            error, success
        } = await supabase.from('users').update(user).eq('id', id);

        if (error) {
            console.error('DEU RUIM', error);
            return null;
        }

        return success;
    }

    async delete(id: string) {
        const { success, error } = await supabase.from('users').delete().eq('id', id);

        if (error) {
            console.error('DEU RUIM', error);
            return null;
        }

        return success;
    }
}

export default new UserService();