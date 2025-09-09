import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users, CheckCircle, AlertCircle, Plus, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockActivities } from '@/lib/mockData';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Calendar, current: false },
  { name: 'Activities', href: '/volunteer/activities', icon: Calendar, current: true },
  { name: 'Sightings', href: '/volunteer/sightings', icon: MapPin, current: false },
  { name: 'Reports', href: '/volunteer/reports', icon: CheckCircle, current: false },
  { name: 'Training', href: '/volunteer/training', icon: Users, current: false },
  { name: 'Profile', href: '/volunteer/profile', icon: Users, current: false },
];

export default function VolunteerActivities() {
  const volunteerActivities = mockActivities.filter(activity => 
    activity.participants.includes('Fatima Trabelsi')
  );
  
  const upcomingActivities = volunteerActivities.filter(activity => activity.status === 'active');
  const completedActivities = volunteerActivities.filter(activity => activity.status === 'completed');

  return (
    <DashboardLayout title="My Activities" navigation={navigation}>
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="flex flex-col sm:flex-row gap-3 flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search activities..." className="pl-10 w-full sm:w-80" />
            </div>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="field_survey">Field Survey</SelectItem>
                <SelectItem value="conservation">Conservation</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="research">Research</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Request Activity
          </Button>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upcoming">Upcoming ({upcomingActivities.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedActivities.length})</TabsTrigger>
            <TabsTrigger value="all">All Activities ({volunteerActivities.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            <div className="grid gap-4">
              {upcomingActivities.map((activity) => (
                <Card key={activity.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold">{activity.title}</h3>
                          <Badge variant={activity.type === 'field_survey' ? 'default' : 'secondary'}>
                            {activity.type.replace('_', ' ')}
                          </Badge>
                          <Badge variant="outline" className="text-green-600">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Registered
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {activity.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {activity.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {activity.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {activity.participants.length} participants
                          </div>
                        </div>

                        <p className="text-muted-foreground">{activity.description}</p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm">
                          Submit Report
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            <div className="grid gap-4">
              {completedActivities.map((activity) => (
                <Card key={activity.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold">{activity.title}</h3>
                          <Badge variant="secondary">
                            {activity.type.replace('_', ' ')}
                          </Badge>
                          <Badge className="bg-green-100 text-green-800">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Completed
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {activity.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {activity.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {activity.participants.length} participants
                          </div>
                        </div>

                        <p className="text-muted-foreground">{activity.description}</p>

                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-green-600 font-medium">Report submitted</span>
                          <span className="text-muted-foreground">• 2 species recorded</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm">
                          View Report
                        </Button>
                        <Button variant="outline" size="sm">
                          Certificate
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-4">
              {volunteerActivities.map((activity) => (
                <Card key={activity.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold">{activity.title}</h3>
                          <Badge variant={activity.type === 'field_survey' ? 'default' : 'secondary'}>
                            {activity.type.replace('_', ' ')}
                          </Badge>
                          <Badge variant={activity.status === 'completed' ? 'default' : 'outline'}>
                            {activity.status}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {activity.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {activity.location}
                          </div>
                        </div>

                        <p className="text-muted-foreground">{activity.description}</p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                Activities participated
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142</div>
              <p className="text-xs text-muted-foreground">
                Volunteer hours logged
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Impact</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                Species documented
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}