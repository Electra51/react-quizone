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

// src/data/mockData.ts (add this at the end)

export const mockBlogPosts = [
  {
    id: "1",
    slug: "mastering-react-hooks-2024",
    title: "Mastering React Hooks: A Complete Guide for 2024",
    excerpt: "Learn advanced React Hooks patterns and best practices to write cleaner, more efficient code in your applications.",
    content: `
      React Hooks revolutionized how we write React components. In this comprehensive guide, we'll explore advanced patterns and best practices.

      ## Understanding useState Deeply

      The useState hook is fundamental, but many developers don't realize its full potential...

      ## useEffect Mastery

      Understanding the dependency array is crucial for avoiding bugs and performance issues...

      ## Custom Hooks

      Creating custom hooks allows you to extract and reuse stateful logic across components...

      ## Performance Optimization

      Learn when to use useMemo and useCallback, and when NOT to use them...
    `,
    category: "React",
    tags: ["React", "Hooks", "Best Practices"],
    author: {
      name: "Sarah Chen",
      avatar: "👩‍💻",
      role: "Senior Frontend Engineer"
    },
    publishDate: "2024-01-15",
    readTime: "8 min read",
    image: "/blog-react-hooks.png",
    featured: true,
    views: 15420
  },
  {
    id: "2",
    slug: "typescript-generics-demystified",
    title: "TypeScript Generics Demystified: From Beginner to Advanced",
    excerpt: "Unlock the power of TypeScript generics with practical examples and real-world use cases that will level up your type safety.",
    content: `
      TypeScript generics are one of the most powerful features, yet many developers find them confusing. Let's break them down.

      ## What Are Generics?

      Generics allow you to write reusable code that works with multiple types while maintaining type safety...

      ## Basic Generic Functions

      Start with simple generic functions and understand how type parameters work...

      ## Generic Constraints

      Learn how to constrain generics to specific types using the extends keyword...

      ## Advanced Patterns

      Explore conditional types, mapped types, and template literal types...
    `,
    category: "TypeScript",
    tags: ["TypeScript", "Generics", "Type Safety"],
    author: {
      name: "Mike Rodriguez",
      avatar: "👨‍💻",
      role: "TypeScript Expert"
    },
    publishDate: "2024-01-10",
    readTime: "12 min read",
    image: "/blog-typescript.png",
    featured: true,
    views: 12850
  },
  {
    id: "3",
    slug: "tailwind-css-tips-and-tricks",
    title: "20 Tailwind CSS Tips and Tricks You Need to Know",
    excerpt: "Discover hidden gems and advanced techniques in Tailwind CSS that will supercharge your styling workflow.",
    content: `
      Tailwind CSS has become the go-to utility-first framework. Here are 20 tips to master it.

      ## 1. Use @apply Sparingly

      While @apply is convenient, overusing it can lead to maintenance issues...

      ## 2. Leverage Group Hover

      Style child elements based on parent hover states effortlessly...

      ## 3. Custom Plugins

      Extend Tailwind with custom plugins for project-specific utilities...

      ## 4. Dark Mode Patterns

      Implement dark mode effectively using Tailwind's built-in support...
    `,
    category: "CSS",
    tags: ["Tailwind CSS", "CSS", "Styling"],
    author: {
      name: "Alex Johnson",
      avatar: "👨‍🎨",
      role: "UI/UX Specialist"
    },
    publishDate: "2024-01-05",
    readTime: "10 min read",
    image: "/blog-tailwind.png",
    featured: false,
    views: 9870
  },
  {
    id: "4",
    slug: "nextjs-app-router-best-practices",
    title: "Next.js App Router: Best Practices and Common Pitfalls",
    excerpt: "Navigate the new Next.js App Router with confidence using these battle-tested best practices and avoiding common mistakes.",
    content: `
      The Next.js App Router brings a paradigm shift in how we build Next.js applications.

      ## Server vs Client Components

      Understanding when to use 'use client' is crucial for performance...

      ## Data Fetching Patterns

      Explore the new data fetching models and caching strategies...

      ## Layouts and Templates

      Master the new routing concepts for better code organization...

      ## Performance Optimization

      Learn techniques to optimize your App Router applications...
    `,
    category: "Next.js",
    tags: ["Next.js", "App Router", "Performance"],
    author: {
      name: "Sarah Chen",
      avatar: "👩‍💻",
      role: "Senior Frontend Engineer"
    },
    publishDate: "2024-01-01",
    readTime: "15 min read",
    image: "/blog-nextjs.png",
    featured: false,
    views: 18230
  },
  {
    id: "5",
    slug: "javascript-async-patterns",
    title: "Modern JavaScript Async Patterns: Promises, Async/Await, and Beyond",
    excerpt: "Master asynchronous JavaScript with modern patterns that will make your code cleaner and more maintainable.",
    content: `
      Asynchronous programming is at the heart of modern JavaScript. Let's explore the evolution and best practices.

      ## Callback Hell to Promises

      Understand how promises solved the callback problem...

      ## Async/Await Magic

      Learn how async/await makes asynchronous code look synchronous...

      ## Error Handling

      Proper error handling in async code is crucial for robust applications...

      ## Advanced Patterns

      Explore Promise.all, Promise.race, and other powerful patterns...
    `,
    category: "JavaScript",
    tags: ["JavaScript", "Async", "Promises"],
    author: {
      name: "Mike Rodriguez",
      avatar: "👨‍💻",
      role: "TypeScript Expert"
    },
    publishDate: "2023-12-28",
    readTime: "11 min read",
    image: "/blog-javascript.png",
    featured: false,
    views: 14560
  },
  {
    id: "6",
    slug: "frontend-interview-preparation",
    title: "The Ultimate Frontend Interview Preparation Guide",
    excerpt: "Ace your next frontend interview with this comprehensive preparation guide covering technical skills and soft skills.",
    content: `
      Preparing for frontend interviews can be daunting. This guide will help you structure your preparation.

      ## Technical Fundamentals

      Master HTML, CSS, JavaScript, and your framework of choice...

      ## System Design

      Learn to design scalable frontend architectures...

      ## Coding Challenges

      Practice common coding patterns and algorithms...

      ## Behavioral Questions

      Prepare for soft skill questions with the STAR method...
    `,
    category: "Career",
    tags: ["Interview", "Career", "Preparation"],
    author: {
      name: "Alex Johnson",
      avatar: "👨‍🎨",
      role: "UI/UX Specialist"
    },
    publishDate: "2023-12-20",
    readTime: "20 min read",
    image: "/blog-interview.png",
    featured: true,
    views: 25680
  }
];

export const mockBlogCategories = [
  { name: "React", count: 24, icon: "⚛️" },
  { name: "TypeScript", count: 18, icon: "📘" },
  { name: "Next.js", count: 15, icon: "▲" },
  { name: "CSS", count: 20, icon: "🎨" },
  { name: "JavaScript", count: 30, icon: "⚡" },
  { name: "Career", count: 12, icon: "💼" }
];