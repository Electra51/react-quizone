export interface QuizCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  totalQuizzes: number;
  color: string;
}

export interface Assessment {
  id: string;
  title: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  questions: number;
  enrolled: number;
  rating: number;
  image: string;
}

export interface TopPerformer {
  id: string;
  name: string;
  avatar: string;
  score: number;
  rank: number;
  badges: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Question {
  id: string;
  type: "mcq" | "coding";
  question: string;
  options?: string[];
  correctAnswer: string;
  points: number;
}

export interface QuizDetails {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  duration: number;
  totalQuestions: number;
  passingScore: number;
  questions: Question[];
}

export interface AIAnalysis {
  overallScore: number;
  strengths: string[];
  weaknesses: string[];
  skillBreakdown: {
    react: number;
    typescript: number;
    css: number;
    javascript: number;
  };
  recommendations: string[];
}