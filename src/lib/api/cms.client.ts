import { apiClient } from './client';
import { API_ENDPOINTS } from './endpoints';
import { CMSPage, CMSUser } from '@/types/cms.types';

interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  data: T;
  message?: string;
}

export const cmsClient = {
  // ==========================================
  // PAGES
  // ==========================================
  async getAllPages(): Promise<CMSPage[]> {
    const res = await apiClient.get<ApiResponse<CMSPage[]>>(API_ENDPOINTS.CMS.PAGES);
    return res.data || [];
  },

  async getPageById(id: string): Promise<CMSPage | null> {
    const res = await apiClient.get<ApiResponse<CMSPage>>(API_ENDPOINTS.CMS.PAGE_BY_ID(id));
    return res.data || null;
  },

  async getPageBySlug(slug: string): Promise<CMSPage | null> {
    const cleanSlug = slug.replace(/^\/+/, '');
    const res = await apiClient.get<ApiResponse<CMSPage>>(API_ENDPOINTS.CMS.PUBLIC_PAGE_BY_SLUG(cleanSlug));
    return res.data || null;
  },

  async createPage(data: Partial<CMSPage>): Promise<CMSPage> {
    const res = await apiClient.post<ApiResponse<CMSPage>>(API_ENDPOINTS.CMS.PAGES, data);
    return res.data;
  },

  async updatePage(id: string, data: Partial<CMSPage>): Promise<CMSPage> {
    const res = await apiClient.put<ApiResponse<CMSPage>>(API_ENDPOINTS.CMS.PAGE_BY_ID(id), data);
    return res.data;
  },

  async deletePage(id: string): Promise<boolean> {
    const res = await apiClient.delete<ApiResponse<{ deleted: boolean }>>(API_ENDPOINTS.CMS.PAGE_BY_ID(id));
    return Boolean(res.success);
  },

  // ==========================================
  // USERS
  // ==========================================
  async getAllUsers(): Promise<CMSUser[]> {
    const res = await apiClient.get<ApiResponse<CMSUser[]>>(API_ENDPOINTS.USERS.BASE);
    return res.data || [];
  },

  async createUser(data: { name: string; email: string; role: 'Admin' | 'Editor'; password?: string }): Promise<CMSUser> {
    const res = await apiClient.post<ApiResponse<CMSUser>>(API_ENDPOINTS.USERS.BASE, data);
    return res.data;
  },

  async deleteUser(id: string): Promise<boolean> {
    const res = await apiClient.delete<ApiResponse<{ deleted: boolean }>>(API_ENDPOINTS.USERS.BY_ID(id));
    return Boolean(res.success);
  },
};
