import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { AdminDashboard } from '@/components/dashboards/AdminDashboard';
import { MemberDashboard } from '@/components/dashboards/MemberDashboard';
import { EmployeeDashboard } from '@/components/dashboards/EmployeeDashboard';

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) return null;

  if (user?.role === 'volunteer') {
    // Redirect to volunteer dashboard
    return <Navigate to="/volunteer/dashboard" replace />;
  }

  const dashboardComponents = {
    admin: AdminDashboard,
    member: MemberDashboard,
    employee: EmployeeDashboard
  };

  const DashboardComponent = dashboardComponents[user.role];

  return <DashboardComponent />;
}