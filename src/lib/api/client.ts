/**
 * Centralized API Client
 * Follows Next.js architecture guidelines (Page 2 & 4 of PDF):
 * Native fetch through a centralized API client with automatic JWT bearer token handling.
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean>;
}

class ApiClient {
  private formatUrl(endpoint: string, params?: Record<string, string | number | boolean>): string {
    const url = endpoint.startsWith('http') ? endpoint : `${BASE_URL}${endpoint}`;
    if (!params) return url;

    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });

    const queryString = searchParams.toString();
    return queryString ? `${url}?${queryString}` : url;
  }

  private getAuthToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('amp_auth_token');
    }
    return null;
  }

  private async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { params, headers = {}, ...customConfig } = options;
    const url = this.formatUrl(endpoint, params);

    const token = this.getAuthToken();
    const authHeaders: Record<string, string> = {};

    if (token) {
      authHeaders['Authorization'] = `Bearer ${token}`;
    }

    const config: RequestInit = {
      ...customConfig,
      headers: {
        'Content-Type': 'application/json',
        ...authHeaders,
        ...headers,
      },
      credentials: 'include',
      cache: customConfig.cache || 'no-store',
    };

    const response = await fetch(url, config);

    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch {
        // use fallback message
      }
      throw new Error(errorMessage);
    }

    // Handle 204 No Content
    if (response.status === 204) {
      return {} as T;
    }

    return response.json();
  }

  get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  post<T>(endpoint: string, data?: unknown, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  put<T>(endpoint: string, data?: unknown, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
}

export const apiClient = new ApiClient();
export default apiClient;
