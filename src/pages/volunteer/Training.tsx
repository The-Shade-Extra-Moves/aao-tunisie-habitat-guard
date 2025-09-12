import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users, CheckCircle, PlayCircle, BookOpen, Award, Star, Trophy, Download } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const navigation = [
  { name: 'Dashboard', href: '/volunteer/dashboard', icon: Calendar, current: false },
  { name: 'Activities', href: '/volunteer/activities', icon: Calendar, current: false },
  { name: 'Sightings', href: '/volunteer/sightings', icon: MapPin, current: false },
  { name: 'Reports', href: '/volunteer/reports', icon: CheckCircle, current: false },
  { name: 'Training', href: '/volunteer/training', icon: Users, current: true },
  { name: 'Profile', href: '/volunteer/profile', icon: Users, current: false },
  { name: 'Messages', href: '/volunteer/messages', icon: Users, current: false },
  { name: 'Calendar', href: '/volunteer/calendar', icon: Users, current: false },
];

const courses = [
  {
    id: 1,
    title: "Bird Identification Basics",
    description: "Learn to identify common Tunisian bird species by sight and sound",
    duration: "2 hours",
    level: "Beginner",
    progress: 85,
    status: "in_progress",
    lessons: 12,
    completedLessons: 10,
    category: "identification"
  },
  {
    id: 2,
    title: "Advanced Field Survey Techniques",
    description: "Master professional bird counting and observation methods",
    duration: "3 hours",
    level: "Advanced",
    progress: 100,
    status: "completed",
    lessons: 15,
    completedLessons: 15,
    category: "methodology"
  },
  {
    id: 3,
    title: "Conservation Action Planning",
    description: "Design effective conservation strategies for local bird populations",
    duration: "1.5 hours",
    level: "Intermediate",
    progress: 40,
    status: "in_progress",
    lessons: 8,
    completedLessons: 3,
    category: "conservation"
  },
  {
    id: 4,
    title: "Photography for Bird Documentation",
    description: "Capture quality photos for scientific bird documentation",
    duration: "2.5 hours",
    level: "Intermediate",
    progress: 0,
    status: "available",
    lessons: 10,
    completedLessons: 0,
    category: "documentation"
  },
  {
    id: 5,
    title: "Habitat Assessment and Monitoring",
    description: "Evaluate and monitor bird habitats for conservation purposes",
    duration: "2 hours",
    level: "Advanced",
    progress: 0,
    status: "locked",
    lessons: 9,
    completedLessons: 0,
    category: "habitat"
  }
];

const achievements = [
  { id: 1, title: "Bird Identification Expert", description: "Completed all identification courses", earned: true, date: "2024-01-15" },
  { id: 2, title: "Field Survey Specialist", description: "Master level in survey techniques", earned: true, date: "2024-02-20" },
  { id: 3, title: "Conservation Champion", description: "Complete conservation training program", earned: false, progress: 60 },
  { id: 4, title: "Documentation Master", description: "Excel in photo documentation skills", earned: false, progress: 0 },
  { id: 5, title: "Habitat Guardian", description: "Complete habitat monitoring certification", earned: false, progress: 0 }
];

