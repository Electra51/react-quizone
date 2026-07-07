import { apiRequest } from "./client";

export const quizApi = {
  getAllQuizzes(params?: { search?: string; category?: string; difficulty?: string; page?: number; limit?: number }) {
    const query = new URLSearchParams();
    if (params?.search) query.append("search", params.search);
    if (params?.category) query.append("category", params.category);
    if (params?.difficulty) query.append("difficulty", params.difficulty);
    if (params?.page) query.append("page", params.page.toString());
    if (params?.limit) query.append("limit", params.limit.toString());
    
    const queryString = query.toString() ? `?${query.toString()}` : "";
    return apiRequest(`/quizzes${queryString}`);
  },

  getQuizById(id: string) {
    return apiRequest(`/quizzes/${id}`);
  },

  generateAI(data: { topic: string; difficulty: string; questionType: string; numberOfQuestions: number }) {
    return apiRequest("/quizzes/generate-ai", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  saveGenerated(data: { questions: any[]; quizData: any }) {
    return apiRequest("/quizzes/save-generated", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};
