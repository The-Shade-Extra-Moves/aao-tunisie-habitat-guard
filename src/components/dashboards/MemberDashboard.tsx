import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockActivities, mockSightings } from '@/lib/mockData';
import { 
  Calendar, 
  Bird,
  Camera,
  BookOpen,
  Users,
  MapPin,
  Heart,
  Gift,
  Star,
  Trophy
} from 'lucide-react';

const navigation = [
  { name: 'Mon Espace', href: '/dashboard', icon: Heart, current: true },
  { name: 'Événements', href: '/member/events', icon: Calendar },
  { name: 'Observations', href: '/member/sightings', icon: Bird },
  { name: 'Apprentissage', href: '/member/learning', icon: BookOpen },
  { name: 'Communauté', href: '/member/community', icon: Users },
];

export function MemberDashboard() {
  const upcomingEvents = mockActivities.filter(a => a.status === 'planned').slice(0, 3);
  const mySightings = mockSightings.filter(s => s.observer === 'Youssef Mansouri');

  return (
    <DashboardLayout title="Espace Membre" navigation={navigation}>
      <div className="space-y-8">
        {/* Welcome Section */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              Bienvenue dans votre espace membre
            </CardTitle>
            <CardDescription className="text-base">
              Découvrez, apprenez et contribuez à la protection des oiseaux de Tunisie
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button>
                <Calendar className="mr-2 h-4 w-4" />
                Prochains Événements
              </Button>
              <Button variant="outline">
                <Camera className="mr-2 h-4 w-4" />
                Signaler une Observation
              </Button>
              <Button variant="outline">
                <BookOpen className="mr-2 h-4 w-4" />
                Cours en Ligne
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Mes Observations</CardTitle>
              <Bird className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">34</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-600">+5</span> ce mois
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Événements Suivis</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                Cette année
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Points Impact</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,250</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-600">+120</span> ce mois
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Niveau</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Passionné</div>
              <Progress value={65} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="events">Événements</TabsTrigger>
            <TabsTrigger value="observations">Mes Observations</TabsTrigger>
            <TabsTrigger value="learning">Apprentissage</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Prochains Événements</CardTitle>
                  <CardDescription>Ne manquez pas ces opportunités</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="flex items-start space-x-4 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">{event.title}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {event.location}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(event.date).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                        <Button size="sm">
                          S'inscrire
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mes Dernières Observations</CardTitle>
                  <CardDescription>Vos contributions récentes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mySightings.slice(0, 3).map((sighting) => (
                      <div key={sighting.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Bird className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-sm">{sighting.species}</p>
                            <p className="text-xs text-muted-foreground">
                              {sighting.location} • {new Date(sighting.date).toLocaleDateString('fr-FR')}
                            </p>
                          </div>
                        </div>
                        <Badge variant={sighting.verified ? 'default' : 'outline'}>
                          {sighting.verified ? 'Validée' : 'En cours'}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Votre Progression</CardTitle>
                <CardDescription>Continuez à contribuer pour débloquer de nouveaux niveaux</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Vers le niveau "Expert"</span>
                      <span>1,250 / 2,000 points</span>
                    </div>
                    <Progress value={62.5} />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <Bird className="h-6 w-6 text-green-600" />
                      </div>
                      <p className="text-xs font-medium">Observer</p>
                      <p className="text-xs text-muted-foreground">Débloqué</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <Camera className="h-6 w-6 text-blue-600" />
                      </div>
                      <p className="text-xs font-medium">Photographe</p>
                      <p className="text-xs text-muted-foreground">Débloqué</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <Trophy className="h-6 w-6 text-gray-400" />
                      </div>
                      <p className="text-xs font-medium">Expert</p>
                      <p className="text-xs text-muted-foreground">750 pts restants</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Événements Disponibles</h3>
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Voir Calendrier
              </Button>
            </div>

            <div className="grid gap-4">
              {mockActivities.map((event) => (
                <Card key={event.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-2">
                          <MapPin className="h-4 w-4" />
                          {event.location} • {new Date(event.date).toLocaleDateString('fr-FR')}
                        </CardDescription>
                      </div>
                      <Badge variant={event.type === 'education' ? 'secondary' : 'outline'}>
                        {event.type === 'observation' ? 'Observation' :
                         event.type === 'conservation' ? 'Conservation' :
                         event.type === 'education' ? 'Formation' : 'Recherche'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {event.participants} participants inscrits
                      </span>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Détails
                        </Button>
                        {event.status === 'planned' && (
                          <Button size="sm">
                            S'inscrire
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="observations" className="space-y-4">
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
                        <CardTitle className="text-lg">{sighting.species}</CardTitle>
                        <CardDescription className="italic">
                          {sighting.scientificName}
                        </CardDescription>
                      </div>
                      <Badge variant={sighting.verified ? 'default' : 'outline'}>
                        {sighting.verified ? 'Validée' : 'En cours de validation'}
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
                        <p className="text-sm text-muted-foreground bg-muted/50 p-2 rounded">
                          {sighting.notes}
                        </p>
                      )}
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          Nombre observé: <strong>{sighting.count}</strong>
                        </span>
                        <div className="flex space-x-2">
                          {sighting.photos.length > 0 && (
                            <Button variant="outline" size="sm">
                              <Camera className="mr-1 h-3 w-3" />
                              Voir Photos
                            </Button>
                          )}
                          <Button variant="outline" size="sm">
                            Partager
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="learning" className="space-y-4">
            <h3 className="text-lg font-medium">Ressources d'Apprentissage</h3>
            
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Cours Recommandés
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium text-sm">Identification des Rapaces</h4>
                    <p className="text-xs text-muted-foreground">Apprenez à identifier les différentes espèces de rapaces</p>
                    <div className="flex justify-between items-center mt-2">
                      <Progress value={30} className="flex-1 mr-2" />
                      <span className="text-xs">30%</span>
                    </div>
                  </div>
                  
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium text-sm">Écologie des Zones Humides</h4>
                    <p className="text-xs text-muted-foreground">Comprendre les écosystèmes aquatiques</p>
                    <Button size="sm" variant="outline" className="w-full mt-2">
                      Commencer
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="h-5 w-5" />
                    Récompenses Disponibles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium text-sm">Guide d'identification AAO</h4>
                    <p className="text-xs text-muted-foreground">500 points requis</p>
                    <Button size="sm" className="w-full mt-2" disabled>
                      Bientôt disponible
                    </Button>
                  </div>
                  
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium text-sm">Sortie VIP avec les experts</h4>
                    <p className="text-xs text-muted-foreground">1000 points requis</p>
                    <Button size="sm" className="w-full mt-2">
                      Échanger (1,250 pts)
                    </Button>
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