import {createClient, SupabaseClient} from '@supabase/supabase-js'
import {Database} from "../../lib/database.types";

const supabaseUrl: string | undefined = process.env.REACT_APP_SUPABASE_URL
const supabaseKey: string | undefined = process.env.REACT_APP_SUPABASE_KEY

export const supabase: () => SupabaseClient<Database> = () => {
    if(! (supabaseUrl || supabaseKey)) {
        throw new Error('Unable to create Supabase Client. Url or Key is undefined.')
    }

    return createClient<Database>(supabaseUrl as string, supabaseKey as string)
}
