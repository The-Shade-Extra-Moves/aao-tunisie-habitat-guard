import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users, CheckCircle, AlertCircle, Plus, Bell, MessageCircle, Award, Eye, Activity, TrendingUp, Target } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { mockActivities, mockSightings, mockReports } from '@/lib/mockData';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Dashboard', href: '/volunteer/dashboard', icon: Activity, current: true },
  { name: 'Activities', href: '/volunteer/activities', icon: Calendar, current: false },
  { name: 'Sightings', href: '/volunteer/sightings', icon: MapPin, current: false },
  { name: 'Reports', href: '/volunteer/reports', icon: CheckCircle, current: false },
  { name: 'Training', href: '/volunteer/training', icon: Users, current: false },
  { name: 'Profile', href: '/volunteer/profile', icon: Users, current: false },
];

export default function VolunteerDashboard() {
  const volunteerActivities = mockActivities.filter(activity => 
    activity.participants.includes('Fatima Trabelsi')
  );
  
  const volunteerSightings = mockSightings.filter(sighting => 
    sighting.observer === 'Fatima Trabelsi'
  );

  const volunteerReports = mockReports.filter(report => 
    report.author === 'Fatima Trabelsi'
  );

  const upcomingActivities = volunteerActivities.filter(activity => activity.status === 'active').slice(0, 3);
  const recentSightings = volunteerSightings.slice(0, 4);
  const pendingSightings = volunteerSightings.filter(s => s.verification === 'pending');
  const verifiedSightings = volunteerSightings.filter(s => s.verification === 'verified');

  return (
    <DashboardLayout title="Volunteer Dashboard" navigation={navigation}>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 rounded-lg border">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Welcome back, Fatima!</h2>
              <p className="text-muted-foreground mt-1">
                You've contributed 142+ hours to bird conservation this year. Keep up the amazing work!
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                3 Notifications
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Activity
              </Button>
            </div>
          </div>
        </div>

        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Activities This Month</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+2</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bird Sightings</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{volunteerSightings.length}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{verifiedSightings.length}</span> verified
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Volunteer Hours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142</div>
              <p className="text-xs text-muted-foreground">
                This year total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Level</CardTitle>
              <Award className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">Expert</div>
              <p className="text-xs text-muted-foreground">
                Level 4 Volunteer
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Activities */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>My Upcoming Activities</CardTitle>
                  <CardDescription>Your registered activities for the next few weeks</CardDescription>
                </div>
                <Link to="/volunteer/activities">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                    <div className="space-y-1">
                      <h4 className="font-medium">{activity.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {activity.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {activity.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-green-600">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Registered
                      </Badge>
                      <Button variant="ghost" size="sm">
                        Details
                      </Button>
                    </div>
                  </div>
                ))}
                {upcomingActivities.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No upcoming activities. Browse available opportunities!</p>
                    <Link to="/volunteer/activities">
                      <Button className="mt-4">Find Activities</Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Progress Tracking */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Goals</CardTitle>
                <CardDescription>Track your conservation impact this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">Activities Goal</span>
                    </div>
                    <span className="text-sm text-muted-foreground">8/10</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4 text-green-600" />
                      <span className="font-medium">Sightings Goal</span>
                    </div>
                    <span className="text-sm text-muted-foreground">12/15</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-purple-600" />
                      <span className="font-medium">Hours Goal</span>
                    </div>
                    <span className="text-sm text-muted-foreground">18/20</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Recent Sightings */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Bird Sightings</CardTitle>
                  <CardDescription>Your latest observations and their verification status</CardDescription>
                </div>
                <Link to="/volunteer/sightings">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentSightings.map((sighting) => (
                    <div key={sighting.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50">
                      <div className="space-y-1">
                        <h4 className="font-medium">{sighting.species}</h4>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{sighting.location}</span>
                          <span>•</span>
                          <span>{sighting.date}</span>
                        </div>
                      </div>
                      <Badge variant={
                        sighting.verification === 'verified' ? 'default' :
                        sighting.verification === 'pending' ? 'secondary' : 'destructive'
                      }>
                        {sighting.verification}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/volunteer/sightings">
                  <Button className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Log Bird Sighting
                  </Button>
                </Link>
                <Link to="/volunteer/reports">
                  <Button variant="outline" className="w-full justify-start">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Submit Report
                  </Button>
                </Link>
                <Link to="/volunteer/activities">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Find Activities
                  </Button>
                </Link>
                <Link to="/volunteer/training">
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Continue Training
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Achievements & Badges */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
                <CardDescription>Your latest earned badges and certifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <Award className="h-8 w-8 text-yellow-600" />
                  <div>
                    <h4 className="font-medium">Expert Observer</h4>
                    <p className="text-sm text-muted-foreground">50+ verified sightings</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <div>
                    <h4 className="font-medium">Survey Specialist</h4>
                    <p className="text-sm text-muted-foreground">Completed advanced training</p>
                  </div>
                </div>

                <Link to="/volunteer/profile">
                  <Button variant="outline" size="sm" className="w-full">
                    View All Achievements
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <Bell className="h-4 w-4 text-blue-600 mt-1" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">New activity available</p>
                      <p className="text-xs text-muted-foreground">Wetland survey at Lac de Tunis - Register now</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Sighting verified</p>
                      <p className="text-xs text-muted-foreground">Your Great Egret observation was confirmed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                    <MessageCircle className="h-4 w-4 text-purple-600 mt-1" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Training reminder</p>
                      <p className="text-xs text-muted-foreground">Complete your conservation module by next week</p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  View All Notifications
                </Button>
              </CardContent>
            </Card>

            {/* Statistics Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Impact Summary</CardTitle>
                <CardDescription>Your contribution to conservation efforts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-green-600">24</div>
                    <p className="text-xs text-muted-foreground">Species Documented</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-blue-600">8</div>
                    <p className="text-xs text-muted-foreground">Reports Published</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-purple-600">3</div>
                    <p className="text-xs text-muted-foreground">Rare Species Found</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-orange-600">142</div>
                    <p className="text-xs text-muted-foreground">Volunteer Hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}