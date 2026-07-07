import { User } from "@/src/types";
import { apiRequest } from "./client";


export interface UpdateProfilePayload {
  fullName?: string;
  avatar?: string;
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

  changePassword(data: ChangePasswordPayload) {
    return apiRequest("/users/me/password", {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  },
};