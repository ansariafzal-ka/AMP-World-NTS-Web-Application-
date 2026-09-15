import { create } from 'zustand';
import { CMSUser } from '@/types/cms.types';

interface AuthState {
  token: string | null;
  user: CMSUser | null;
  isAuthenticated: boolean;
  setAuth: (token: string, user: CMSUser) => void;
  clearAuth: () => void;
  loadFromStorage: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  isAuthenticated: false,

  setAuth: (token: string, user: CMSUser) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('amp_auth_token', token);
      localStorage.setItem('amp_auth_user', JSON.stringify(user));
      document.cookie = `amp_auth_token=${token}; path=/; max-age=86400; SameSite=Lax`;
    }
    set({ token, user, isAuthenticated: true });
  },

  clearAuth: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('amp_auth_token');
      localStorage.removeItem('amp_auth_user');
      document.cookie = 'amp_auth_token=; path=/; max-age=0; SameSite=Lax';
      document.cookie = 'cms_session=; path=/; max-age=0; SameSite=Lax';
    }
    set({ token: null, user: null, isAuthenticated: false });
  },

  loadFromStorage: () => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('amp_auth_token');
      const userRaw = localStorage.getItem('amp_auth_user');
      if (token && userRaw) {
        try {
          const user = JSON.parse(userRaw);
          set({ token, user, isAuthenticated: true });
        } catch {
          set({ token: null, user: null, isAuthenticated: false });
        }
      }
    }
  },
}));
