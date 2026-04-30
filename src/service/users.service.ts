import { supabase } from "../schema/supabase.ts";

class UserService {
    async findAll() {
        const { data, error } = await supabase.from('users').select();

        if (error) {
            console.error('DEU RUIM', error);
            return null;
        }

        return data;
    }
}

export default new UserService();