import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Research from "./pages/Research";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import BirdAtlas from "./pages/BirdAtlas";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminUsers from "./pages/admin/Users";
import AdminActivities from "./pages/admin/Activities";
import AdminReports from "./pages/admin/Reports";
import ReportDetails from "./pages/admin/ReportDetails";
import ReportEditor from "./pages/admin/ReportEditor";
import AdminSettings from "./pages/admin/Settings";
import AdminAnalytics from "./pages/admin/Analytics";
import VolunteerDashboard from "./pages/volunteer/Dashboard";
import VolunteerActivities from "./pages/volunteer/Activities";
import VolunteerSightings from "./pages/volunteer/Sightings";
import VolunteerReports from "./pages/volunteer/Reports";
import VolunteerTraining from "./pages/volunteer/Training";
import VolunteerProfile from "./pages/volunteer/Profile";
import VolunteerMessages from "./pages/volunteer/Messages";
import VolunteerCalendar from "./pages/volunteer/Calendar";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/research" element={<Research />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bird-atlas" element={<BirdAtlas />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/users" element={
            <ProtectedRoute>
              <AdminUsers />
            </ProtectedRoute>
          } />
          <Route path="/admin/activities" element={
            <ProtectedRoute>
              <AdminActivities />
            </ProtectedRoute>
          } />
          <Route path="/admin/reports" element={
            <ProtectedRoute>
              <AdminReports />
            </ProtectedRoute>
          } />
          <Route path="/admin/reports/:id" element={
            <ProtectedRoute>
              <ReportDetails />
            </ProtectedRoute>
          } />
          <Route path="/admin/reports/:id/edit" element={
            <ProtectedRoute>
              <ReportEditor />
            </ProtectedRoute>
          } />
          <Route path="/admin/reports/new" element={
            <ProtectedRoute>
              <ReportEditor />
            </ProtectedRoute>
          } />
          <Route path="/admin/settings" element={
            <ProtectedRoute>
              <AdminSettings />
            </ProtectedRoute>
          } />
          <Route path="/admin/analytics" element={
            <ProtectedRoute>
              <AdminAnalytics />
            </ProtectedRoute>
          } />
          {/* Volunteer Routes */}
          <Route path="/volunteer/*" element={
            <ProtectedRoute roles={['volunteer', 'admin']}>
              <Routes>
                <Route path="dashboard" element={<VolunteerDashboard />} />
                <Route path="activities" element={<VolunteerActivities />} />
                <Route path="sightings" element={<VolunteerSightings />} />
                <Route path="reports" element={<VolunteerReports />} />
                <Route path="training" element={<VolunteerTraining />} />
                <Route path="profile" element={<VolunteerProfile />} />
                <Route path="messages" element={<VolunteerMessages />} />
                <Route path="calendar" element={<VolunteerCalendar />} />
              </Routes>
            </ProtectedRoute>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
