import SuperAdminLayout from '@/components/SuperAdmin/Layout';
import ProjectsTable from '@/components/SuperAdmin/ProjectTable';

export default function ProjectsPage() {
  return (
    <SuperAdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Project Management</h1>
        <ProjectsTable />
      </div>
    </SuperAdminLayout>
  );
}