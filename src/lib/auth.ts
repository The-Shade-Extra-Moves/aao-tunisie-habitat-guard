// Mock authentication system
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'volunteer' | 'member' | 'employee';
  avatar?: string;
  joinDate: string;
  status: 'active' | 'inactive';
  permissions: string[];
}

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@aao-tunisie.org',
    name: 'Ahmed Ben Salah',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    joinDate: '2020-01-15',
    status: 'active',
    permissions: ['all']
  },
  {
    id: '2',
    email: 'volunteer@aao-tunisie.org',
    name: 'Fatima Trabelsi',
    role: 'volunteer',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    joinDate: '2022-03-20',
    status: 'active',
    permissions: ['field_work', 'reporting', 'events']
  },
  {
    id: '3',
    email: 'member@aao-tunisie.org',
    name: 'Youssef Mansouri',
    role: 'member',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    joinDate: '2023-06-10',
    status: 'active',
    permissions: ['events', 'newsletter', 'forum']
  },
  {
    id: '4',
    email: 'employee@aao-tunisie.org',
    name: 'Leila Khouja',
    role: 'employee',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    joinDate: '2021-09-05',
    status: 'active',
    permissions: ['research', 'data_entry', 'coordination']
  }
];

class AuthService {
  private currentUser: User | null = null;
  private listeners: ((user: User | null) => void)[] = [];

  constructor() {
    const savedUser = localStorage.getItem('aao_user');
    if (savedUser) {
      this.currentUser = JSON.parse(savedUser);
    }
  }

  login(email: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = mockUsers.find(u => u.email === email);
        if (user && password === 'password123') {
          this.currentUser = user;
          localStorage.setItem('aao_user', JSON.stringify(user));
          this.notifyListeners();
          resolve(user);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('aao_user');
    this.notifyListeners();
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  hasPermission(permission: string): boolean {
    if (!this.currentUser) return false;
    return this.currentUser.permissions.includes('all') || 
           this.currentUser.permissions.includes(permission);
  }

  subscribe(callback: (user: User | null) => void): () => void {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.currentUser));
  }
}

export const authService = new AuthService();