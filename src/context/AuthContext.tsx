"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { userApi } from "../lib/api/user";
import { authApi } from "../lib/api/auth";



export interface User {
  _id: string;
  fullName: string;
  email: string;
  avatar?: string;
  role: "candidate" | "admin";
  bio?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  experience?: number;
  skills?: string[];
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;

  login: (
    email: string,
    password: string
  ) => Promise<void>;

  register: (
    fullName: string,
    email: string,
    password: string
  ) => Promise<void>;

  logout: () => Promise<void>;

  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  /**
   * Fetch logged in user
   */
  const refreshUser = useCallback(async () => {
    try {
      const response = await userApi.getProfile();

      setUser(response.data ?? null);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Check auth state on first load
   */
  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  /**
   * Login
   */
  const login = useCallback(
    async (email: string, password: string) => {
      setIsLoading(true);

      try {
        await authApi.login({
          email,
          password,
        });

        // Cookie is already set by backend
        await refreshUser();
      } finally {
        setIsLoading(false);
      }
    },
    [refreshUser]
  );

  /**
   * Register
   */
  const register = useCallback(
    async (
      fullName: string,
      email: string,
      password: string
    ) => {
      setIsLoading(true);

      try {
        await authApi.register({
          fullName,
          email,
          password,
        });
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  /**
   * Logout
   */
  const logout = useCallback(async () => {
    try {
      await authApi.logout();
    } finally {
      setUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within AuthProvider"
    );
  }

  return context;
}