import { createServerClient } from "@supabase/ssr"
import { env } from "../env"
import { Database } from "./db.types"

export const supabase = createServerClient<Database>(
  env.SUPABASE_URL,
  env.SUPABASE_ANON_KEY,
  {
    cookies: {}
  }
)
