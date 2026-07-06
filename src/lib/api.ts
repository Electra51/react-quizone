const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

// ✅ Base fetch function with credentials
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    credentials: "include", // ✅ Send/receive cookies
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "API request failed");
  }

  return data;
}

// Auth API
export const authApi = {
  register: async (data: {
    fullName: string;
    email: string;
    password: string;
  }) => {
    return apiRequest<{ user: any }>("/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  login: async (data: { email: string; password: string }) => {
    return apiRequest<{ user: any }>("/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  logout: async () => {
    return apiRequest("/auth/logout", {
      method: "POST",
    });
  },

  getMe: async () => {
    return apiRequest<{ user: any }>("/auth/me");
  },
};