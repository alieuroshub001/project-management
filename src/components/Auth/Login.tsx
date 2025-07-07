"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthService } from '@/services/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Modify the handleSubmit function
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  
  try {
    await AuthService.login({ email, password });
    router.push('/superadmin/dashboard');
  } catch (err) {
    setError(err instanceof Error ? err.message : 'Invalid email or password');
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="max-w-md w-full mx-auto p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Log in to your account</h2>
      
      {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div className="flex justify-end">
          <Link href="/forgot-password" className="text-sm text-primary hover:underline">
            Forgot password?
          </Link>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Log in'}
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <span className="text-sm">Don't have an account? </span>
        <Link href="/signup" className="text-primary hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
}