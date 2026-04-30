import { createClient } from "@supabase/supabase-js";

import { config } from "../config/server.config.ts";

export const supabase = createClient(config.database.url, config.database.key);