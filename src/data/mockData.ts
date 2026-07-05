// src/data/mockData.ts

export const mockQuizCategories = [
  {
    id: "1",
    name: "React",
    icon: "🎯",
    description: "Test your React knowledge",
    totalQuizzes: 12,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "2",
    name: "TypeScript",
    icon: "📘",
    description: "Master TypeScript concepts",
    totalQuizzes: 8,
    color: "from-blue-600 to-blue-800"
  },
  {
    id: "3",
    name: "CSS & Tailwind",
    icon: "🎨",
    description: "Styling & layout challenges",
    totalQuizzes: 15,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "4",
    name: "JavaScript",
    icon: "⚡",
    description: "Core JS fundamentals",
    totalQuizzes: 20,
    color: "from-yellow-500 to-orange-500"
  }
];

export const mockPopularAssessments = [
  {
    id: "quiz-1",
    title: "React Hooks Mastery",
    category: "React",
    difficulty: "Intermediate",
    duration: "30 mins",
    questions: 15,
    enrolled: 1234,
    rating: 4.8,
    image: "/quiz-react.png"
  },
  {
    id: "quiz-2",
    title: "TypeScript Advanced Types",
    category: "TypeScript",
    difficulty: "Advanced",
    duration: "45 mins",
    questions: 20,
    enrolled: 856,
    rating: 4.9,
    image: "/quiz-ts.png"
  },
  {
    id: "quiz-3",
    title: "CSS Grid & Flexbox",
    category: "CSS",
    difficulty: "Beginner",
    duration: "20 mins",
    questions: 10,
    enrolled: 2100,
    rating: 4.7,
    image: "/quiz-css.png"
  }
];

export const mockTopPerformers = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "/avatar-1.png",
    score: 98,
    rank: 1,
    badges: ["React Expert", "Speed Demon"]
  },
  {
    id: "2",
    name: "Mike Chen",
    avatar: "/avatar-2.png",
    score: 96,
    rank: 2,
    badges: ["TypeScript Pro"]
  },
  {
    id: "3",
    name: "Emily Davis",
    avatar: "/avatar-3.png",
    score: 94,
    rank: 3,
    badges: ["CSS Wizard"]
  }
];

export const mockTestimonials = [
  {
    id: "1",
    name: "John Smith",
    role: "Senior Frontend Developer",
    company: "Tech Corp",
    avatar: "/testimonial-1.png",
    content: "FrontendIQ helped me identify my weak areas and improve my React skills significantly. The AI analysis is incredibly accurate!",
    rating: 5
  },
  {
    id: "2",
    name: "Lisa Wang",
    role: "Full Stack Developer",
    company: "StartupXYZ",
    avatar: "/testimonial-2.png",
    content: "The coding challenges are realistic and the instant feedback is invaluable. Best assessment platform I've used.",
    rating: 5
  }
];

export const mockFAQs = [
  {
    id: "1",
    question: "How does the AI skill analysis work?",
    answer: "Our AI analyzes your code, answers, and time taken to provide detailed insights into your strengths and areas for improvement."
  },
  {
    id: "2",
    question: "Can I retake assessments?",
    answer: "Yes! You can retake any assessment to improve your score. Your best score will be displayed on your profile."
  },
  {
    id: "3",
    question: "Is there a free trial?",
    answer: "Absolutely! Start with 3 free assessments to experience our platform before committing to a subscription."
  }
];

export const mockQuizDetails = {
  id: "quiz-1",
  title: "React Hooks Mastery",
  description: "Test your knowledge of React Hooks including useState, useEffect, useContext, and custom hooks.",
  category: "React",
  difficulty: "Intermediate",
  duration: 30,
  totalQuestions: 15,
  passingScore: 70,
  questions: [
    {
      id: "q1",
      type: "mcq",
      question: "What is the correct way to initialize useState?",
      options: [
        "const [state, setState] = useState()",
        "const state = useState()",
        "useState(state, setState)",
        "const [state] = useState()"
      ],
      correctAnswer: "const [state, setState] = useState()",
      points: 10
    },
    {
      id: "q2",
      type: "mcq",
      question: "When does useEffect run by default?",
      options: [
        "Only on mount",
        "After every render",
        "Only on unmount",
        "Before render"
      ],
      correctAnswer: "After every render",
      points: 10
    }
  ]
};

export const mockAIAnalysis = {
  overallScore: 85,
  strengths: [
    "Strong understanding of React Hooks",
    "Good problem-solving approach",
    "Clean code structure"
  ],
  weaknesses: [
    "Need to improve error handling",
    "Optimization techniques"
  ],
  skillBreakdown: {
    react: 90,
    typescript: 75,
    css: 80,
    javascript: 85
  },
  recommendations: [
    "Practice advanced useEffect patterns",
    "Study React performance optimization",
    "Learn TypeScript generics"
  ]
};