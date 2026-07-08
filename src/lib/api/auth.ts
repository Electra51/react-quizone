import { apiRequest } from "./client";
export interface RegisterPayload {
  fullName: string;
  email: string;
  password: string;
  role?: string;
}

export interface AuthResponse {
  user: {
    _id: string;
    email: string;
    role: string;
    fullName: string;
  };
  accessToken: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export const authApi = {
  register(data: RegisterPayload) {
    return apiRequest<{ user: AuthResponse["user"] }>("/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  login(data: LoginPayload) {
    return apiRequest<AuthResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  logout() {
    return apiRequest("/auth/logout", {
      method: "POST",
    });
  },

  refresh() {
    return apiRequest("/auth/refresh-tokens", {
      method: "POST",
    });
  },
};