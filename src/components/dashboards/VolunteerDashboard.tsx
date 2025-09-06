import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockActivities, mockSightings } from '@/lib/mockData';
import { 
  Calendar, 
  MapPin, 
  Camera,
  FileText,
  Award,
  Clock,
  Users,
  Bird,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const navigation = [
  { name: 'Mon Tableau de Bord', href: '/dashboard', icon: Calendar, current: true },
  { name: 'Mes Activités', href: '/volunteer/activities', icon: Calendar },
  { name: 'Observations', href: '/volunteer/sightings', icon: Bird },
  { name: 'Mes Rapports', href: '/volunteer/reports', icon: FileText },
  { name: 'Formation', href: '/volunteer/training', icon: Award },
];

export function VolunteerDashboard() {
  const myActivities = mockActivities.filter(a => a.coordinator === 'Fatima Trabelsi');
  const mySightings = mockSightings.filter(s => s.observer === 'Fatima Trabelsi');

  return (
    <DashboardLayout title="Espace Bénévole" navigation={navigation}>
      <div className="space-y-8">
        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Activités ce Mois</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-600">+2</span> par rapport au mois dernier
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Observations</CardTitle>
              <Bird className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">34</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-600">+12</span> ce mois
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Heures Bénévolat</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156h</div>
              <p className="text-xs text-muted-foreground">
                Cette année
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Niveau</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Expert</div>
              <Progress value={75} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList>
            <TabsTrigger value="dashboard">Tableau de Bord</TabsTrigger>
            <TabsTrigger value="activities">Mes Activités</TabsTrigger>
            <TabsTrigger value="sightings">Observations</TabsTrigger>
            <TabsTrigger value="achievements">Réalisations</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Prochaines Activités</CardTitle>
                  <CardDescription>Vos activités programmées</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockActivities.filter(a => a.status === 'planned').slice(0, 3).map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-4 p-3 border rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">{activity.title}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {activity.location}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(activity.date).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          S'inscrire
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mes Statistiques</CardTitle>
                  <CardDescription>Progression et contributions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Objectif mensuel observations</span>
                      <span>12/15</span>
                    </div>
                    <Progress value={80} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Formation continue</span>
                      <span>3/4 modules</span>
                    </div>
                    <Progress value={75} />
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-sm font-medium">Rang cette année</span>
                    <Badge variant="secondary">#8 sur 89</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Activités Récentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {myActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.status === 'completed' ? 'bg-green-500' :
                          activity.status === 'ongoing' ? 'bg-blue-500' : 'bg-gray-400'
                        }`} />
                        <div>
                          <p className="font-medium text-sm">{activity.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {activity.location} • {new Date(activity.date).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={
                          activity.status === 'completed' ? 'default' :
                          activity.status === 'ongoing' ? 'secondary' : 'outline'
                        }>
                          {activity.status === 'completed' ? 'Terminé' :
                           activity.status === 'ongoing' ? 'En cours' : 'Planifié'}
                        </Badge>
                        <Button size="sm" variant="ghost">
                          Voir
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
              <h3 className="text-lg font-medium">Mes Activités</h3>
              <Button>
                <Calendar className="mr-2 h-4 w-4" />
                Voir Calendrier
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
                      <span className="text-sm flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {activity.participants} participants
                      </span>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Rapport
                        </Button>
                        <Button size="sm">
                          Détails
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sightings" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Mes Observations</h3>
              <Button>
                <Camera className="mr-2 h-4 w-4" />
                Nouvelle Observation
              </Button>
            </div>

            <div className="grid gap-4">
              {mySightings.map((sighting) => (
                <Card key={sighting.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {sighting.species}
                          {sighting.verified ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-yellow-500" />
                          )}
                        </CardTitle>
                        <CardDescription className="italic">
                          {sighting.scientificName}
                        </CardDescription>
                      </div>
                      <Badge variant={sighting.verified ? 'default' : 'outline'}>
                        {sighting.verified ? 'Vérifiée' : 'En attente'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {sighting.location}
                        </span>
                        <span>{new Date(sighting.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      
                      {sighting.notes && (
                        <p className="text-sm text-muted-foreground">{sighting.notes}</p>
                      )}
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          Nombre: <strong>{sighting.count}</strong>
                        </span>
                        <div className="flex space-x-2">
                          {sighting.photos.length > 0 && (
                            <Button variant="outline" size="sm">
                              <Camera className="mr-1 h-3 w-3" />
                              Photos
                            </Button>
                          )}
                          <Button variant="outline" size="sm">
                            Modifier
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-4">
            <h3 className="text-lg font-medium">Mes Réalisations</h3>
            
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    Badges Obtenus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                        <Bird className="h-6 w-6 text-blue-600" />
                      </div>
                      <p className="text-xs font-medium">Observer Expert</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <p className="text-xs font-medium">100 Observations</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                        <Users className="h-6 w-6 text-purple-600" />
                      </div>
                      <p className="text-xs font-medium">Mentor</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contributions Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm">Espèces découvertes</span>
                    <span className="font-bold">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Données validées</span>
                    <span className="font-bold">89</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Formations données</span>
                    <span className="font-bold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Nouveaux bénévoles formés</span>
                    <span className="font-bold">5</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}