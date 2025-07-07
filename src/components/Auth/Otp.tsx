"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function OtpVerification() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const router = useRouter();

  const handleChange = (index: number, value: string) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const fullOtp = otp.join('');
      if (fullOtp.length !== 6) {
        throw new Error('Please enter a 6-digit code');
      }
      
      // Replace with actual OTP verification logic
      console.log('Verifying OTP:', fullOtp);
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid verification code');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = () => {
    setResendDisabled(true);
    setCountdown(30);
    
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    // Replace with actual resend logic
    console.log('Resending OTP');
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Verify your email</h2>
      
      <p className="text-center mb-6">We've sent a 6-digit code to your email</p>
      
      {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-between gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 text-center border rounded focus:border-primary focus:ring-1 focus:ring-primary"
              maxLength={1}
              inputMode="numeric"
              autoFocus={index === 0}
            />
          ))}
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition disabled:opacity-50"
        >
          {loading ? 'Verifying...' : 'Verify'}
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <button
          onClick={handleResend}
          disabled={resendDisabled}
          className="text-primary hover:underline disabled:text-gray-400"
        >
          {resendDisabled ? `Resend code in ${countdown}s` : 'Resend code'}
        </button>
      </div>
    </div>
  );
}