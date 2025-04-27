'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleGoogleLogin = async () => {
    await signIn('google');
    if (rememberMe) {
      localStorage.setItem('rememberMe', 'true');
    }
  };

  const handleEmailLogin = async () => {
    await signIn('email');
    if (rememberMe) {
      localStorage.setItem('rememberMe', 'true');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Login to Merakaka</h1>

      <button
        onClick={handleGoogleLogin}
        className="px-6 py-3 bg-blue-500 text-white rounded-md mb-4"
      >
        Sign in with Google
      </button>

      <button
        onClick={handleEmailLogin}
        className="px-6 py-3 bg-green-500 text-white rounded-md mb-4"
      >
        Sign in with Email
      </button>

      <div className="flex items-center space-x-2 mt-4">
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        <label htmlFor="rememberMe" className="text-gray-700">
          Remember Me
        </label>
      </div>

      <Link href="/">
        <p className="text-sm text-blue-500 mt-4">← Back to Home</p>
      </Link>
    </main>
  );
}
