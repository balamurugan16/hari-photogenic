import { createServerClient } from "@supabase/ssr"
import { env } from "../env"
import { Database } from "./db.types"

export const supabase = createServerClient<Database>(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  {
    cookies: {}
  }
)
