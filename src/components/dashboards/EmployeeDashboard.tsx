import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { mockReports, mockSightings, mockActivities } from '@/lib/mockData';
import { 
  FileText, 
  Database,
  BarChart3,
  Calendar,
  Users,
  MapPin,
  Search,
  Upload,
  CheckCircle,
  Clock,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';

const navigation = [
  { name: 'Tableau de Bord', href: '/dashboard', icon: BarChart3, current: true },
  { name: 'Données', href: '/employee/data', icon: Database },
  { name: 'Recherche', href: '/employee/research', icon: Search },
  { name: 'Rapports', href: '/employee/reports', icon: FileText },
  { name: 'Coordination', href: '/employee/coordination', icon: Users },
];

export function EmployeeDashboard() {
  const myReports = mockReports.filter(r => r.author === 'Leila Khouja');
  const pendingSightings = mockSightings.filter(s => !s.verified);

  return (
    <DashboardLayout title="Espace Employé" navigation={navigation}>
      <div className="space-y-8">
        {/* Work Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Données à Traiter</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-orange-600">12</span> en attente
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rapports ce Mois</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-600">+3</span> par rapport au mois dernier
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Projets Coordonnés</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-blue-600">2</span> actifs
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taux de Validation</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94%</div>
              <p className="text-xs text-muted-foreground">
                Ce mois
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList>
            <TabsTrigger value="dashboard">Tableau de Bord</TabsTrigger>
            <TabsTrigger value="data">Gestion des Données</TabsTrigger>
            <TabsTrigger value="research">Recherche</TabsTrigger>
            <TabsTrigger value="coordination">Coordination</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Tâches Prioritaires</CardTitle>
                  <CardDescription>À traiter en priorité</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 border rounded-lg border-orange-200 bg-orange-50">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Validation observations cigognes</p>
                        <p className="text-sm text-muted-foreground">12 observations en attente</p>
                      </div>
                      <Badge variant="outline" className="border-orange-500 text-orange-700">
                        Urgent
                      </Badge>
                    </div>

                    <div className="flex items-center space-x-4 p-3 border rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Rapport mensuel février</p>
                        <p className="text-sm text-muted-foreground">Échéance: 5 mars</p>
                      </div>
                      <Badge variant="secondary">
                        En cours
                      </Badge>
                    </div>

                    <div className="flex items-center space-x-4 p-3 border rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Analyse données baguage</p>
                        <p className="text-sm text-muted-foreground">Station Kuriat</p>
                      </div>
                      <Badge variant="outline">
                        Planifié
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Statistiques de Travail</CardTitle>
                  <CardDescription>Performance ce mois</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Données traitées</span>
                      <span>47/50</span>
                    </div>
                    <Progress value={94} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Rapports complétés</span>
                      <span>8/10</span>
                    </div>
                    <Progress value={80} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Projets coordonnés</span>
                      <span>5/6</span>
                    </div>
                    <Progress value={83} />
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-sm font-medium">Performance globale</span>
                    <Badge variant="default">Excellente</Badge>
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
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="font-medium text-sm">Rapport "Étude migration cigognes" publié</p>
                        <p className="text-xs text-muted-foreground">Il y a 2 heures</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Voir</Button>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Database className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-sm">15 observations validées</p>
                        <p className="text-xs text-muted-foreground">Hier</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Détails</Button>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-purple-500" />
                      <div>
                        <p className="font-medium text-sm">Réunion de coordination projet Ichkeul</p>
                        <p className="text-xs text-muted-foreground">Il y a 3 jours</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Résumé</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="data" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Gestion des Données</h3>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Importer
                </Button>
                <Button>
                  <Database className="mr-2 h-4 w-4" />
                  Nouvelle Entrée
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Observations en Attente de Validation</CardTitle>
                <CardDescription>
                  {pendingSightings.length} observations nécessitent votre attention
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Espèce</TableHead>
                      <TableHead>Observateur</TableHead>
                      <TableHead>Lieu</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingSightings.map((sighting) => (
                      <TableRow key={sighting.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{sighting.species}</p>
                            <p className="text-sm text-muted-foreground italic">{sighting.scientificName}</p>
                          </div>
                        </TableCell>
                        <TableCell>{sighting.observer}</TableCell>
                        <TableCell>{sighting.location}</TableCell>
                        <TableCell>{new Date(sighting.date).toLocaleDateString('fr-FR')}</TableCell>
                        <TableCell>{sighting.count}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <CheckCircle className="mr-1 h-3 w-3" />
                              Valider
                            </Button>
                            <Button size="sm" variant="outline">
                              Voir
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

          <TabsContent value="research" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Projets de Recherche</h3>
              <Button>
                <Search className="mr-2 h-4 w-4" />
                Nouveau Projet
              </Button>
            </div>

            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Étude Migration des Cigognes 2024
                    <Badge variant="secondary">En cours</Badge>
                  </CardTitle>
                  <CardDescription>
                    Suivi des routes migratoires et des sites d'escale
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progression</span>
                        <span>68%</span>
                      </div>
                      <Progress value={68} />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold">156</p>
                        <p className="text-sm text-muted-foreground">Observations</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold">23</p>
                        <p className="text-sm text-muted-foreground">Sites suivis</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold">12</p>
                        <p className="text-sm text-muted-foreground">Collaborateurs</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Prochaine échéance: Rapport intermédiaire (15 mars)
                      </span>
                      <Button variant="outline" size="sm">
                        Voir Détails
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Impact du Changement Climatique sur les Zones Humides
                    <Badge variant="outline">Planifié</Badge>
                  </CardTitle>
                  <CardDescription>
                    Analyse des effets du réchauffement sur les écosystèmes aquatiques
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium">Début prévu</p>
                        <p className="text-sm text-muted-foreground">Avril 2024</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Durée</p>
                        <p className="text-sm text-muted-foreground">18 mois</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        En attente de financement
                      </span>
                      <Button variant="outline" size="sm">
                        Préparer
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="coordination" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Coordination des Activités</h3>
              <Button>
                <Calendar className="mr-2 h-4 w-4" />
                Planifier
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
                      <div className="flex items-center space-x-2">
                        <Badge variant={
                          activity.status === 'completed' ? 'default' :
                          activity.status === 'ongoing' ? 'secondary' : 'outline'
                        }>
                          {activity.status === 'completed' ? 'Terminé' :
                           activity.status === 'ongoing' ? 'En cours' : 'Planifié'}
                        </Badge>
                        {activity.coordinator === 'Leila Khouja' && (
                          <Badge variant="default">Coordinatrice</Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{activity.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {activity.participants} participants
                        </span>
                        <span>Coordinateur: {activity.coordinator}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Gérer
                        </Button>
                        <Button variant="outline" size="sm">
                          Rapport
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