import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to Merakaka!</h1>
      <div className="space-y-4">
        <Link href="/login">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow">Login</button>
        </Link>
        <Link href="/guest-chat">
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow">Chat as Guest</button>
        </Link>
        <Link href="/blog">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow">Visit Blog</button>
        </Link>
      </div>
    </main>
  );
}
