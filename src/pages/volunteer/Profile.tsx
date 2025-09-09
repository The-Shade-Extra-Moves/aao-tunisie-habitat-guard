import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, MapPin, Clock, Users, CheckCircle, Edit, Camera, Save, Star, Trophy, Award, Mail, Phone, Globe } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/hooks/useAuth';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Calendar, current: false },
  { name: 'Activities', href: '/volunteer/activities', icon: Calendar, current: false },
  { name: 'Sightings', href: '/volunteer/sightings', icon: MapPin, current: false },
  { name: 'Reports', href: '/volunteer/reports', icon: CheckCircle, current: false },
  { name: 'Training', href: '/volunteer/training', icon: Users, current: false },
  { name: 'Profile', href: '/volunteer/profile', icon: Users, current: true },
];

const skills = [
  { name: 'Bird Identification', level: 95, category: 'expertise' },
  { name: 'Field Survey Methods', level: 88, category: 'methodology' },
  { name: 'Photography', level: 72, category: 'documentation' },
  { name: 'Habitat Assessment', level: 65, category: 'conservation' },
  { name: 'Data Recording', level: 91, category: 'technical' },
  { name: 'Public Speaking', level: 43, category: 'communication' }
];

const badges = [
  { id: 1, name: 'Species Expert', description: '100+ species identified', earned: true, rarity: 'gold' },
  { id: 2, name: 'Survey Master', description: '50+ field surveys completed', earned: true, rarity: 'silver' },
  { id: 3, name: 'Photo Pro', description: 'Quality photo documentation', earned: true, rarity: 'bronze' },
  { id: 4, name: 'Night Owl', description: 'Nocturnal bird specialist', earned: false, rarity: 'gold' },
  { id: 5, name: 'Team Leader', description: 'Led 10+ volunteer groups', earned: false, rarity: 'silver' },
  { id: 6, name: 'Conservation Hero', description: 'Significant conservation impact', earned: false, rarity: 'gold' }
];

export default function VolunteerProfile() {
  const { user } = useAuth();

  return (
    <DashboardLayout title="My Profile" navigation={navigation}>
      <div className="space-y-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="edit">Edit Profile</TabsTrigger>
            <TabsTrigger value="skills">Skills & Badges</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Profile Header */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col items-center space-y-4">
                    <Avatar className="w-32 h-32">
                      <AvatarImage src={user?.avatar} alt={user?.name} />
                      <AvatarFallback className="text-2xl">{user?.name?.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">
                      <Camera className="h-4 w-4 mr-2" />
                      Change Photo
                    </Button>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold">{user?.name}</h2>
                      <p className="text-muted-foreground">Advanced Volunteer • Level 3</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-100 text-blue-800">Bird Expert</Badge>
                      <Badge className="bg-green-100 text-green-800">Survey Specialist</Badge>
                      <Badge className="bg-purple-100 text-purple-800">Photo Documentation</Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Member since {user?.joinDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>Tunis, Tunisia</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-muted-foreground" />
                        <span>142 volunteer hours</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">
                      Passionate bird enthusiast with over 3 years of experience in field surveys and conservation activities. 
                      Specialized in wetland birds and migration patterns. Enjoys mentoring new volunteers and contributing 
                      to citizen science projects.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Activities</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">47</div>
                  <p className="text-xs text-muted-foreground">
                    Participated this year
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sightings</CardTitle>
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">256</div>
                  <p className="text-xs text-muted-foreground">
                    Birds documented
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Species</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">89</div>
                  <p className="text-xs text-muted-foreground">
                    Unique species found
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Rank</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">#3</div>
                  <p className="text-xs text-muted-foreground">
                    Among volunteers
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest contributions and achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 pb-4 border-b last:border-b-0">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Completed Bird Survey Training</p>
                      <p className="text-sm text-muted-foreground">Earned advanced certification</p>
                      <p className="text-xs text-muted-foreground">2 days ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 pb-4 border-b last:border-b-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Rare Sighting Verified</p>
                      <p className="text-sm text-muted-foreground">Purple Heron at Lac de Tunis confirmed</p>
                      <p className="text-xs text-muted-foreground">1 week ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 pb-4 border-b last:border-b-0">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Trophy className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Achievement Unlocked</p>
                      <p className="text-sm text-muted-foreground">Earned "Species Expert" badge</p>
                      <p className="text-xs text-muted-foreground">2 weeks ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="edit" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your profile information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Fatima" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Trabelsi" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={user?.email} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+216 20 123 456" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="Tunis, Tunisia" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea 
                    id="bio" 
                    rows={4}
                    defaultValue="Passionate bird enthusiast with over 3 years of experience in field surveys and conservation activities. Specialized in wetland birds and migration patterns. Enjoys mentoring new volunteers and contributing to citizen science projects."
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="interests">Specializations</Label>
                  <Input id="interests" defaultValue="Wetland birds, Migration patterns, Photography" />
                </div>
                
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Preferences</CardTitle>
                <CardDescription>How you'd like to be contacted</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive updates about activities and reports</p>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">SMS Alerts</p>
                      <p className="text-sm text-muted-foreground">Emergency notifications and reminders</p>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Skills & Expertise</CardTitle>
                <CardDescription>Your proficiency levels in different areas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card>
              <CardHeader>
                <CardTitle>Badges & Achievements</CardTitle>
                <CardDescription>Recognition for your contributions and expertise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {badges.map((badge) => (
                    <div 
                      key={badge.id} 
                      className={`flex items-center gap-4 p-4 border rounded-lg ${
                        badge.earned ? 'bg-yellow-50 border-yellow-200' : 'opacity-60'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        badge.rarity === 'gold' ? 'bg-yellow-100' :
                        badge.rarity === 'silver' ? 'bg-gray-100' : 'bg-orange-100'
                      }`}>
                        <Award className={`h-6 w-6 ${
                          badge.rarity === 'gold' ? 'text-yellow-600' :
                          badge.rarity === 'silver' ? 'text-gray-600' : 'text-orange-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{badge.name}</h4>
                        <p className="text-sm text-muted-foreground">{badge.description}</p>
                        {badge.earned ? (
                          <Badge className="mt-1 bg-yellow-100 text-yellow-800">Earned</Badge>
                        ) : (
                          <Badge variant="secondary" className="mt-1">Locked</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences and privacy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Profile Visibility</p>
                      <p className="text-sm text-muted-foreground">Control who can see your profile information</p>
                    </div>
                    <Button variant="outline" size="sm">Public</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Activity Tracking</p>
                      <p className="text-sm text-muted-foreground">Allow tracking of your volunteer activities</p>
                    </div>
                    <Button variant="outline" size="sm">Enabled</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Data Export</p>
                      <p className="text-sm text-muted-foreground">Download your personal data and contributions</p>
                    </div>
                    <Button variant="outline" size="sm">Request</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security</CardTitle>
                <CardDescription>Protect your account with these security options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Change Password</p>
                    <p className="text-sm text-muted-foreground">Update your account password</p>
                  </div>
                  <Button variant="outline" size="sm">Change</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <Button variant="outline" size="sm">Enable</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Danger Zone</CardTitle>
                <CardDescription>Irreversible account actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg">
                  <div>
                    <p className="font-medium text-red-700">Delete Account</p>
                    <p className="text-sm text-red-600">Permanently delete your account and all data</p>
                  </div>
                  <Button variant="destructive" size="sm">Delete</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}