import { apiRequest } from "./client";

export const categoryApi = {
  getAllCategories() {
    return apiRequest("/categories");
  },

  createCategory(data: { name: string; description: string }) {
    return apiRequest("/categories", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  toggleCategory(id: string) {
    return apiRequest(`/categories/${id}/toggle`, {
      method: "PATCH",
    });
  },
};
