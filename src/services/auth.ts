// src/services/auth.ts

import { LoginFormData, RegisterFormData } from "../lib/validations/auth";

// Mock users database
const mockUsers = [
  {
    id: "1",
    email: "demo@frontendiq.com",
    password: "Demo@1234",
    fullName: "Demo User",
    role: "candidate",
  },
];

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: {
    id: string;
    email: string;
    fullName: string;
    role: string;
  };
  token?: string;
}

// Mock login function
export async function mockLogin(data: LoginFormData): Promise<AuthResponse> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const user = mockUsers.find(
    (u) => u.email === data.email && u.password === data.password
  );

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password. Try demo@frontendiq.com / Demo@1234",
    };
  }

  return {
    success: true,
    message: "Login successful!",
    user: {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
    },
    token: "mock-jwt-token-" + Date.now(),
  };
}

// Mock register function
export async function mockRegister(data: RegisterFormData): Promise<AuthResponse> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Check if email already exists
  const existingUser = mockUsers.find((u) => u.email === data.email);
  if (existingUser) {
    return {
      success: false,
      message: "An account with this email already exists",
    };
  }

  // Create new user (mock)
  const newUser = {
    id: String(mockUsers.length + 1),
    email: data.email,
    password: data.password,
    fullName: data.fullName,
    role: "candidate",
  };

  mockUsers.push(newUser);

  return {
    success: true,
    message: "Registration successful! Please login.",
    user: {
      id: newUser.id,
      email: newUser.email,
      fullName: newUser.fullName,
      role: newUser.role,
    },
    token: "mock-jwt-token-" + Date.now(),
  };
}