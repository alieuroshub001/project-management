'use client';
import AdminXChatComponent from '@/components/SuperAdmin/AdminXChat';
import SuperAdminLayout from '@/components/SuperAdmin/Layout';

export default function AdminXChat() {
  return (
    <SuperAdminLayout>
      <AdminXChatComponent />
    </SuperAdminLayout>
  );
}