import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
        import.meta.env.VITE_SUPABASE_URL,
        import.meta.env.VITE_SUPABASE_KEY,
        // import.meta.env.SERVICE_ROLE_KEY

    
        // process.env.VITE_SUPABASE_URL,
        // process.env.SERVICE_ROLE_KEY
   
      )

    // console.log(import.meta.env.SUPER_SECRET_KEY)


