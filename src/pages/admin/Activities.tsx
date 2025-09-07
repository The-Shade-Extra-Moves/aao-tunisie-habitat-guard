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
import { mockActivities } from '@/lib/mockData';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { 
  Calendar as CalendarIcon,
  MapPin,
  Users,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  BarChart3,
  Activity,
  Settings,
  FileText
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Tableau de bord', href: '/dashboard', icon: BarChart3 },
  { name: 'Utilisateurs', href: '/admin/users', icon: Users },
  { name: 'Activités', href: '/admin/activities', icon: Activity, current: true },
  { name: 'Rapports', href: '/admin/reports', icon: FileText },
  { name: 'Paramètres', href: '/admin/settings', icon: Settings },
];

export default function AdminActivities() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();

  const filteredActivities = mockActivities.filter(activity => {
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || activity.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const CreateActivityDialog = () => (
    <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Créer une nouvelle activité</DialogTitle>
          <DialogDescription>
            Planifiez une nouvelle activité de conservation
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Titre de l'activité</Label>
              <Input id="title" placeholder="Comptage d'oiseaux migrateurs" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="type">Type d'activité</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="observation">Observation</SelectItem>
                  <SelectItem value="conservation">Conservation</SelectItem>
                  <SelectItem value="education">Éducation</SelectItem>
                  <SelectItem value="research">Recherche</SelectItem>
                  <SelectItem value="cleanup">Nettoyage</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              placeholder="Décrivez l'activité, ses objectifs et son déroulement..."
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>Date de l'activité</Label>
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
                    {selectedDate ? format(selectedDate, "PPP", { locale: fr }) : "Sélectionner une date"}
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
              <Label htmlFor="time">Heure de début</Label>
              <Input id="time" type="time" defaultValue="08:00" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="location">Lieu</Label>
              <Input id="location" placeholder="Lac de Tunis, Tunisia" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="coordinator">Coordinateur</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ahmed">Ahmed Ben Salah</SelectItem>
                  <SelectItem value="fatima">Fatima Trabelsi</SelectItem>
                  <SelectItem value="leila">Leila Khouja</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="maxParticipants">Participants max</Label>
              <Input id="maxParticipants" type="number" placeholder="20" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="difficulty">Difficulté</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Niveau" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Débutant</SelectItem>
                  <SelectItem value="intermediate">Intermédiaire</SelectItem>
                  <SelectItem value="advanced">Avancé</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="equipment">Équipement requis</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Équipement" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Aucun</SelectItem>
                  <SelectItem value="binoculars">Jumelles</SelectItem>
                  <SelectItem value="camera">Appareil photo</SelectItem>
                  <SelectItem value="tools">Outils de terrain</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="objectives">Objectifs spécifiques</Label>
            <Textarea 
              id="objectives" 
              placeholder="Listez les objectifs scientifiques ou de conservation..."
              rows={2}
            />
          </div>
        </div>
        
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
            Annuler
          </Button>
          <Button onClick={() => setIsCreateDialogOpen(false)}>
            Créer l'activité
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <DashboardLayout title="Gestion des Activités" navigation={navigation}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Activités</h2>
            <p className="text-muted-foreground">
              Gérez toutes les activités de l'association
            </p>
          </div>
          <Button onClick={() => setIsCreateDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Nouvelle Activité
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Activités</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockActivities.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">En Cours</CardTitle>
              <CalendarIcon className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mockActivities.filter(a => a.status === 'ongoing').length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Planifiées</CardTitle>
              <CalendarIcon className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mockActivities.filter(a => a.status === 'planned').length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Participants Total</CardTitle>
              <Users className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mockActivities.reduce((sum, a) => sum + a.participants, 0)}
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
                    placeholder="Rechercher par titre ou lieu..."
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
                    <SelectItem value="planned">Planifiée</SelectItem>
                    <SelectItem value="ongoing">En cours</SelectItem>
                    <SelectItem value="completed">Terminée</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activities List */}
        <div className="grid gap-4">
          {filteredActivities.map((activity) => (
            <Card key={activity.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg">{activity.title}</CardTitle>
                      <Badge variant={
                        activity.status === 'completed' ? 'default' :
                        activity.status === 'ongoing' ? 'secondary' : 'outline'
                      }>
                        {activity.status === 'completed' ? 'Terminée' :
                         activity.status === 'ongoing' ? 'En cours' : 'Planifiée'}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4" />
                        {new Date(activity.date).toLocaleDateString('fr-FR')}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {activity.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {activity.participants} participants
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Voir
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-4 w-4" />
                      Modifier
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {activity.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">
                    <strong>Coordinateur:</strong> {activity.coordinator}
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Participants
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

        <CreateActivityDialog />
      </div>
    </DashboardLayout>
  );
}