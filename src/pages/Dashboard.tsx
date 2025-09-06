import { useAuth } from '@/hooks/useAuth';
import { AdminDashboard } from '@/components/dashboards/AdminDashboard';
import { VolunteerDashboard } from '@/components/dashboards/VolunteerDashboard';
import { MemberDashboard } from '@/components/dashboards/MemberDashboard';
import { EmployeeDashboard } from '@/components/dashboards/EmployeeDashboard';

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) return null;

  const dashboardComponents = {
    admin: AdminDashboard,
    volunteer: VolunteerDashboard,
    member: MemberDashboard,
    employee: EmployeeDashboard
  };

  const DashboardComponent = dashboardComponents[user.role];

  return <DashboardComponent />;
}