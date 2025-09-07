import { DashboardLayout } from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { 
  Settings,
  Users,
  Activity,
  FileText,
  BarChart3,
  Bell,
  Lock,
  Globe,
  Database,
  Mail,
  Palette,
  Shield,
  Save,
  Upload,
  Download
} from 'lucide-react';

const navigation = [
  { name: 'Tableau de bord', href: '/dashboard', icon: BarChart3 },
  { name: 'Utilisateurs', href: '/admin/users', icon: Users },
  { name: 'Activités', href: '/admin/activities', icon: Activity },
  { name: 'Rapports', href: '/admin/reports', icon: FileText },
  { name: 'Paramètres', href: '/admin/settings', icon: Settings, current: true },
];

export default function AdminSettings() {
  return (
    <DashboardLayout title="Paramètres Administrateur" navigation={navigation}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold">Paramètres</h2>
          <p className="text-muted-foreground">
            Configurez les paramètres de l'association et du système
          </p>
        </div>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="general">Général</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Sécurité</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="appearance">Apparence</TabsTrigger>
            <TabsTrigger value="backup">Sauvegarde</TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Informations de l'Association
                </CardTitle>
                <CardDescription>
                  Configurez les informations générales de l'association
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="orgName">Nom de l'association</Label>
                    <Input id="orgName" defaultValue="Association Amis des Oiseaux - Tunisie" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="acronym">Acronyme</Label>
                    <Input id="acronym" defaultValue="AAO-Tunisie" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    rows={3}
                    defaultValue="Association dédiée à la protection et à l'étude des oiseaux en Tunisie depuis 1973"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="website">Site web</Label>
                    <Input id="website" defaultValue="https://aao-tunisie.org" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email principal</Label>
                    <Input id="email" defaultValue="contact@aao-tunisie.org" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" defaultValue="+216 71 123 456" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="founded">Année de fondation</Label>
                    <Input id="founded" defaultValue="1973" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="members">Nombre de membres</Label>
                    <Input id="members" defaultValue="1,247" />
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="address">Adresse</Label>
                  <Textarea 
                    id="address" 
                    rows={2}
                    defaultValue="12 Avenue de la République, 1001 Tunis, Tunisie"
                  />
                </div>

                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Sauvegarder
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Logo et Images</CardTitle>
                <CardDescription>
                  Gérez les images de l'association
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Logo principal</Label>
                    <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        Cliquez pour télécharger un logo
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Image de couverture</Label>
                    <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        Cliquez pour télécharger une image
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Settings */}
          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Paramètres de Notification
                </CardTitle>
                <CardDescription>
                  Configurez les notifications du système
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Notifications par email</Label>
                      <p className="text-sm text-muted-foreground">
                        Recevoir les notifications importantes par email
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Nouvelles inscriptions</Label>
                      <p className="text-sm text-muted-foreground">
                        Notifier lors de nouvelles inscriptions de membres
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Activités à venir</Label>
                      <p className="text-sm text-muted-foreground">
                        Rappels pour les activités planifiées
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Rapports mensuels</Label>
                      <p className="text-sm text-muted-foreground">
                        Recevoir un rapport mensuel des activités
                      </p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Alertes système</Label>
                      <p className="text-sm text-muted-foreground">
                        Notifications d'erreurs et de maintenance
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Fréquence des notifications</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Digest des activités</Label>
                      <Select defaultValue="weekly">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Quotidien</SelectItem>
                          <SelectItem value="weekly">Hebdomadaire</SelectItem>
                          <SelectItem value="monthly">Mensuel</SelectItem>
                          <SelectItem value="never">Jamais</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Rappels d'événements</Label>
                      <Select defaultValue="3days">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1day">1 jour avant</SelectItem>
                          <SelectItem value="3days">3 jours avant</SelectItem>
                          <SelectItem value="1week">1 semaine avant</SelectItem>
                          <SelectItem value="never">Jamais</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Paramètres de Sécurité
                </CardTitle>
                <CardDescription>
                  Gérez la sécurité et les accès du système
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Authentification à deux facteurs</Label>
                      <p className="text-sm text-muted-foreground">
                        Activer la 2FA pour tous les administrateurs
                      </p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Connexions multiples</Label>
                      <p className="text-sm text-muted-foreground">
                        Autoriser plusieurs sessions simultanées
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Journalisation des actions</Label>
                      <p className="text-sm text-muted-foreground">
                        Enregistrer toutes les actions administratives
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Politiques de mot de passe</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Longueur minimale</Label>
                      <Select defaultValue="8">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6">6 caractères</SelectItem>
                          <SelectItem value="8">8 caractères</SelectItem>
                          <SelectItem value="12">12 caractères</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Expiration</Label>
                      <Select defaultValue="90">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">30 jours</SelectItem>
                          <SelectItem value="90">90 jours</SelectItem>
                          <SelectItem value="180">180 jours</SelectItem>
                          <SelectItem value="never">Jamais</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Sessions et timeouts</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Timeout de session (minutes)</Label>
                      <Input defaultValue="30" type="number" />
                    </div>
                    <div className="space-y-2">
                      <Label>Tentatives de connexion max</Label>
                      <Input defaultValue="5" type="number" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Email Settings */}
          <TabsContent value="email" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Configuration Email
                </CardTitle>
                <CardDescription>
                  Paramètres pour l'envoi d'emails automatiques
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Serveur SMTP</Label>
                    <Input defaultValue="smtp.aao-tunisie.org" />
                  </div>
                  <div className="space-y-2">
                    <Label>Port</Label>
                    <Input defaultValue="587" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Email expéditeur</Label>
                    <Input defaultValue="noreply@aao-tunisie.org" />
                  </div>
                  <div className="space-y-2">
                    <Label>Nom expéditeur</Label>
                    <Input defaultValue="AAO Tunisie" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Signature email</Label>
                  <Textarea 
                    rows={4}
                    defaultValue="Association Amis des Oiseaux - Tunisie&#10;12 Avenue de la République, 1001 Tunis&#10;Tél: +216 71 123 456&#10;www.aao-tunisie.org"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="ssl" defaultChecked />
                  <Label htmlFor="ssl">Utiliser SSL/TLS</Label>
                </div>

                <div className="flex gap-2">
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Sauvegarder
                  </Button>
                  <Button variant="outline">
                    Tester la connexion
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance Settings */}
          <TabsContent value="appearance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Apparence et Thème
                </CardTitle>
                <CardDescription>
                  Personnalisez l'apparence de l'interface d'administration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Thème par défaut</Label>
                    <Select defaultValue="light">
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Clair</SelectItem>
                        <SelectItem value="dark">Sombre</SelectItem>
                        <SelectItem value="system">Système</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Couleur principale</Label>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded border-2 border-primary bg-primary cursor-pointer"></div>
                      <div className="w-8 h-8 rounded border-2 bg-blue-600 cursor-pointer"></div>
                      <div className="w-8 h-8 rounded border-2 bg-emerald-600 cursor-pointer"></div>
                      <div className="w-8 h-8 rounded border-2 bg-purple-600 cursor-pointer"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="compact" />
                    <Label htmlFor="compact">Mode compact</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="animations" defaultChecked />
                    <Label htmlFor="animations">Animations</Label>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Langue et région</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Langue</Label>
                      <Select defaultValue="fr">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="ar">العربية</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Format de date</Label>
                      <Select defaultValue="dd/mm/yyyy">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dd/mm/yyyy">DD/MM/YYYY</SelectItem>
                          <SelectItem value="mm/dd/yyyy">MM/DD/YYYY</SelectItem>
                          <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Backup Settings */}
          <TabsContent value="backup" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Sauvegarde et Restauration
                </CardTitle>
                <CardDescription>
                  Gérez les sauvegardes automatiques et manuelles
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Sauvegarde automatique</Label>
                      <p className="text-sm text-muted-foreground">
                        Créer des sauvegardes automatiques régulières
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Fréquence</Label>
                      <Select defaultValue="daily">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hourly">Toutes les heures</SelectItem>
                          <SelectItem value="daily">Quotidienne</SelectItem>
                          <SelectItem value="weekly">Hebdomadaire</SelectItem>
                          <SelectItem value="monthly">Mensuelle</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Rétention (jours)</Label>
                      <Input defaultValue="30" type="number" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Sauvegarde manuelle</h4>
                  <p className="text-sm text-muted-foreground">
                    Créez une sauvegarde complète de toutes les données
                  </p>
                  
                  <div className="flex gap-2">
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      Créer une sauvegarde
                    </Button>
                    <Button variant="outline">
                      <Upload className="mr-2 h-4 w-4" />
                      Restaurer
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Dernières sauvegardes</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 border rounded">
                      <div>
                        <p className="text-sm font-medium">Sauvegarde complète</p>
                        <p className="text-xs text-muted-foreground">Hier à 03:00</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded">
                      <div>
                        <p className="text-sm font-medium">Sauvegarde utilisateurs</p>
                        <p className="text-xs text-muted-foreground">Il y a 2 jours à 03:00</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
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