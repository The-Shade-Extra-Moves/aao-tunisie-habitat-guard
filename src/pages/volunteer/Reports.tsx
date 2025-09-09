import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users, CheckCircle, FileText, Plus, Filter, Search, Eye, Edit, Download, Upload } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockReports } from '@/lib/mockData';
import { Progress } from '@/components/ui/progress';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Calendar, current: false },
  { name: 'Activities', href: '/volunteer/activities', icon: Calendar, current: false },
  { name: 'Sightings', href: '/volunteer/sightings', icon: MapPin, current: false },
  { name: 'Reports', href: '/volunteer/reports', icon: CheckCircle, current: true },
  { name: 'Training', href: '/volunteer/training', icon: Users, current: false },
  { name: 'Profile', href: '/volunteer/profile', icon: Users, current: false },
];

export default function VolunteerReports() {
  const volunteerReports = mockReports.filter(report => 
    report.author === 'Fatima Trabelsi'
  );

  const pendingReports = volunteerReports.filter(r => r.status === 'draft');
  const submittedReports = volunteerReports.filter(r => r.status === 'published');
  const reviewReports = volunteerReports.filter(r => r.status === 'under_review');

  return (
    <DashboardLayout title="My Reports" navigation={navigation}>
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="flex flex-col sm:flex-row gap-3 flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search reports..." className="pl-10 w-full sm:w-80" />
            </div>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="field_survey">Field Survey</SelectItem>
                <SelectItem value="species_count">Species Count</SelectItem>
                <SelectItem value="conservation">Conservation</SelectItem>
                <SelectItem value="research">Research</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="under_review">Under Review</SelectItem>
                <SelectItem value="published">Published</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Import Data
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Report
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{volunteerReports.length}</div>
              <p className="text-xs text-muted-foreground">
                All time submissions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Published</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{submittedReports.length}</div>
              <p className="text-xs text-muted-foreground">
                Approved reports
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">In Review</CardTitle>
              <Clock className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{reviewReports.length}</div>
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
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                Reports submitted
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All ({volunteerReports.length})</TabsTrigger>
            <TabsTrigger value="drafts">Drafts ({pendingReports.length})</TabsTrigger>
            <TabsTrigger value="review">In Review ({reviewReports.length})</TabsTrigger>
            <TabsTrigger value="published">Published ({submittedReports.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-4">
              {volunteerReports.map((report) => (
                <Card key={report.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold">{report.title}</h3>
                          <Badge variant={
                            report.status === 'published' ? 'default' :
                            report.status === 'under_review' ? 'secondary' : 'outline'
                          }>
                            {report.status.replace('_', ' ')}
                          </Badge>
                          <Badge variant="outline">
                            {report.type.replace('_', ' ')}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {report.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {report.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {Math.floor(Math.random() * 100)} views
                          </div>
                        </div>

                        <p className="text-muted-foreground line-clamp-2">{report.summary}</p>

                        {report.status === 'draft' && (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Completion</span>
                              <span className="text-muted-foreground">65%</span>
                            </div>
                            <Progress value={65} className="h-2" />
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        {report.status !== 'published' && (
                          <Button size="sm">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                        )}
                        {report.status === 'published' && (
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="drafts" className="space-y-4">
            <div className="grid gap-4">
              {pendingReports.map((report) => (
                <Card key={report.id} className="hover:shadow-md transition-shadow border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold">{report.title}</h3>
                          <Badge variant="outline">Draft</Badge>
                        </div>
                        
                        <p className="text-muted-foreground">Continue working on your report to submit for review.</p>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Completion</span>
                            <span className="text-muted-foreground">65%</span>
                          </div>
                          <Progress value={65} className="h-2" />
                        </div>

                        <div className="text-sm text-blue-700 bg-blue-50 p-2 rounded">
                          <strong>Next steps:</strong> Add species observations, upload photos, and complete summary section.
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button size="sm">
                          <Edit className="h-4 w-4 mr-2" />
                          Continue Editing
                        </Button>
                        <Button variant="outline" size="sm">
                          Save Template
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="review" className="space-y-4">
            <div className="grid gap-4">
              {reviewReports.map((report) => (
                <Card key={report.id} className="hover:shadow-md transition-shadow border-yellow-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold">{report.title}</h3>
                          <Badge variant="secondary">
                            <Clock className="h-3 w-3 mr-1" />
                            Under Review
                          </Badge>
                        </div>
                        
                        <div className="text-sm text-yellow-700 bg-yellow-50 p-2 rounded">
                          Your report is being reviewed by our scientific committee. Review typically takes 3-5 business days.
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            Submitted: {report.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {report.location}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                        <Button variant="outline" size="sm">
                          Withdraw
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="published" className="space-y-4">
            <div className="grid gap-4">
              {submittedReports.map((report) => (
                <Card key={report.id} className="hover:shadow-md transition-shadow border-green-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold">{report.title}</h3>
                          <Badge className="bg-green-100 text-green-800">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Published
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            Published: {report.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {Math.floor(Math.random() * 500)} views
                          </div>
                          <div className="flex items-center gap-1">
                            <Download className="h-4 w-4" />
                            {Math.floor(Math.random() * 50)} downloads
                          </div>
                        </div>

                        <p className="text-muted-foreground line-clamp-2">{report.summary}</p>

                        <div className="text-sm text-green-700 bg-green-50 p-2 rounded">
                          <strong>Impact:</strong> Your report contributed to our {new Date().getFullYear()} bird census data and helped identify conservation priorities.
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View Public
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Report Templates */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Start Templates</CardTitle>
            <CardDescription>Use these templates to create reports faster</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 hover:bg-muted cursor-pointer">
                <h4 className="font-medium">Field Survey Report</h4>
                <p className="text-sm text-muted-foreground mt-1">Standard template for field observations</p>
              </div>
              <div className="border rounded-lg p-4 hover:bg-muted cursor-pointer">
                <h4 className="font-medium">Species Count Report</h4>
                <p className="text-sm text-muted-foreground mt-1">Detailed species abundance data</p>
              </div>
              <div className="border rounded-lg p-4 hover:bg-muted cursor-pointer">
                <h4 className="font-medium">Conservation Activity</h4>
                <p className="text-sm text-muted-foreground mt-1">Report conservation efforts and impact</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}