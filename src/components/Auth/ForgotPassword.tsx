"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');
    
    try {
      // Replace with actual password reset logic
      console.log('Sending reset link to:', email);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('Password reset link sent to your email');
    } catch (err) {
      setError('Error sending reset link. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
      
      {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>}
      {message && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">{message}</div>}
      
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
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <Link href="/login" className="text-primary hover:underline">
          Back to login
        </Link>
      </div>
    </div>
  );
}