import SuperAdminLayout from '@/components/SuperAdmin/Layout';
import UsersManagement from '@/components/SuperAdmin/UserManagement';

export default function UsersPage() {
  return (
    <SuperAdminLayout>
      <UsersManagement />
    </SuperAdminLayout>
  );
}