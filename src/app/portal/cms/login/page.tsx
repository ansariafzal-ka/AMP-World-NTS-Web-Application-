'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import { useAuthStore } from '@/store/auth.store';
import { API_ENDPOINTS } from '@/lib/api/endpoints';
import { apiClient } from '@/lib/api/client';

export default function CmsLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const setAuth = useAuthStore((state) => state.setAuth);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  // Clear any existing session immediately when viewing login page
  useEffect(() => {
    clearAuth();
    apiClient.post(API_ENDPOINTS.AUTH.LOGOUT).catch(() => {});
  }, [clearAuth]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const data = await apiClient.post<any>(API_ENDPOINTS.AUTH.LOGIN, { email, password });

      const token = data.data?.accessToken || data.token;
      const user = data.data?.user || data.user;

      if (token && user) {
        setAuth(token, user);
      }

      window.location.href = '/portal/cms';
    } catch (err: any) {
      setError(err.message || 'Invalid email or password. Access denied.');
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-50 via-zinc-100 to-rose-50/30 p-4">
      <div className="w-full max-w-md rounded-3xl border border-zinc-200/90 bg-white p-8 shadow-xl space-y-6">
        {/* Logo & Header */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <Image
              src="/amp_Logo.png"
              alt="Association of Muslim Professionals Logo"
              width={160}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </div>

          <div>
            <h1 className="text-2xl font-black tracking-tight text-zinc-900">
              CMS Portal Login
            </h1>
            <p className="text-xs text-zinc-500 mt-1">
              Sign in to manage dynamic pages and component layouts.
            </p>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs font-bold text-rose-700 animate-in fade-in">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
              Email Address
            </label>
            <div className="flex items-center rounded-xl border border-zinc-200 px-3.5 py-2.5 focus-within:border-[#4A0E17] focus-within:ring-1 focus-within:ring-[#4A0E17]">
              <Mail className="h-4 w-4 text-zinc-400 mr-2 shrink-0" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-sm text-zinc-900 focus:outline-none"
                placeholder="admin@ampindia.org"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
              Password
            </label>
            <div className="flex items-center rounded-xl border border-zinc-200 px-3.5 py-2.5 focus-within:border-[#4A0E17] focus-within:ring-1 focus-within:ring-[#4A0E17]">
              <Lock className="h-4 w-4 text-zinc-400 mr-2 shrink-0" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-sm text-zinc-900 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#4A0E17] hover:bg-[#380910] text-white py-3 text-sm font-bold shadow-md transition-all active:scale-[0.99] disabled:opacity-70"
          >
            {isLoading ? (
              'Verifying...'
            ) : (
              <>
                Sign In to CMS
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>

        <div className="pt-2 text-center">
          <p className="text-xs text-zinc-400">
            AMP NTS Administration & Content Management System
          </p>
        </div>
      </div>
    </div>
  );
}
