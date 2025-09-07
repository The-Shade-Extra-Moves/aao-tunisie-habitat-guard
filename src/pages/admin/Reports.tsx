import { useState } from 'react';
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
  Share2
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
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();

  const filteredReports = mockReports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || report.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

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
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Rapports</h2>
            <p className="text-muted-foreground">
              Générez et consultez tous les rapports de l'association
            </p>
          </div>
          <Button onClick={() => setIsCreateDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Nouveau Rapport
          </Button>
        </div>

        <Tabs defaultValue="reports" className="space-y-4">
          <TabsList>
            <TabsTrigger value="reports">Tous les rapports</TabsTrigger>
            <TabsTrigger value="analytics">Analyses</TabsTrigger>
            <TabsTrigger value="templates">Modèles</TabsTrigger>
          </TabsList>

          <TabsContent value="reports" className="space-y-4">
            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Rapports</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockReports.length}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Publiés</CardTitle>
                  <Eye className="h-4 w-4 text-emerald-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {mockReports.filter(r => r.status === 'published').length}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">En révision</CardTitle>
                  <Edit className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {mockReports.filter(r => r.status === 'review').length}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Téléchargements</CardTitle>
                  <Download className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {mockReports.reduce((sum, r) => sum + r.downloads, 0)}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters */}
            <Card>
              <CardHeader>
                <CardTitle>Filtres et Recherche</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 items-end">
                  <div className="flex-1">
                    <Label htmlFor="search">Rechercher</Label>
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="search"
                        placeholder="Rechercher par titre ou auteur..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label>Statut</Label>
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tous les statuts</SelectItem>
                        <SelectItem value="draft">Brouillon</SelectItem>
                        <SelectItem value="review">En révision</SelectItem>
                        <SelectItem value="published">Publié</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reports List */}
            <div className="grid gap-4">
              {filteredReports.map((report) => (
                <Card key={report.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg">{report.title}</CardTitle>
                          <Badge variant={
                            report.status === 'published' ? 'default' :
                            report.status === 'review' ? 'secondary' : 'outline'
                          }>
                            {report.status === 'published' ? 'Publié' :
                             report.status === 'review' ? 'En révision' : 'Brouillon'}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Par {report.author}</span>
                          <span>{new Date(report.date).toLocaleDateString('fr-FR')}</span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {report.views} vues
                          </span>
                          <span className="flex items-center gap-1">
                            <Download className="h-4 w-4" />
                            {report.downloads} téléchargements
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="mr-2 h-4 w-4" />
                          Voir
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Télécharger
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-4 w-4" />
                          Modifier
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="mr-2 h-4 w-4" />
                          Partager
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
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