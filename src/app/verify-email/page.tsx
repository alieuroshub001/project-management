import AuthLayout from '@/components/Auth/Global';
import OtpVerification from '@/components/Auth/Otp';

export default function OtpPage() {
  return (
    <AuthLayout>
      <OtpVerification />
    </AuthLayout>
  );
}