export default function VolunteerTraining() {
  const completedCourses = courses.filter(c => c.status === 'completed');
  const inProgressCourses = courses.filter(c => c.status === 'in_progress');
  const availableCourses = courses.filter(c => c.status === 'available');

  return (
    <DashboardLayout title="Training & Development" navigation={navigation}>
      <div className="space-y-6">
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{completedCourses.length}</div>
              <p className="text-xs text-muted-foreground">
                Out of {courses.length} available
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Training Hours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28.5</div>
              <p className="text-xs text-muted-foreground">
                Hours completed
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificates</CardTitle>
              <Award className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">3</div>
              <p className="text-xs text-muted-foreground">
                Earned certificates
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Level</CardTitle>
              <Star className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">Advanced</div>
              <p className="text-xs text-muted-foreground">
                Volunteer level
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            {/* In Progress Courses */}
            {inProgressCourses.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Continue Learning</h3>
                <div className="grid gap-4">
                  {inProgressCourses.map((course) => (
                    <Card key={course.id} className="hover:shadow-md transition-shadow border-blue-200">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                          <div className="space-y-3 flex-1">
                            <div className="flex items-center gap-3">
                              <h4 className="text-lg font-semibold">{course.title}</h4>
                              <Badge variant="secondary">
                                <PlayCircle className="h-3 w-3 mr-1" />
                                In Progress
                              </Badge>
                              <Badge variant="outline">{course.level}</Badge>
                            </div>
                            
                            <p className="text-muted-foreground">{course.description}</p>
                            
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {course.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <BookOpen className="h-4 w-4" />
                                {course.completedLessons}/{course.lessons} lessons
                              </div>
                            </div>

                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Progress</span>
                                <span className="text-muted-foreground">{course.progress}%</span>
                              </div>
                              <Progress value={course.progress} className="h-2" />
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button>
                              <PlayCircle className="h-4 w-4 mr-2" />
                              Continue
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Available Courses */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Available Courses</h3>
              <div className="grid gap-4">
                {availableCourses.map((course) => (
                  <Card key={course.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <h4 className="text-lg font-semibold">{course.title}</h4>
                            <Badge variant="outline">{course.level}</Badge>
                          </div>
                          
                          <p className="text-muted-foreground">{course.description}</p>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {course.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <BookOpen className="h-4 w-4" />
                              {course.lessons} lessons
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button>
                            <PlayCircle className="h-4 w-4 mr-2" />
                            Start Course
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Completed Courses */}
            {completedCourses.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Completed Courses</h3>
                <div className="grid gap-4">
                  {completedCourses.map((course) => (
                    <Card key={course.id} className="hover:shadow-md transition-shadow border-green-200">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <h4 className="text-lg font-semibold">{course.title}</h4>
                              <Badge className="bg-green-100 text-green-800">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Completed
                              </Badge>
                              <Badge variant="outline">{course.level}</Badge>
                            </div>
                            
                            <p className="text-muted-foreground">{course.description}</p>
                            
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {course.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <Award className="h-4 w-4" />
                                Certificate earned
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button variant="outline" size="sm">
                              Review Content
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Certificate
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid gap-4">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className={`hover:shadow-md transition-shadow ${
                  achievement.earned ? 'border-yellow-200 bg-yellow-50/50' : ''
                }`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Trophy className={`h-6 w-6 ${achievement.earned ? 'text-yellow-600' : 'text-muted-foreground'}`} />
                          <h4 className="text-lg font-semibold">{achievement.title}</h4>
                          {achievement.earned ? (
                            <Badge className="bg-yellow-100 text-yellow-800">
                              <Award className="h-3 w-3 mr-1" />
                              Earned
                            </Badge>
                          ) : (
                            <Badge variant="secondary">In Progress</Badge>
                          )}
                        </div>
                        
                        <p className="text-muted-foreground">{achievement.description}</p>
                        
                        {achievement.earned ? (
                          <p className="text-sm text-yellow-700">
                            Earned on {achievement.date}
                          </p>
                        ) : (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Progress</span>
                              <span className="text-muted-foreground">{achievement.progress}%</span>
                            </div>
                            <Progress value={achievement.progress} className="h-2" />
                          </div>
                        )}
                      </div>

                      {achievement.earned && (
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Badge
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            <div className="grid gap-4">
              {completedCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Award className="h-6 w-6 text-yellow-600" />
                          <h4 className="text-lg font-semibold">Certificate: {course.title}</h4>
                          <Badge className="bg-yellow-100 text-yellow-800">Verified</Badge>
                        </div>
                        
                        <p className="text-muted-foreground">
                          Completed {course.level} level training in {course.category.replace('_', ' ')}
                        </p>
                        
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>Issued: February 2024</span>
                          <span>Valid: Lifetime</span>
                          <span>ID: AAO-{course.id}24-FT</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </Button>
                        <Button variant="outline" size="sm">
                          Share
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Learning Path Recommendation */}
        <Card>
          <CardHeader>
            <CardTitle>Recommended Learning Path</CardTitle>
            <CardDescription>Continue your development with these suggested courses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 border rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-medium">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">Complete Photography Course</h4>
                  <p className="text-sm text-muted-foreground">Enhance your documentation skills</p>
                </div>
                <Button size="sm">Start</Button>
              </div>
              
              <div className="flex items-center gap-4 p-4 border rounded-lg opacity-60">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-muted-foreground font-medium">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">Habitat Monitoring</h4>
                  <p className="text-sm text-muted-foreground">Unlocks after photography course</p>
                </div>
                <Button size="sm" disabled>Locked</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}