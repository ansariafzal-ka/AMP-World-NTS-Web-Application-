import { apiClient } from './client';
import { API_ENDPOINTS } from './endpoints';
import { CMSPage, CMSUser } from '@/types/cms.types';

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export const cmsClient = {
  // ==========================================
  // PAGES
  // ==========================================
  async getAllPages(): Promise<CMSPage[]> {
    try {
      const res = await apiClient.get<ApiResponse<CMSPage[]>>(API_ENDPOINTS.CMS.PAGES);
      return res.data || [];
    } catch {
      // Fallback for local Next.js route
      const res = await apiClient.get<ApiResponse<CMSPage[]>>('/api/cms/pages');
      return res.data || [];
    }
  },

  async getPageById(id: string): Promise<CMSPage | null> {
    try {
      const res = await apiClient.get<ApiResponse<CMSPage>>(API_ENDPOINTS.CMS.PAGE_BY_ID(id));
      return res.data || null;
    } catch {
      try {
        const res = await apiClient.get<ApiResponse<CMSPage>>(`/api/cms/pages/${id}`);
        return res.data || null;
      } catch {
        return null;
      }
    }
  },

  async getPageBySlug(slug: string): Promise<CMSPage | null> {
    try {
      const res = await apiClient.get<ApiResponse<CMSPage>>(API_ENDPOINTS.CMS.PUBLIC_PAGE_BY_SLUG(slug));
      return res.data || null;
    } catch {
      try {
        const res = await apiClient.get<ApiResponse<CMSPage>>(`/api/cms/pages/slug/${slug}`);
        return res.data || null;
      } catch {
        return null;
      }
    }
  },

  async createPage(data: Partial<CMSPage>): Promise<CMSPage> {
    try {
      const res = await apiClient.post<ApiResponse<CMSPage>>(API_ENDPOINTS.CMS.PAGES, data);
      return res.data;
    } catch {
      const res = await apiClient.post<ApiResponse<CMSPage>>('/api/cms/pages', data);
      return res.data;
    }
  },

  async updatePage(id: string, data: Partial<CMSPage>): Promise<CMSPage> {
    try {
      const res = await apiClient.put<ApiResponse<CMSPage>>(API_ENDPOINTS.CMS.PAGE_BY_ID(id), data);
      return res.data;
    } catch {
      const res = await apiClient.put<ApiResponse<CMSPage>>(`/api/cms/pages/${id}`, data);
      return res.data;
    }
  },

  async deletePage(id: string): Promise<boolean> {
    try {
      const res = await apiClient.delete<ApiResponse<{ deleted: boolean }>>(API_ENDPOINTS.CMS.PAGE_BY_ID(id));
      return Boolean(res.success);
    } catch {
      const res = await apiClient.delete<ApiResponse<{ deleted: boolean }>>(`/api/cms/pages/${id}`);
      return Boolean(res.success);
    }
  },

  // ==========================================
  // USERS
  // ==========================================
  async getAllUsers(): Promise<CMSUser[]> {
    try {
      const res = await apiClient.get<ApiResponse<CMSUser[]>>(API_ENDPOINTS.USERS.BASE);
      return res.data || [];
    } catch {
      const res = await apiClient.get<ApiResponse<CMSUser[]>>('/api/cms/users');
      return res.data || [];
    }
  },

  async createUser(data: { name: string; email: string; role: 'Admin' | 'Editor'; password?: string }): Promise<CMSUser> {
    try {
      const res = await apiClient.post<ApiResponse<CMSUser>>(API_ENDPOINTS.USERS.BASE, data);
      return res.data;
    } catch {
      const res = await apiClient.post<ApiResponse<CMSUser>>('/api/cms/users', data);
      return res.data;
    }
  },

  async deleteUser(id: string): Promise<boolean> {
    try {
      const res = await apiClient.delete<ApiResponse<{ deleted: boolean }>>(API_ENDPOINTS.USERS.BY_ID(id));
      return Boolean(res.success);
    } catch {
      const res = await apiClient.delete<ApiResponse<{ deleted: boolean }>>(`/api/cms/users?id=${id}`);
      return Boolean(res.success);
    }
  },
};
