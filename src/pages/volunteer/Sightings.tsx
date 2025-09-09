import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users, CheckCircle, Camera, Plus, Filter, Search, Eye, Edit, Trash2, Download } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockSightings } from '@/lib/mockData';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Calendar, current: false },
  { name: 'Activities', href: '/volunteer/activities', icon: Calendar, current: false },
  { name: 'Sightings', href: '/volunteer/sightings', icon: MapPin, current: true },
  { name: 'Reports', href: '/volunteer/reports', icon: CheckCircle, current: false },
  { name: 'Training', href: '/volunteer/training', icon: Users, current: false },
  { name: 'Profile', href: '/volunteer/profile', icon: Users, current: false },
];

export default function VolunteerSightings() {
  const volunteerSightings = mockSightings.filter(sighting => 
    sighting.observer === 'Fatima Trabelsi'
  );

  const pendingSightings = volunteerSightings.filter(s => s.verification === 'pending');
  const verifiedSightings = volunteerSightings.filter(s => s.verification === 'verified');
  const rejectedSightings = volunteerSightings.filter(s => s.verification === 'rejected');

  return (
    <DashboardLayout title="My Bird Sightings" navigation={navigation}>
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="flex flex-col sm:flex-row gap-3 flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search species, location..." className="pl-10 w-full sm:w-80" />
            </div>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="verified">Verified</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Species type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Species</SelectItem>
                <SelectItem value="rare">Rare</SelectItem>
                <SelectItem value="common">Common</SelectItem>
                <SelectItem value="endangered">Endangered</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Sighting
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sightings</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{volunteerSightings.length}</div>
              <p className="text-xs text-muted-foreground">
                All time records
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Verified</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{verifiedSightings.length}</div>
              <p className="text-xs text-muted-foreground">
                Confirmed sightings
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{pendingSightings.length}</div>
              <p className="text-xs text-muted-foreground">
                Under review
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                New sightings
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All ({volunteerSightings.length})</TabsTrigger>
            <TabsTrigger value="verified">Verified ({verifiedSightings.length})</TabsTrigger>
            <TabsTrigger value="pending">Pending ({pendingSightings.length})</TabsTrigger>
            <TabsTrigger value="rejected">Rejected ({rejectedSightings.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>All Sightings</CardTitle>
                <CardDescription>Complete record of your bird observations</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Species</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Count</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Photos</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {volunteerSightings.map((sighting) => (
                      <TableRow key={sighting.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{sighting.species}</div>
                            <div className="text-sm text-muted-foreground italic">{sighting.scientificName}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {sighting.location}
                          </div>
                        </TableCell>
                        <TableCell>{sighting.date}</TableCell>
                        <TableCell>{sighting.count}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={
                              sighting.verification === 'verified' ? 'default' :
                              sighting.verification === 'pending' ? 'secondary' : 'destructive'
                            }
                          >
                            {sighting.verification}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Camera className="h-3 w-3" />
                            {sighting.photos?.length || 0}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="verified" className="space-y-4">
            <div className="grid gap-4">
              {verifiedSightings.map((sighting) => (
                <Card key={sighting.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold">{sighting.species}</h3>
                          <Badge className="bg-green-100 text-green-800">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                          {sighting.rarity === 'rare' && (
                            <Badge variant="secondary">Rare Species</Badge>
                          )}
                        </div>
                        
                        <p className="text-sm text-muted-foreground italic">{sighting.scientificName}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {sighting.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {sighting.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            Count: {sighting.count}
                          </div>
                          {sighting.photos && (
                            <div className="flex items-center gap-1">
                              <Camera className="h-4 w-4" />
                              {sighting.photos.length} photos
                            </div>
                          )}
                        </div>

                        {sighting.notes && (
                          <p className="text-sm text-muted-foreground bg-muted p-2 rounded">
                            {sighting.notes}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Camera className="h-4 w-4 mr-2" />
                          Photos
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            <div className="grid gap-4">
              {pendingSightings.map((sighting) => (
                <Card key={sighting.id} className="hover:shadow-md transition-shadow border-yellow-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold">{sighting.species}</h3>
                          <Badge variant="secondary">
                            <Clock className="h-3 w-3 mr-1" />
                            Pending Review
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-muted-foreground italic">{sighting.scientificName}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {sighting.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {sighting.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            Count: {sighting.count}
                          </div>
                        </div>

                        <div className="text-sm text-yellow-700 bg-yellow-50 p-2 rounded">
                          Your sighting is being reviewed by our experts. This usually takes 1-3 business days.
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rejected" className="space-y-4">
            <div className="grid gap-4">
              {rejectedSightings.map((sighting) => (
                <Card key={sighting.id} className="hover:shadow-md transition-shadow border-red-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold">{sighting.species}</h3>
                          <Badge variant="destructive">
                            Needs Review
                          </Badge>
                        </div>
                        
                        <div className="text-sm text-red-700 bg-red-50 p-2 rounded">
                          <strong>Reviewer feedback:</strong> Additional information or better photo quality needed for verification. Please check the identification guide and resubmit.
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button size="sm">
                          <Edit className="h-4 w-4 mr-2" />
                          Resubmit
                        </Button>
                        <Button variant="outline" size="sm">
                          View Feedback
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}