// Mock data for the application

export interface Activity {
  id: string;
  title: string;
  type: 'observation' | 'conservation' | 'research' | 'education' | 'event' | 'field_survey';
  date: string;
  location: string;
  duration?: string;
  status: 'planned' | 'ongoing' | 'completed' | 'cancelled' | 'active';
  participants: string[];
  description: string;
  coordinator: string;
}

export interface Report {
  id: string;
  title: string;
  type: 'field_report' | 'research' | 'monthly' | 'annual' | 'field_survey' | 'species_count' | 'conservation';
  author: string;
  date: string;
  location?: string;
  summary?: string;
  status: 'draft' | 'review' | 'published' | 'under_review';
  views: number;
  downloads: number;
  content?: string;
}

export interface BirdSighting {
  id: string;
  species: string;
  scientificName: string;
  count: number;
  location: string;
  coordinates: [number, number];
  date: string;
  observer: string;
  verification: 'pending' | 'verified' | 'rejected';
  verified: boolean;
  rarity?: 'common' | 'rare' | 'endangered';
  photos: string[];
  notes: string;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'volunteer' | 'member' | 'employee';
  joinDate: string;
  status: 'active' | 'inactive';
  avatar?: string;
  specializations: string[];
  contributions: number;
}

export const mockActivities: Activity[] = [
  {
    id: '1',
    title: 'Comptage des flamants roses - Lac de Tunis',
    type: 'observation',
    date: '2024-01-20',
    location: 'Lac de Tunis',
    duration: '4 hours',
    status: 'completed',
    participants: ['Fatima Trabelsi', 'Ahmed Ben Salah', 'Youssef Mansouri'],
    description: 'Comptage annuel des flamants roses dans la région du lac de Tunis',
    coordinator: 'Ahmed Ben Salah'
  },
  {
    id: '2',
    title: 'Restauration de l\'habitat - Réserve de Ichkeul',
    type: 'conservation',
    date: '2024-02-15',
    location: 'Parc National Ichkeul',
    duration: '6 hours',
    status: 'active',
    participants: ['Fatima Trabelsi', 'Leila Khouja'],
    description: 'Projet de restauration des zones humides pour les oiseaux migrateurs',
    coordinator: 'Fatima Trabelsi'
  },
  {
    id: '3',
    title: 'Formation baguage des oiseaux',
    type: 'education',
    date: '2024-03-10',
    location: 'Station de baguage Kuriat',
    duration: '8 hours',
    status: 'planned',
    participants: ['Fatima Trabelsi'],
    description: 'Formation technique sur les méthodes de baguage scientifique',
    coordinator: 'Leila Khouja'
  }
];

export const mockReports: Report[] = [
  {
    id: '1',
    title: 'Rapport annuel de conservation 2023',
    type: 'annual',
    author: 'Ahmed Ben Salah',
    date: '2024-01-15',
    status: 'published',
    views: 245,
    downloads: 89
  },
  {
    id: '2',
    title: 'Étude sur la migration des cigognes',
    type: 'research',
    author: 'Leila Khouja',
    date: '2024-02-20',
    status: 'review',
    views: 156,
    downloads: 34
  },
  {
    id: '3',
    title: 'Suivi mensuel - Février 2024',
    type: 'monthly',
    author: 'Fatima Trabelsi',
    date: '2024-02-28',
    status: 'draft',
    views: 23,
    downloads: 5
  }
];

export const mockSightings: BirdSighting[] = [
  {
    id: '1',
    species: 'Flamant rose',
    scientificName: 'Phoenicopterus roseus',
    count: 245,
    location: 'Lac de Tunis',
    coordinates: [36.8, 10.18],
    date: '2024-01-20',
    observer: 'Fatima Trabelsi',
    verification: 'verified',
    verified: true,
    rarity: 'common',
    photos: ['https://images.unsplash.com/photo-1551244072-f5b3c8558ae5?w=400'],
    notes: 'Groupe important observé en alimentation'
  },
  {
    id: '2',
    species: 'Cigogne blanche',
    scientificName: 'Ciconia ciconia',
    count: 12,
    location: 'Bizerte',
    coordinates: [37.27, 9.87],
    date: '2024-02-15',
    observer: 'Fatima Trabelsi',
    verification: 'pending',
    verified: false,
    rarity: 'rare',
    photos: ['https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400'],
    notes: 'Migration de printemps, direction nord-est'
  }
];

export const mockMembers: Member[] = [
  {
    id: '1',
    name: 'Ahmed Ben Salah',
    email: 'ahmed@aao-tunisie.org',
    role: 'admin',
    joinDate: '2020-01-15',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    specializations: ['Ornithologie', 'Conservation', 'Gestion'],
    contributions: 150
  },
  {
    id: '2',
    name: 'Fatima Trabelsi',
    email: 'fatima@aao-tunisie.org',
    role: 'volunteer',
    joinDate: '2022-03-20',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    specializations: ['Baguage', 'Terrain', 'Éducation'],
    contributions: 89
  },
  {
    id: '3',
    name: 'Youssef Mansouri',
    email: 'youssef@aao-tunisie.org',
    role: 'member',
    joinDate: '2023-06-10',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    specializations: ['Observation', 'Photographie'],
    contributions: 34
  },
  {
    id: '4',
    name: 'Leila Khouja',
    email: 'leila@aao-tunisie.org',
    role: 'employee',
    joinDate: '2021-09-05',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    specializations: ['Recherche', 'Analyse', 'Coordination'],
    contributions: 120
  }
];

export const mockStats = {
  totalMembers: 1250,
  activeVolunteers: 89,
  ongoingProjects: 12,
  protectedSites: 25,
  birdSpecies: 384,
  annualSightings: 15420,
  conservationProjects: 45,
  educationPrograms: 23
};