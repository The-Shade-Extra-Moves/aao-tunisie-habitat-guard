import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Switch } from '@/components/ui/switch';
import { mockReports } from '@/lib/mockData';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { 
  ArrowLeft,
  Save,
  Eye,
  Send,
  FileText,
  BarChart3,
  Users,
  Activity,
  Settings,
  Calendar as CalendarIcon,
  Upload,
  Image,
  Type,
  Palette,
  Layout,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Link,
  Quote,
  Code,
  Trash2,
  Plus,
  ChevronDown,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react';

const navigation = [
  { name: 'Tableau de bord', href: '/dashboard', icon: BarChart3 },
  { name: 'Utilisateurs', href: '/admin/users', icon: Users },
  { name: 'Activités', href: '/admin/activities', icon: Activity },
  { name: 'Rapports', href: '/admin/reports', icon: FileText, current: true },
  { name: 'Paramètres', href: '/admin/settings', icon: Settings },
];

export default function ReportEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('content');
  const [previewMode, setPreviewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [selectedDate, setSelectedDate] = useState<Date>();

  // Find the report (in real app, this would be an API call)
  const report = mockReports.find(r => r.id === id);
  const isNewReport = !report;

  const [formData, setFormData] = useState({
    title: report?.title || '',
    author: report?.author || '',
    status: report?.status || 'draft' as 'draft' | 'review' | 'published',
    type: report?.type || 'monthly' as 'monthly' | 'annual' | 'activity' | 'financial' | 'conservation' | 'custom',
    content: `# ${report?.title || 'Nouveau Rapport'}

## Résumé Exécutif

Ce rapport présente une analyse complète des activités de l'association.

## Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Méthodologie

### Collecte de données
- Sources primaires
- Sources secondaires
- Analyses statistiques

### Analyse
- Évaluation quantitative
- Évaluation qualitative
- Benchmarking

## Résultats

### Faits saillants
- Point clé 1
- Point clé 2
- Point clé 3

### Données statistiques
- Metric 1: 85%
- Metric 2: 120 unités
- Metric 3: +15% de croissance

## Recommandations

1. **Amélioration continue**: Poursuivre les efforts actuels
2. **Innovation**: Explorer de nouvelles approches
3. **Collaboration**: Renforcer les partenariats

## Conclusion

En conclusion, les résultats montrent une tendance positive dans l'ensemble des indicateurs clés.

---
*Rapport généré le ${new Date().toLocaleDateString('fr-FR')}*`,
    tags: ['conservation', 'rapport', 'mensuel'],
    publishDate: report?.date || new Date().toISOString(),
    visibility: 'members',
    allowComments: true,
    allowDownload: true
  });

  const handleSave = () => {
    console.log('Saving report:', formData);
    // Here you would save to your backend
  };

  const handlePublish = () => {
    setFormData(prev => ({ ...prev, status: 'published' }));
    console.log('Publishing report:', formData);
    // Here you would publish to your backend
  };

  const handlePreview = () => {
    navigate(`/admin/reports/${id || 'new'}`);
  };

  const toolbarButtons = [
    { icon: Bold, label: 'Gras', action: () => {} },
    { icon: Italic, label: 'Italique', action: () => {} },
    { icon: Underline, label: 'Souligné', action: () => {} },
    '|',
    { icon: AlignLeft, label: 'Aligner à gauche', action: () => {} },
    { icon: AlignCenter, label: 'Centrer', action: () => {} },
    { icon: AlignRight, label: 'Aligner à droite', action: () => {} },
    '|',
    { icon: List, label: 'Liste à puces', action: () => {} },
    { icon: ListOrdered, label: 'Liste numérotée', action: () => {} },
    '|',
    { icon: Link, label: 'Lien', action: () => {} },
    { icon: Image, label: 'Image', action: () => {} },
    { icon: Quote, label: 'Citation', action: () => {} },
    { icon: Code, label: 'Code', action: () => {} }
  ];

  return (
    <DashboardLayout title={isNewReport ? 'Nouveau Rapport' : `Édition: ${report.title}`} navigation={navigation}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate('/admin/reports')}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">
                {isNewReport ? 'Créer un Nouveau Rapport' : 'Éditer le Rapport'}
              </h1>
              <p className="text-muted-foreground">
                {isNewReport ? 'Configurez et rédigez votre rapport' : `Modification de "${report.title}"`}
              </p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" />
              Sauvegarder
            </Button>
            <Button variant="outline" size="sm" onClick={handlePreview}>
              <Eye className="mr-2 h-4 w-4" />
              Prévisualiser
            </Button>
            <Button size="sm" onClick={handlePublish}>
              <Send className="mr-2 h-4 w-4" />
              Publier
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="content">Contenu</TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="preview">Prévisualisation</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Main Content Editor */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Informations de Base</CardTitle>
                      <Badge variant="outline">{formData.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="title">Titre du rapport</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                          placeholder="Entrez le titre du rapport"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="type">Type de rapport</Label>
                        <Select value={formData.type} onValueChange={(value: 'monthly' | 'annual' | 'activity' | 'financial' | 'conservation' | 'custom') => setFormData(prev => ({ ...prev, type: value }))}>
                          <SelectTrigger>
                            <SelectValue />
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

                    <div className="space-y-2">
                      <Label htmlFor="author">Auteur</Label>
                      <Input
                        id="author"
                        value={formData.author}
                        onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                        placeholder="Nom de l'auteur"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Rich Text Editor */}
                <Card>
                  <CardHeader>
                    <CardTitle>Contenu du Rapport</CardTitle>
                    <CardDescription>
                      Utilisez la barre d'outils pour formater votre contenu
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Toolbar */}
                    <div className="border rounded-t-lg p-2 bg-muted/30">
                      <div className="flex items-center gap-1 flex-wrap">
                        {toolbarButtons.map((button, index) => (
                          typeof button === 'string' ? (
                            <Separator key={index} orientation="vertical" className="h-6 mx-1" />
                          ) : (
                            <Button
                              key={index}
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                              onClick={button.action}
                              title={button.label}
                            >
                              <button.icon className="h-4 w-4" />
                            </Button>
                          )
                        ))}
                      </div>
                    </div>
                    
                    {/* Content Area */}
                    <Textarea
                      value={formData.content}
                      onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                      placeholder="Commencez à écrire votre rapport..."
                      className="min-h-[400px] rounded-t-none border-t-0 font-mono text-sm"
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Publication</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Statut</Label>
                      <Select value={formData.status} onValueChange={(value: 'draft' | 'review' | 'published') => setFormData(prev => ({ ...prev, status: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Brouillon</SelectItem>
                          <SelectItem value="review">En révision</SelectItem>
                          <SelectItem value="published">Publié</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Date de publication</Label>
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

                    <div className="space-y-2">
                      <Label>Visibilité</Label>
                      <Select value={formData.visibility} onValueChange={(value) => setFormData(prev => ({ ...prev, visibility: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="members">Membres uniquement</SelectItem>
                          <SelectItem value="admin">Administrateurs uniquement</SelectItem>
                          <SelectItem value="private">Privé</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Options Avancées</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="comments" className="text-sm">Autoriser les commentaires</Label>
                      <Switch
                        id="comments"
                        checked={formData.allowComments}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, allowComments: checked }))}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="download" className="text-sm">Autoriser le téléchargement</Label>
                      <Switch
                        id="download"
                        checked={formData.allowDownload}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, allowDownload: checked }))}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {formData.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          {tag}
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-auto p-0 w-4 h-4"
                            onClick={() => {
                              setFormData(prev => ({
                                ...prev,
                                tags: prev.tags.filter((_, i) => i !== index)
                              }));
                            }}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input placeholder="Ajouter un tag" />
                      <Button size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Paramètres Généraux</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Langue du rapport</Label>
                    <Select defaultValue="fr">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="ar">العربية</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Format d'export</Label>
                    <Select defaultValue="pdf">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="word">Word</SelectItem>
                        <SelectItem value="html">HTML</SelectItem>
                        <SelectItem value="excel">Excel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Métadonnées</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea
                      placeholder="Décrivez brièvement le contenu du rapport..."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Mots-clés</Label>
                    <Input placeholder="conservation, oiseaux, rapport, environnement" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="design" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Apparence du Rapport</CardTitle>
                <CardDescription>
                  Personnalisez l'apparence de votre rapport
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Thème</Label>
                      <Select defaultValue="default">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="default">Par défaut</SelectItem>
                          <SelectItem value="modern">Moderne</SelectItem>
                          <SelectItem value="classic">Classique</SelectItem>
                          <SelectItem value="minimal">Minimal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Police</Label>
                      <Select defaultValue="inter">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="inter">Inter</SelectItem>
                          <SelectItem value="roboto">Roboto</SelectItem>
                          <SelectItem value="opensans">Open Sans</SelectItem>
                          <SelectItem value="montserrat">Montserrat</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Couleur principale</Label>
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500 cursor-pointer border-2 border-background shadow-md hover:scale-105 transition-transform"></div>
                        <div className="w-10 h-10 rounded-lg bg-emerald-500 cursor-pointer border-2 border-background shadow-md hover:scale-105 transition-transform"></div>
                        <div className="w-10 h-10 rounded-lg bg-purple-500 cursor-pointer border-2 border-background shadow-md hover:scale-105 transition-transform"></div>
                        <div className="w-10 h-10 rounded-lg bg-orange-500 cursor-pointer border-2 border-background shadow-md hover:scale-105 transition-transform"></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Mise en page</Label>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 border rounded cursor-pointer hover:bg-muted">
                          <Layout className="h-6 w-6 mx-auto" />
                          <p className="text-xs text-center mt-1">Standard</p>
                        </div>
                        <div className="p-2 border rounded cursor-pointer hover:bg-muted">
                          <Layout className="h-6 w-6 mx-auto" />
                          <p className="text-xs text-center mt-1">Large</p>
                        </div>
                        <div className="p-2 border rounded cursor-pointer hover:bg-muted">
                          <Layout className="h-6 w-6 mx-auto" />
                          <p className="text-xs text-center mt-1">Compact</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preview" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Prévisualisation</CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant={previewMode === 'desktop' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setPreviewMode('desktop')}
                    >
                      <Monitor className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={previewMode === 'tablet' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setPreviewMode('tablet')}
                    >
                      <Tablet className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={previewMode === 'mobile' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setPreviewMode('mobile')}
                    >
                      <Smartphone className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className={cn(
                  "mx-auto bg-white border rounded-lg shadow-sm overflow-hidden",
                  previewMode === 'desktop' && "max-w-full",
                  previewMode === 'tablet' && "max-w-2xl",
                  previewMode === 'mobile' && "max-w-sm"
                )}>
                  <div className="p-6">
                    <h1 className="text-3xl font-bold mb-4">{formData.title || 'Titre du rapport'}</h1>
                    <div className="prose max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: formData.content.replace(/\n/g, '<br />') }} />
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