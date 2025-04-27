import { createBrowserClient, createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const createClient = () => {
  if (typeof window === 'undefined') {
    const cookieStore = cookies();
    return createServerClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_ANON_KEY || '',
      {
        get(key) {
          const cookie = cookieStore.get(key);
          return cookie?.value ?? null;
        },
        set() {
          // no-op (you can implement if needed)
        },
        remove() {
          // no-op (you can implement if needed)
        },
      }
    );
  } else {
    return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    );
  }
};
