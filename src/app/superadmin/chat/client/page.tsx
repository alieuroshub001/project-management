'use client';
import ClientChatComponent from '@/components/SuperAdmin/ClientChat';
import SuperAdminLayout from '@/components/SuperAdmin/Layout';

export default function ClientChat() {
  return (
    <SuperAdminLayout>
      <ClientChatComponent/>
    </SuperAdminLayout>
  );
}