'use client';

import { useState, useEffect, useCallback } from 'react';
import { Plus, Shield, CheckCircle2, Trash2, Eye, EyeOff, Lock, AlertCircle, Loader2 } from 'lucide-react';
import { CMSUser } from '@/types/cms.types';

export default function CmsUsersPage() {
  const [users, setUsers] = useState<CMSUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [newRole, setNewRole] = useState<'Admin' | 'Editor'>('Editor');

  const fetchUsers = useCallback(async () => {
    try {
      const res = await fetch('/api/cms/users');
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setUsers(data.data);
      }
    } catch (err) {
      console.error('Failed to load CMS users:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleOpenModal = () => {
    setNewName('');
    setNewEmail('');
    setNewPassword('');
    setNewRole('Editor');
    setShowPassword(false);
    setFormError(null);
    setIsAddModalOpen(true);
  };

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newEmail.trim() || !newPassword.trim()) {
      setFormError('Please fill in all required fields.');
      return;
    }

    if (newPassword.trim().length < 6) {
      setFormError('Password must be at least 6 characters long.');
      return;
    }

    setIsSubmitting(true);
    setFormError(null);

    try {
      const res = await fetch('/api/cms/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newName.trim(),
          email: newEmail.trim(),
          role: newRole,
          password: newPassword.trim(),
        }),
      });

      const data = await res.json();
      if (data.success) {
        await fetchUsers();
        setIsAddModalOpen(false);
      } else {
        setFormError(data.message || 'Failed to create user');
      }
    } catch (err: any) {
      setFormError(err.message || 'A network error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteUser = async (id: string, name: string) => {
    if (confirm(`Are you sure you want to remove user "${name}"?`)) {
      try {
        const res = await fetch(`/api/cms/users?id=${encodeURIComponent(id)}`, {
          method: 'DELETE',
        });
        const data = await res.json();
        if (data.success) {
          setUsers((prev) => prev.filter((u) => u.id !== id));
        } else {
          alert(data.message || 'Failed to delete user');
        }
      } catch (err) {
        console.error('Failed to delete user:', err);
      }
    }
  };

  return (
    <div className="p-6 sm:p-8 lg:p-10 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            User Management
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            Manage administrative access and editor permissions for the CMS.
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenModal}
          className="inline-flex items-center gap-2 rounded-xl bg-[#610D17] hover:bg-[#4D0911] text-white px-4 py-2.5 text-sm font-bold shadow-sm transition-all duration-150 active:scale-95 self-start sm:self-auto cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          Add New User
        </button>
      </div>

      {/* Users Table */}
      <div className="rounded-2xl border border-zinc-200/90 bg-white overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-200/80 bg-zinc-50/75 text-[11px] font-black uppercase tracking-wider text-zinc-500">
                <th className="py-3 px-5">User</th>
                <th className="py-3 px-5">Email Address</th>
                <th className="py-3 px-5">Role</th>
                <th className="py-3 px-5">Status</th>
                <th className="py-3 px-5">Last Login</th>
                <th className="py-3 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-sm">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-zinc-400">
                    <Loader2 className="h-5 w-5 animate-spin mx-auto text-[#610D17] mb-2" />
                    Loading CMS users...
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-zinc-400">
                    No users found.
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user.id} className="hover:bg-zinc-50/80 transition-colors">
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fbf2f3] text-sm font-black text-[#610D17]">
                          {user.name.charAt(0)}
                        </div>
                        <span className="font-bold text-zinc-900">{user.name}</span>
                      </div>
                    </td>

                    <td className="py-4 px-5 text-zinc-600 font-mono text-xs">
                      {user.email}
                    </td>

                    <td className="py-4 px-5">
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-bold text-zinc-800">
                        <Shield className="h-3 w-3 text-[#610D17]" />
                        {user.role}
                      </span>
                    </td>

                    <td className="py-4 px-5">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                        {user.status}
                      </span>
                    </td>

                    <td className="py-4 px-5 text-xs text-zinc-400">
                      {user.lastLogin || 'Never'}
                    </td>

                    <td className="py-4 px-5 text-right">
                      <button
                        type="button"
                        onClick={() => handleDeleteUser(user.id, user.name)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer"
                        title="Remove User"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add User Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border border-zinc-200 space-y-5 animate-in fade-in zoom-in-95 duration-150">
            <div>
              <h3 className="text-lg font-bold text-zinc-900">Add CMS User</h3>
              <p className="text-xs text-zinc-500 mt-1">
                Grant editor or administrative permissions with secure login credentials.
              </p>
            </div>

            {formError && (
              <div className="flex items-center gap-2 p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-xl">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleAddUser} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Sarah Khan"
                  className="w-full rounded-xl border border-zinc-200 px-3.5 py-2 text-sm text-zinc-900 focus:border-[#610D17] focus:outline-none"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="e.g. sarah@ampindia.org"
                  className="w-full rounded-xl border border-zinc-200 px-3.5 py-2 text-sm text-zinc-900 focus:border-[#610D17] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                    <Lock className="h-4 w-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={6}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter password (min. 6 characters)"
                    className="w-full rounded-xl border border-zinc-200 pl-9 pr-10 py-2 text-sm text-zinc-900 focus:border-[#610D17] focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-zinc-600"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <p className="text-[11px] text-zinc-400 mt-1">Used by the user to authenticate at /cms/login</p>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                  Role
                </label>
                <select
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value as 'Admin' | 'Editor')}
                  className="w-full rounded-xl border border-zinc-200 px-3.5 py-2 text-sm text-zinc-900 focus:border-[#610D17] focus:outline-none"
                >
                  <option value="Editor">Editor (Can edit and manage pages)</option>
                  <option value="Admin">Admin (Full administrative privileges)</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  disabled={isSubmitting}
                  className="rounded-xl border border-zinc-200 px-4 py-2 text-xs font-semibold text-zinc-600 hover:bg-zinc-50 cursor-pointer disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#610D17] hover:bg-[#4D0911] text-white px-4 py-2 text-xs font-bold shadow-xs transition-colors cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                  {isSubmitting ? 'Saving...' : 'Save User'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
