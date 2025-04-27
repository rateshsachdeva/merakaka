import { createBrowserClient, createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const createClient = () => {
  if (typeof window === 'undefined') {
    return createServerClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_ANON_KEY || '',
      {
        cookies: cookies()  // ✅ CALL cookies() here
      }
    );
  } else {
    return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    );
  }
};
