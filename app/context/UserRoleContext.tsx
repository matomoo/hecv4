// context/UserRoleContext.tsx
"use client"
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { getAuth } from '@clerk/nextjs/server';

type UserRoleContextType = {
  role: string;
  refreshRole: () => void;
};

const UserRoleContext = createContext<UserRoleContextType | undefined>(undefined);

export const UserRoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useUser();
  const [role, setRole] = useState<string>('roless');

  const refreshRole = useCallback(async () => {
    if (user) {
      await user.reload(); // Reload data user terbaru dari Clerk
      const newRole = (user.publicMetadata?.role as string) || 'guest';
      if (newRole !== role) {
        setRole(newRole);
      }
    }
  }, [user, role]);

  // Perbarui role ketika komponen pertama kali di-mount atau user berubah
  useEffect(() => {
    const newRole = user?.publicMetadata?.role as string || 'roless';
    if (newRole !== role) {
      setRole(newRole);
    }
  }, [user, user?.publicMetadata?.role]);

  return (
    <UserRoleContext.Provider value={{ role, refreshRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};

// Custom hook untuk menggunakan UserRoleContext
export const useUserRole = () => {
  const context = useContext(UserRoleContext);
  if (!context) {
    throw new Error('useUserRole harus digunakan dalam UserRoleProvider');
  }
  return context;
};
