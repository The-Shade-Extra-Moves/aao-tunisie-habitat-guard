import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockReports } from '@/lib/mockData';
import { 
  ArrowLeft,
  Edit,
  Download,
  Share2,
  Eye,
  Calendar,
  User,
  FileText,
  BarChart3,
  Users,
  Activity,
  Settings,
  TrendingUp,
  Clock,
  Target,
  CheckCircle,
  AlertCircle,
  Star,
  MessageSquare,
  Bookmark,
  MoreHorizontal
} from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const navigation = [
  { name: 'Tableau de bord', href: '/dashboard', icon: BarChart3 },
  { name: 'Utilisateurs', href: '/admin/users', icon: Users },
  { name: 'Activités', href: '/admin/activities', icon: Activity },
  { name: 'Rapports', href: '/admin/reports', icon: FileText, current: true },
  { name: 'Paramètres', href: '/admin/settings', icon: Settings },
];

export default function ReportDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Find the report (in real app, this would be an API call)
  const report = mockReports.find(r => r.id === id);

  if (!report) {
    return (
      <DashboardLayout title="Rapport Introuvable" navigation={navigation}>
        <div className="flex flex-col items-center justify-center py-12">
          <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-bold mb-2">Rapport introuvable</h2>
          <p className="text-muted-foreground mb-4">Le rapport demandé n'existe pas ou a été supprimé.</p>
          <Button onClick={() => navigate('/admin/reports')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux rapports
          </Button>
        </div>
      </DashboardLayout>
    );
  }

  const handleEdit = () => {
    navigate(`/admin/reports/${id}/edit`);
  };

  return (
    <DashboardLayout title={report.title} navigation={navigation}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate('/admin/reports')}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">{report.title}</h1>
              <p className="text-muted-foreground">
                Créé par {report.author} le {format(new Date(report.date), 'PPP', { locale: fr })}
              </p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Bookmark className="mr-2 h-4 w-4" />
              Favoris
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Partager
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Télécharger
            </Button>
            <Button size="sm" onClick={handleEdit}>
              <Edit className="mr-2 h-4 w-4" />
              Modifier
            </Button>
          </div>
        </div>

        {/* Status Banner */}
        <Card className={`border-l-4 ${
          report.status === 'published' ? 'border-l-emerald-500 bg-emerald-50/50' :
          report.status === 'review' ? 'border-l-orange-500 bg-orange-50/50' :
          'border-l-gray-500 bg-gray-50/50'
        }`}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {report.status === 'published' ? (
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                ) : report.status === 'review' ? (
                  <Clock className="h-5 w-5 text-orange-600" />
                ) : (
                  <Edit className="h-5 w-5 text-gray-600" />
                )}
                <div>
                  <p className="font-medium">
                    {report.status === 'published' ? 'Rapport Publié' :
                     report.status === 'review' ? 'En Révision' : 'Brouillon'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {report.status === 'published' ? 'Visible par tous les membres' :
                     report.status === 'review' ? 'En attente de validation' : 'Version de travail'}
                  </p>
                </div>
              </div>
              
              <Badge variant={
                report.status === 'published' ? 'default' :
                report.status === 'review' ? 'secondary' : 'outline'
              } className="text-sm">
                {report.status === 'published' ? '✓ Publié' :
                 report.status === 'review' ? '⏳ En révision' : '📝 Brouillon'}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="content">Contenu</TabsTrigger>
            <TabsTrigger value="analytics">Analyses</TabsTrigger>
            <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Statistics */}
            <div className="grid gap-6 md:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Vues</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{report.views.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    +20% ce mois
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Téléchargements</CardTitle>
                  <Download className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{report.downloads.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    +12% cette semaine
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Engagement</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">85%</div>
                  <p className="text-xs text-muted-foreground">
                    Taux de lecture
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Score</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.8</div>
                  <p className="text-xs text-muted-foreground">
                    Note moyenne
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Report Info */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Informations du Rapport</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Auteur</p>
                      <p className="text-sm text-muted-foreground">{report.author}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Date de création</p>
                      <p className="text-sm text-muted-foreground">
                        {format(new Date(report.date), 'PPP', { locale: fr })}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Type</p>
                      <p className="text-sm text-muted-foreground">
                        {report.type || 'Rapport standard'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Objectif</p>
                      <p className="text-sm text-muted-foreground">
                        Analyse des activités de conservation
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance du Rapport</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Taux de lecture</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Engagement</span>
                      <span className="font-medium">72%</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Partages</span>
                      <span className="font-medium">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Qualité globale</span>
                      <span className="font-medium">96%</span>
                    </div>
                    <Progress value={96} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contenu du Rapport</CardTitle>
                <CardDescription>
                  Prévisualisation et structure du rapport
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <h2>Résumé Exécutif</h2>
                  <p>
                    Ce rapport présente une analyse complète des activités de conservation menées 
                    par l'association au cours du dernier trimestre. Nos efforts ont porté sur 
                    la protection des espèces d'oiseaux migrateurs et la restauration des habitats naturels.
                  </p>
                  
                  <h3>Faits Saillants</h3>
                  <ul>
                    <li>Protection de 15 nouvelles espèces d'oiseaux</li>
                    <li>Restauration de 250 hectares d'habitat naturel</li>
                    <li>Formation de 120 bénévoles</li>
                    <li>Organisation de 25 événements de sensibilisation</li>
                  </ul>
                  
                  <h3>Résultats Clés</h3>
                  <p>
                    Les initiatives de conservation ont montré des résultats encourageants avec 
                    une augmentation de 30% de la population d'oiseaux dans les zones protégées.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Tendances de Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    Graphique des consultations (à implémenter)
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sources de Trafic</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Direct</span>
                      <span className="font-medium">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Email</span>
                      <span className="font-medium">30%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Réseaux sociaux</span>
                      <span className="font-medium">15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Recherche</span>
                      <span className="font-medium">10%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="collaboration" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Collaborateurs</CardTitle>
                <CardDescription>
                  Personnes ayant contribué à ce rapport
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-sm font-medium">A</span>
                    </div>
                    <div>
                      <p className="font-medium">{report.author}</p>
                      <p className="text-sm text-muted-foreground">Auteur principal</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <span className="text-sm font-medium">L</span>
                    </div>
                    <div>
                      <p className="font-medium">Leila Khouja</p>
                      <p className="text-sm text-muted-foreground">Réviseur</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-sm font-medium">F</span>
                    </div>
                    <div>
                      <p className="font-medium">Fatima Trabelsi</p>
                      <p className="text-sm text-muted-foreground">Contributeur</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}