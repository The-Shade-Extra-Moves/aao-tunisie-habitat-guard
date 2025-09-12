import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { mockStats, mockActivities, mockMembers } from '@/lib/mockData';
import { 
  BarChart3,
  Users,
  Activity,
  FileText,
  Settings,
  TrendingUp,
  TrendingDown,
  Eye,
  Target,
  Calendar,
  MapPin,
  Bird,
  TreePine,
  Droplets,
  Shield
} from 'lucide-react';

const navigation = [
  { name: 'Tableau de bord', href: '/dashboard', icon: BarChart3, current: true },
  { name: 'Utilisateurs', href: '/admin/users', icon: Users },
  { name: 'Activités', href: '/admin/activities', icon: Activity },
  { name: 'Rapports', href: '/admin/reports', icon: FileText },
  { name: 'Paramètres', href: '/admin/settings', icon: Settings },
];

export default function AdminAnalytics() {
  const currentYear = new Date().getFullYear();
  const lastYear = currentYear - 1;

  // Calculs de performance
  const memberGrowth = ((mockStats.totalMembers - 1100) / 1100) * 100;
  const activitiesCompleted = mockActivities.filter(a => a.status === 'completed').length;
  const activitiesPlanned = mockActivities.filter(a => a.status === 'planned').length;
  const completionRate = (activitiesCompleted / mockActivities.length) * 100;

  return (
    <DashboardLayout title="Analyses et Statistiques" navigation={navigation}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Analyses</h2>
            <p className="text-muted-foreground">
              Indicateurs de performance et tendances de l'association
            </p>
          </div>
          <Select defaultValue="2024">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* KPIs Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Croissance Membres</CardTitle>
              <TrendingUp className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{memberGrowth.toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground">
                +{mockStats.totalMembers - 1100} nouveaux membres cette année
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taux de Completion</CardTitle>
              <Target className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completionRate.toFixed(0)}%</div>
              <p className="text-xs text-muted-foreground">
                {activitiesCompleted} activités terminées sur {mockActivities.length}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Engagement</CardTitle>
              <Eye className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">
                Taux de participation aux activités
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Impact Conservation</CardTitle>
              <Shield className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">
                Sites protégés cette année
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="members">Membres</TabsTrigger>
            <TabsTrigger value="activities">Activités</TabsTrigger>
            <TabsTrigger value="conservation">Conservation</TabsTrigger>
            <TabsTrigger value="research">Recherche</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Performance Globale {currentYear}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Objectif Membres</span>
                      <span>{mockStats.totalMembers}/1500</span>
                    </div>
                    <Progress value={(mockStats.totalMembers/1500)*100} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Projets de Conservation</span>
                      <span>{mockStats.conservationProjects}/30</span>
                    </div>
                    <Progress value={(mockStats.conservationProjects/30)*100} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Programmes Éducatifs</span>
                      <span>{mockStats.educationPrograms}/15</span>
                    </div>
                    <Progress value={(mockStats.educationPrograms/15)*100} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Espèces Documentées</span>
                      <span>{mockStats.birdSpecies}/500</span>
                    </div>
                    <Progress value={(mockStats.birdSpecies/500)*100} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Comparaison Annuelle</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Nouveaux membres</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{mockStats.totalMembers - 1100}</span>
                      <TrendingUp className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm text-emerald-600">+12%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Activités réalisées</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{activitiesCompleted}</span>
                      <TrendingUp className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm text-emerald-600">+8%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sites protégés</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{mockStats.protectedSites}</span>
                      <TrendingUp className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm text-emerald-600">+15%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Budget utilisé</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">82%</span>
                      <TrendingDown className="h-4 w-4 text-orange-600" />
                      <span className="text-sm text-orange-600">-3%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Top Activités</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockActivities.slice(0, 3).map((activity, index) => (
                      <div key={activity.id} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{activity.title}</p>
                          <p className="text-xs text-muted-foreground">{activity.participants} participants</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Répartition par Rôle</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Membres</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="w-3/4 h-full bg-blue-600"></div>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {mockMembers.filter(m => m.role === 'member').length}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Bénévoles</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="w-1/2 h-full bg-emerald-600"></div>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {mockMembers.filter(m => m.role === 'volunteer').length}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Employés</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="w-1/4 h-full bg-purple-600"></div>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {mockMembers.filter(m => m.role === 'employee').length}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Prochains Objectifs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5"></div>
                      <div>
                        <p className="text-sm font-medium">1500 membres</p>
                        <p className="text-xs text-muted-foreground">D'ici fin 2024</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5"></div>
                      <div>
                        <p className="text-sm font-medium">30 sites protégés</p>
                        <p className="text-xs text-muted-foreground">Objectif 2024</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-600 mt-1.5"></div>
                      <div>
                        <p className="text-sm font-medium">Atlas complet</p>
                        <p className="text-xs text-muted-foreground">500 espèces</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Members Tab */}
          <TabsContent value="members" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Évolution des Membres</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Janvier</span>
                      <span>1,100</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-[88%] h-full bg-blue-600"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Mars</span>
                      <span>1,180</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-[94%] h-full bg-blue-600"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Juin</span>
                      <span>{mockStats.totalMembers}</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-full h-full bg-blue-600"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rétention des Membres</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600">94%</div>
                    <p className="text-sm text-muted-foreground">Taux de rétention annuel</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Nouveaux membres actifs</span>
                      <span className="font-medium">87%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Renouvellement d'adhésion</span>
                      <span className="font-medium">94%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Participation aux activités</span>
                      <span className="font-medium">78%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Démographie des Membres</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h4 className="text-sm font-medium mb-3">Par Âge</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>18-30 ans</span>
                        <span>23%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>31-50 ans</span>
                        <span>45%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>51+ ans</span>
                        <span>32%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-3">Par Région</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Tunis</span>
                        <span>40%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Sfax</span>
                        <span>18%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Autres</span>
                        <span>42%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-3">Niveau d'Engagement</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Très actif</span>
                        <span>28%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Modéré</span>
                        <span>50%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Occasionnel</span>
                        <span>22%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activities Tab */}
          <TabsContent value="activities" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Performance des Activités</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{completionRate.toFixed(0)}%</div>
                    <p className="text-sm text-muted-foreground">Taux de réalisation</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Terminées</span>
                      <Badge variant="default">{activitiesCompleted}</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>En cours</span>
                      <Badge variant="secondary">
                        {mockActivities.filter(a => a.status === 'ongoing').length}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Planifiées</span>
                      <Badge variant="outline">{activitiesPlanned}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Participation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">
                      {Math.round(mockActivities.reduce((sum, a) => sum + a.participants.length, 0) / mockActivities.length)}
                    </div>
                    <p className="text-sm text-muted-foreground">Participants moyens</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Total participants</span>
                      <span className="font-medium">
                        {mockActivities.reduce((sum, a) => sum + a.participants.length, 0)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Taux de présence</span>
                      <span className="font-medium">89%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Satisfaction</span>
                      <span className="font-medium">4.6/5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Types d'Activités</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm flex items-center gap-2">
                      <Bird className="h-4 w-4" />
                      Observations
                    </span>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm flex items-center gap-2">
                      <TreePine className="h-4 w-4" />
                      Conservation
                    </span>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Éducation
                    </span>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Activités par Mois</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'].map((month, index) => (
                    <div key={month} className="flex items-center gap-4">
                      <div className="w-20 text-sm">{month}</div>
                      <div className="flex-1">
                        <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-600 to-emerald-600" 
                            style={{ width: `${Math.random() * 60 + 40}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-8 text-sm text-right">{Math.floor(Math.random() * 15 + 5)}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Conservation Tab */}
          <TabsContent value="conservation" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Sites Protégés</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockStats.protectedSites}</div>
                  <p className="text-xs text-muted-foreground">+2 cette année</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Espèces Surveillées</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">87</div>
                  <p className="text-xs text-muted-foreground">Espèces en suivi</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Hectares Préservés</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,340</div>
                  <p className="text-xs text-muted-foreground">Superficie totale</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Projets Actifs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockStats.conservationProjects}</div>
                  <p className="text-xs text-muted-foreground">En cours</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Impact par Écosystème</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm flex items-center gap-2">
                        <Droplets className="h-4 w-4 text-blue-600" />
                        Zones humides
                      </span>
                      <span className="font-medium">12 sites</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm flex items-center gap-2">
                        <TreePine className="h-4 w-4 text-emerald-600" />
                        Forêts
                      </span>
                      <span className="font-medium">8 sites</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-orange-600" />
                        Côtier
                      </span>
                      <span className="font-medium">5 sites</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Espèces Prioritaires</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">Flamant rose</p>
                        <p className="text-xs text-muted-foreground">Phoenicopterus roseus</p>
                      </div>
                      <Badge variant="outline">Surveillée</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">Ibis chauve</p>
                        <p className="text-xs text-muted-foreground">Geronticus eremita</p>
                      </div>
                      <Badge variant="destructive">Critique</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">Sarcelle marbrée</p>
                        <p className="text-xs text-muted-foreground">Marmaronetta angustirostris</p>
                      </div>
                      <Badge variant="secondary">Vulnérable</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Évolution de la Biodiversité</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-medium mb-3">Tendances Espèces</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Population stable</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 bg-emerald-200 rounded-full">
                            <div className="w-3/4 h-full bg-emerald-600 rounded-full"></div>
                          </div>
                          <span className="text-xs">75%</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm">En augmentation</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 bg-blue-200 rounded-full">
                            <div className="w-1/5 h-full bg-blue-600 rounded-full"></div>
                          </div>
                          <span className="text-xs">20%</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm">En déclin</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 bg-red-200 rounded-full">
                            <div className="w-1/20 h-full bg-red-600 rounded-full"></div>
                          </div>
                          <span className="text-xs">5%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-3">Succès de Conservation</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Projets réussis</span>
                        <span className="font-medium text-emerald-600">92%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Habitats restaurés</span>
                        <span className="font-medium">340 ha</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Espèces réintroduites</span>
                        <span className="font-medium">3 espèces</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Research Tab */}
          <TabsContent value="research" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Publications Scientifiques</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-sm text-muted-foreground">Publications cette année</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Articles peer-reviewed</span>
                      <span className="font-medium">18</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Conférences</span>
                      <span className="font-medium">6</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Index H moyen</span>
                      <span className="font-medium">12.4</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Projets de Recherche</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-sm text-muted-foreground">Projets actifs</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Financés</span>
                      <span className="font-medium">6</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Collaborations int.</span>
                      <span className="font-medium">4</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Étudiants impliqués</span>
                      <span className="font-medium">15</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Base de Données</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{mockStats.annualSightings.toLocaleString()}</div>
                    <p className="text-sm text-muted-foreground">Observations enregistrées</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Espèces documentées</span>
                      <span className="font-medium">{mockStats.birdSpecies}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Photos stockées</span>
                      <span className="font-medium">12,450</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Données GPS</span>
                      <span className="font-medium">8,920 points</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Domaines de Recherche</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Migration des oiseaux</span>
                      <span className="text-sm font-medium">35%</span>
                    </div>
                    <Progress value={35} className="h-1.5" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Écologie des zones humides</span>
                      <span className="text-sm font-medium">28%</span>
                    </div>
                    <Progress value={28} className="h-1.5" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Changement climatique</span>
                      <span className="text-sm font-medium">22%</span>
                    </div>
                    <Progress value={22} className="h-1.5" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Conservation ex-situ</span>
                      <span className="text-sm font-medium">15%</span>
                    </div>
                    <Progress value={15} className="h-1.5" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Collaborations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">Université de Tunis</p>
                        <p className="text-xs text-muted-foreground">3 projets communs</p>
                      </div>
                      <Badge variant="outline">Actif</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">BirdLife International</p>
                        <p className="text-xs text-muted-foreground">Réseau global</p>
                      </div>
                      <Badge variant="default">Partenaire</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">IUCN Afrique du Nord</p>
                        <p className="text-xs text-muted-foreground">Conservation régionale</p>
                      </div>
                      <Badge variant="secondary">Membre</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">CNRS France</p>
                        <p className="text-xs text-muted-foreground">Recherche migration</p>
                      </div>
                      <Badge variant="outline">Collaborateur</Badge>
                    </div>
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