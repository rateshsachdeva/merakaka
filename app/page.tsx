'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <main className="flex items-center justify-center min-h-screen bg-black text-white">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Welcome to <span className="text-blue-400">Merakaka</span>!
        </h1>
        <p className="text-lg mb-10">Your AI companion for motherhood support.</p>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          <Link href="/guest-chat">
            <button className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow transition duration-300">
              Chat as Guest
            </button>
          </Link>

          <Link href="/blog">
            <button className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow transition duration-300">
              Visit Blog
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
