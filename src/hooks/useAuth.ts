import { useState, useEffect } from 'react';
import { authService, User } from '@/lib/auth';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(authService.getCurrentUser());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = authService.subscribe(setUser);
    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const user = await authService.login(email, password);
      return user;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
  };

  const hasPermission = (permission: string) => {
    return authService.hasPermission(permission);
  };

  return {
    user,
    loading,
    login,
    logout,
    hasPermission,
    isAuthenticated: authService.isAuthenticated()
  };
};