import { supabase } from '@/lib/supabase/client';
import { SignUpCredentials, LoginCredentials, PasswordResetData } from '@/types/auth';

export const AuthService = {
  async signUp(credentials: SignUpCredentials) {
    const { data, error } = await supabase.auth.signUp({
      email: credentials.email,
      password: credentials.password,
      options: {
        data: {
          name: credentials.name,
        },
        // Enable email confirmation by OTP
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    });

    if (error) throw error;
    return data;
  },

  async login(credentials: LoginCredentials) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    });

    if (error) throw error;
    return data;
  },

  async sendOtp(email: string) {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        // This determines where users go after clicking magic link
        // For OTP flow, we'll use the verify page
        emailRedirectTo: `${window.location.origin}/verify-otp`,
      },
    });

    if (error) throw error;
    return data;
  },

  async verifyOtp({ email, token }: { email: string; token: string }) {
    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: 'email', // or 'magiclink' if using that flow
    });

    if (error) throw error;
    return data;
  },

  async sendPasswordResetEmail({ email }: PasswordResetData) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`,
    });

    if (error) throw error;
    return data;
  },

  async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async getUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },
};