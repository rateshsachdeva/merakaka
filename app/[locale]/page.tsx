'use client';

import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  const handleGoogleLogin = async () => {
    await signIn('google', { callbackUrl: '/' });
    if (rememberMe) {
      localStorage.setItem('rememberMe', 'true');
    }
  };

  const handleEmailLogin = async () => {
    await signIn('email', { callbackUrl: '/' });
    if (rememberMe) {
      localStorage.setItem('rememberMe', 'true');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-extrabold mb-8">Login to Merakaka</h1>

      <button
        onClick={handleGoogleLogin}
        className="w-full max-w-xs px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow transition duration-300 mb-4"
      >
        Sign in with Google
      </button>

      <button
        onClick={handleEmailLogin}
        className="w-full max-w-xs px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow transition duration-300 mb-4"
      >
        Sign in with Email
      </button>

      <div className="flex items-center space-x-2 mt-4">
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
          className="h-5 w-5"
        />
        <label htmlFor="rememberMe" className="text-white">
          Remember Me
        </label>
      </div>
    </main>
  );
}
