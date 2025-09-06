import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockStats, mockActivities, mockMembers, mockReports } from '@/lib/mockData';
import { 
  Users, 
  Activity, 
  FileText, 
  Settings, 
  BarChart3, 
  UserPlus,
  Calendar,
  MapPin,
  Eye,
  Download,
  TrendingUp,
  Bird,
  Shield
} from 'lucide-react';

const navigation = [
  { name: 'Tableau de bord', href: '/dashboard', icon: BarChart3, current: true },
  { name: 'Utilisateurs', href: '/admin/users', icon: Users },
  { name: 'Activités', href: '/admin/activities', icon: Activity },
  { name: 'Rapports', href: '/admin/reports', icon: FileText },
  { name: 'Paramètres', href: '/admin/settings', icon: Settings },
];

export function AdminDashboard() {
  return (
    <DashboardLayout title="Administration" navigation={navigation}>
      <div className="space-y-8">
        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Membres</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.totalMembers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-600">+12%</span> ce mois
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bénévoles Actifs</CardTitle>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.activeVolunteers}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-600">+5</span> nouveaux
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Projets en Cours</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.ongoingProjects}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-blue-600">3</span> nouveaux ce mois
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sites Protégés</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.protectedSites}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-600">+2</span> ajoutés
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="users">Gestion Utilisateurs</TabsTrigger>
            <TabsTrigger value="activities">Activités</TabsTrigger>
            <TabsTrigger value="reports">Rapports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Statistiques Clés
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Espèces d'oiseaux recensées</span>
                    <span className="font-bold">{mockStats.birdSpecies}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Observations annuelles</span>
                    <span className="font-bold">{mockStats.annualSightings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Projets de conservation</span>
                    <span className="font-bold">{mockStats.conservationProjects}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Programmes éducatifs</span>
                    <span className="font-bold">{mockStats.educationPrograms}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Activités Récentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockActivities.slice(0, 3).map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {activity.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {activity.location} • {activity.participants} participants
                          </p>
                        </div>
                        <Badge variant={
                          activity.status === 'completed' ? 'default' :
                          activity.status === 'ongoing' ? 'secondary' : 'outline'
                        }>
                          {activity.status === 'completed' ? 'Terminé' :
                           activity.status === 'ongoing' ? 'En cours' : 'Planifié'}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Gestion des Utilisateurs</h3>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Nouvel Utilisateur
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="space-y-4 p-6">
                  {mockMembers.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-muted-foreground">{member.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant={member.role === 'admin' ? 'default' : 'secondary'}>
                          {member.role === 'admin' ? 'Admin' :
                           member.role === 'employee' ? 'Employé' :
                           member.role === 'volunteer' ? 'Bénévole' : 'Membre'}
                        </Badge>
                        <Badge variant={member.status === 'active' ? 'default' : 'outline'}>
                          {member.status === 'active' ? 'Actif' : 'Inactif'}
                        </Badge>
                        <Button variant="outline" size="sm">
                          Modifier
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activities" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Activités</h3>
              <Button>
                <Calendar className="mr-2 h-4 w-4" />
                Nouvelle Activité
              </Button>
            </div>

            <div className="grid gap-4">
              {mockActivities.map((activity) => (
                <Card key={activity.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{activity.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-2">
                          <MapPin className="h-4 w-4" />
                          {activity.location} • {new Date(activity.date).toLocaleDateString('fr-FR')}
                        </CardDescription>
                      </div>
                      <Badge variant={
                        activity.status === 'completed' ? 'default' :
                        activity.status === 'ongoing' ? 'secondary' : 'outline'
                      }>
                        {activity.status === 'completed' ? 'Terminé' :
                         activity.status === 'ongoing' ? 'En cours' : 'Planifié'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{activity.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">
                        <strong>{activity.participants}</strong> participants • 
                        Coordinateur: <strong>{activity.coordinator}</strong>
                      </span>
                      <Button variant="outline" size="sm">
                        Voir Détails
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Rapports</h3>
              <Button>
                <FileText className="mr-2 h-4 w-4" />
                Nouveau Rapport
              </Button>
            </div>

            <div className="grid gap-4">
              {mockReports.map((report) => (
                <Card key={report.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{report.title}</CardTitle>
                        <CardDescription>
                          Par {report.author} • {new Date(report.date).toLocaleDateString('fr-FR')}
                        </CardDescription>
                      </div>
                      <Badge variant={
                        report.status === 'published' ? 'default' :
                        report.status === 'review' ? 'secondary' : 'outline'
                      }>
                        {report.status === 'published' ? 'Publié' :
                         report.status === 'review' ? 'En révision' : 'Brouillon'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {report.views} vues
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          {report.downloads} téléchargements
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Modifier
                        </Button>
                        <Button variant="outline" size="sm">
                          Voir
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