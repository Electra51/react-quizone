import { User } from "@/src/types";
import { apiRequest } from "./client";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5000/api";

export interface UpdateProfilePayload {
  fullName?: string;
  bio?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  experience?: number;
  skills?: string[];
}

export interface ChangePasswordPayload {
  currentPassword: string;
  newPassword: string;
}

export const userApi = {
  getProfile() {
    return apiRequest<User>("/users/me");
  },

  updateProfile(data: UpdateProfilePayload) {
    return apiRequest<User>("/users/me", {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  },

  uploadAvatar: async (file: File) => {
    const formData = new FormData();

    formData.append("avatar", file);

    const response = await fetch(
      `${API_URL}/users/me/avatar`,
      {
        method: "PATCH",
        credentials: "include",
        body: formData,
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Avatar upload failed"
      );
    }

    return data;
  },

  changePassword(data: ChangePasswordPayload) {
    return apiRequest("/users/me/password", {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  },

  getDashboardStats() {
    return apiRequest("/users/me/dashboard", {
      method: "GET",
    });
  },
};