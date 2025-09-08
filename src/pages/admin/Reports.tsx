import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { mockReports, mockStats } from '@/lib/mockData';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { 
  FileText,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  Calendar as CalendarIcon,
  BarChart3,
  TrendingUp,
  Users,
  Activity,
  Settings,
  PieChart,
  LineChart,
  Share2,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  FileBarChart,
  Database,
  Zap,
  Target
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Tableau de bord', href: '/dashboard', icon: BarChart3 },
  { name: 'Utilisateurs', href: '/admin/users', icon: Users },
  { name: 'Activités', href: '/admin/activities', icon: Activity },
  { name: 'Rapports', href: '/admin/reports', icon: FileText, current: true },
  { name: 'Paramètres', href: '/admin/settings', icon: Settings },
];

export default function AdminReports() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredReports = mockReports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || report.status === filterStatus;
    const matchesType = filterType === 'all' || report.type === filterType;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const handleViewReport = (reportId: string) => {
    navigate(`/admin/reports/${reportId}`);
  };

  const handleEditReport = (reportId: string) => {
    navigate(`/admin/reports/${reportId}/edit`);
  };

  const CreateReportDialog = () => (
    <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Créer un nouveau rapport</DialogTitle>
          <DialogDescription>
            Générez un rapport personnalisé pour l'association
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Titre du rapport</Label>
              <Input id="title" placeholder="Rapport mensuel d'activités" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="type">Type de rapport</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Rapport mensuel</SelectItem>
                  <SelectItem value="annual">Rapport annuel</SelectItem>
                  <SelectItem value="activity">Rapport d'activité</SelectItem>
                  <SelectItem value="financial">Rapport financier</SelectItem>
                  <SelectItem value="conservation">Rapport de conservation</SelectItem>
                  <SelectItem value="custom">Personnalisé</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              placeholder="Décrivez le contenu et les objectifs du rapport..."
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>Date de début</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP", { locale: fr }) : "Sélectionner"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-2">
              <Label>Date de fin</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal text-muted-foreground"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Sélectionner
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="author">Auteur</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ahmed">Ahmed Ben Salah</SelectItem>
                  <SelectItem value="fatima">Fatima Trabelsi</SelectItem>
                  <SelectItem value="leila">Leila Khouja</SelectItem>
                  <SelectItem value="system">Rapport automatique</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="format">Format</Label>
              <Select defaultValue="pdf">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="excel">Excel</SelectItem>
                  <SelectItem value="word">Word</SelectItem>
                  <SelectItem value="html">HTML</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-2">
            <Label>Sections à inclure</Label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="stats" defaultChecked />
                <Label htmlFor="stats">Statistiques générales</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="activities" defaultChecked />
                <Label htmlFor="activities">Activités</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="members" />
                <Label htmlFor="members">Membres</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="financial" />
                <Label htmlFor="financial">Données financières</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="conservation" defaultChecked />
                <Label htmlFor="conservation">Conservation</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="graphs" defaultChecked />
                <Label htmlFor="graphs">Graphiques</Label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
            Annuler
          </Button>
          <Button onClick={() => setIsCreateDialogOpen(false)}>
            Générer le rapport
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <DashboardLayout title="Gestion des Rapports" navigation={navigation}>
      <div className="space-y-6">
        {/* Modern Header */}
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-background p-8">
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Centre de Rapports</h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Tableau de bord intelligent pour la gestion, l'analyse et la génération de rapports avancés
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>{mockReports.filter(r => r.status === 'published').length} rapports publiés</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span>{mockReports.filter(r => r.status === 'review').length} en révision</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="gap-2">
                  <Upload className="h-4 w-4" />
                  Importer
                </Button>
                <Button size="lg" className="gap-2" onClick={() => setIsCreateDialogOpen(true)}>
                  <Plus className="h-4 w-4" />
                  Nouveau Rapport
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Tableau de Bord
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Rapports
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="templates" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Modèles
            </TabsTrigger>
            <TabsTrigger value="automation" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Automatisation
            </TabsTrigger>
          </TabsList>

          {/* Modern Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* KPI Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                  <CardTitle className="text-sm font-medium">Rapports Générés</CardTitle>
                  <FileBarChart className="h-5 w-5 text-blue-600" />
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="text-3xl font-bold">{mockReports.length}</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <TrendingUp className="h-3 w-3 mr-1 text-emerald-500" />
                    +12% ce mois
                  </div>
                  <Progress value={75} className="mt-3 h-2" />
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                  <CardTitle className="text-sm font-medium">Taux de Consultation</CardTitle>
                  <Eye className="h-5 w-5 text-emerald-600" />
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="text-3xl font-bold">94.2%</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <TrendingUp className="h-3 w-3 mr-1 text-emerald-500" />
                    +5.1% cette semaine
                  </div>
                  <Progress value={94} className="mt-3 h-2" />
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                  <CardTitle className="text-sm font-medium">Téléchargements</CardTitle>
                  <Download className="h-5 w-5 text-purple-600" />
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="text-3xl font-bold">
                    {mockReports.reduce((sum, r) => sum + r.downloads, 0).toLocaleString()}
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <TrendingUp className="h-3 w-3 mr-1 text-emerald-500" />
                    +23% ce mois
                  </div>
                  <Progress value={85} className="mt-3 h-2" />
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/5"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                  <CardTitle className="text-sm font-medium">Score Qualité</CardTitle>
                  <Star className="h-5 w-5 text-orange-600" />
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="text-3xl font-bold">4.8</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <Star className="h-3 w-3 mr-1 text-orange-500 fill-current" />
                    Excellente qualité
                  </div>
                  <Progress value={96} className="mt-3 h-2" />
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Actions Rapides
                </CardTitle>
                <CardDescription>
                  Accédez rapidement aux fonctionnalités les plus utilisées
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <Button variant="outline" className="h-20 flex-col gap-2" onClick={() => setIsCreateDialogOpen(true)}>
                    <Plus className="h-6 w-6" />
                    <span>Nouveau Rapport</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <BarChart3 className="h-6 w-6" />
                    <span>Analyse Avancée</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Share2 className="h-6 w-6" />
                    <span>Partager Rapport</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Rapports Récents</CardTitle>
                  <CardDescription>Les derniers rapports créés</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockReports.slice(0, 4).map((report) => (
                      <div key={report.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                           onClick={() => handleViewReport(report.id)}>
                        <div className="p-2 rounded-lg bg-primary/10">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">{report.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(report.date).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                        <Badge variant={report.status === 'published' ? 'default' : 'secondary'}>
                          {report.status === 'published' ? 'Publié' : 'En révision'}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Statistiques de Performance</CardTitle>
                  <CardDescription>Métriques clés de vos rapports</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Rapports Mensuels</span>
                      <span className="font-medium">8/10</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Taux de Lecture</span>
                      <span className="font-medium">94%</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Engagement</span>
                      <span className="font-medium">76%</span>
                    </div>
                    <Progress value={76} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Qualité Moyenne</span>
                      <span className="font-medium">4.8/5</span>
                    </div>
                    <Progress value={96} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            {/* Advanced Filters */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Gestion des Rapports</CardTitle>
                    <CardDescription>Filtrez, recherchez et gérez vos rapports</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                    >
                      <PieChart className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                    >
                      <FileText className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Rechercher par titre, auteur, contenu..."
                      className="pl-9 h-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-full lg:w-40">
                      <SelectValue placeholder="Statut" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous les statuts</SelectItem>
                      <SelectItem value="draft">Brouillon</SelectItem>
                      <SelectItem value="review">En révision</SelectItem>
                      <SelectItem value="published">Publié</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="w-full lg:w-40">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous les types</SelectItem>
                      <SelectItem value="monthly">Mensuel</SelectItem>
                      <SelectItem value="annual">Annuel</SelectItem>
                      <SelectItem value="financial">Financier</SelectItem>
                      <SelectItem value="conservation">Conservation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>


            {/* Modern Reports Grid/List */}
            <div className={cn(
              "gap-6",
              viewMode === 'grid' ? "grid lg:grid-cols-2" : "space-y-4"
            )}>
              {filteredReports.map((report) => (
                <Card 
                  key={report.id} 
                  className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/20"
                  onClick={() => handleViewReport(report.id)}
                >
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <FileBarChart className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                              {report.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Par {report.author} • {new Date(report.date).toLocaleDateString('fr-FR')}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <Badge variant={
                            report.status === 'published' ? 'default' :
                            report.status === 'review' ? 'secondary' : 'outline'
                          } className="font-medium">
                            {report.status === 'published' ? '✓ Publié' :
                             report.status === 'review' ? '⏳ En révision' : '📝 Brouillon'}
                          </Badge>
                          <span className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {report.views.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Download className="h-4 w-4" />
                            {report.downloads.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                          <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                            <span className="text-xs font-medium">A</span>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-emerald-500/20 border-2 border-background flex items-center justify-center">
                            <span className="text-xs font-medium">B</span>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">+3 collaborateurs</span>
                      </div>
                      
                      <div className="flex gap-1">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewReport(report.id);
                          }}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditReport(report.id);
                          }}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={(e) => e.stopPropagation()}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {filteredReports.length === 0 && (
              <Card className="p-12 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Aucun rapport trouvé</h3>
                    <p className="text-muted-foreground">
                      Essayez de modifier vos filtres ou créez un nouveau rapport
                    </p>
                  </div>
                  <Button onClick={() => setIsCreateDialogOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Créer un rapport
                  </Button>
                </div>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Statistiques de Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Rapports les plus consultés</span>
                    <span className="font-bold">Rapport Annuel 2023</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Moyenne de téléchargements</span>
                    <span className="font-bold">152 par rapport</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Taux de consultation</span>
                    <span className="font-bold">78%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Fréquence de publication</span>
                    <span className="font-bold">2.3 par mois</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Tendances
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Croissance des consultations</span>
                    <span className="font-bold text-emerald-600">+23%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Nouveaux lecteurs ce mois</span>
                    <span className="font-bold text-blue-600">+145</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Temps de lecture moyen</span>
                    <span className="font-bold">12 minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Taux de partage</span>
                    <span className="font-bold">15%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Rapports par Catégorie</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Conservation</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-emerald-600"></div>
                      </div>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Recherche</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-blue-600"></div>
                      </div>
                      <span className="text-sm font-medium">50%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Activités</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-2/3 h-full bg-orange-600"></div>
                      </div>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Financier</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-1/3 h-full bg-purple-600"></div>
                      </div>
                      <span className="text-sm font-medium">30%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Modèles de Rapports</CardTitle>
                <CardDescription>
                  Modèles prédéfinis pour générer rapidement des rapports standardisés
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-base">Rapport Mensuel</CardTitle>
                      <CardDescription>
                        Résumé des activités du mois
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" size="sm">
                        Utiliser ce modèle
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-base">Rapport Annuel</CardTitle>
                      <CardDescription>
                        Bilan complet de l'année
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" size="sm">
                        Utiliser ce modèle
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-base">Rapport d'Activité</CardTitle>
                      <CardDescription>
                        Détails d'une activité spécifique
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" size="sm">
                        Utiliser ce modèle
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-base">Rapport Financier</CardTitle>
                      <CardDescription>
                        État des finances de l'association
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" size="sm">
                        Utiliser ce modèle
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-base">Rapport de Conservation</CardTitle>
                      <CardDescription>
                        Projets et résultats de conservation
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" size="sm">
                        Utiliser ce modèle
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-md transition-shadow border-dashed">
                    <CardHeader>
                      <CardTitle className="text-base text-muted-foreground">
                        <Plus className="mr-2 h-4 w-4 inline" />
                        Nouveau Modèle
                      </CardTitle>
                      <CardDescription>
                        Créer un modèle personnalisé
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" size="sm" variant="outline">
                        Créer un modèle
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <CreateReportDialog />
      </div>
    </DashboardLayout>
  );
}