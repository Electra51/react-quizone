// src/services/aiService.ts

export interface GeneratedQuestion {
  id: string;
  type: "mcq" | "coding";
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: "Easy" | "Medium" | "Hard";
  points: number;
  codeStarter?: string;
  testCases?: string[];
}

export interface QuizGenerationRequest {
  topic: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Mixed";
  questionType: "mcq" | "coding" | "mixed";
  numberOfQuestions: number;
}

export interface QuizGenerationResponse {
  success: boolean;
  message: string;
  questions?: GeneratedQuestion[];
  error?: string;
}

// Mock AI Quiz Generator
export async function mockGenerateQuiz(
  data: QuizGenerationRequest
): Promise<QuizGenerationResponse> {
  // Simulate AI processing time (3-5 seconds)
  await new Promise((resolve) => setTimeout(resolve, 3000 + Math.random() * 2000));

  const questions: GeneratedQuestion[] = [];

  // Generate questions based on topic and type
  for (let i = 0; i < data.numberOfQuestions; i++) {
    const questionType =
      data.questionType === "mixed"
        ? Math.random() > 0.5
          ? "mcq"
          : "coding"
        : data.questionType;

    const difficulty =
      data.difficulty === "Mixed"
        ? (["Easy", "Medium", "Hard"] as const)[Math.floor(Math.random() * 3)]
        : data.difficulty;

    if (questionType === "mcq") {
      questions.push(generateMockMCQ(data.topic, difficulty, i + 1));
    } else {
      questions.push(generateMockCodingQuestion(data.topic, difficulty, i + 1));
    }
  }

  return {
    success: true,
    message: `Successfully generated ${questions.length} questions`,
    questions,
  };
}

function generateMockMCQ(
  topic: string,
  difficulty: string,
  index: number
): GeneratedQuestion {
  const mcqTemplates = {
    React: [
      {
        question: `What is the correct way to handle state updates in React ${difficulty === "Hard" ? "with complex objects" : "components"}?`,
        options: [
          "Mutate the state directly",
          "Use setState with a new object",
          "Use forceUpdate()",
          "Modify props directly",
        ],
        correctAnswer: "Use setState with a new object",
        explanation:
          "React state should be treated as immutable. Always create a new object when updating state to trigger re-renders properly.",
      },
      {
        question: `Which hook would you use to ${difficulty === "Hard" ? "optimize expensive calculations" : "perform side effects"} in React?`,
        options: ["useState", "useEffect", "useMemo", "useRef"],
        correctAnswer: difficulty === "Hard" ? "useMemo" : "useEffect",
        explanation:
          difficulty === "Hard"
            ? "useMemo memoizes expensive calculations to prevent unnecessary re-computations."
            : "useEffect is designed for side effects like API calls, subscriptions, and DOM manipulations.",
      },
      {
        question: `What is the purpose of ${difficulty === "Hard" ? "React.memo() with custom comparison" : "the key prop"} in React?`,
        options: [
          "To style components",
          "To help React identify which items have changed",
          "To pass data to child components",
          "To create refs",
        ],
        correctAnswer: "To help React identify which items have changed",
        explanation:
          "Keys help React identify which items have changed, been added, or removed for efficient re-rendering.",
      },
    ],
    TypeScript: [
      {
        question: `What is the difference between ${difficulty === "Hard" ? "generic constraints with extends" : "interface and type"} in TypeScript?`,
        options: [
          "No difference",
          "Interfaces can be extended, types cannot",
          "Types are faster",
          "Interfaces are deprecated",
        ],
        correctAnswer: "Interfaces can be extended, types cannot",
        explanation:
          "While both can be extended, interfaces have declaration merging capabilities and are generally preferred for object shapes.",
      },
      {
        question: `How do you create a ${difficulty === "Hard" ? "conditional type with infer" : "generic function"} in TypeScript?`,
        options: [
          "function foo<T>(arg: T): T { return arg; }",
          "function foo(arg: any): any { return arg; }",
          "function foo<T>(arg): T { return arg; }",
          "function<T> foo(arg: T): T { return arg; }",
        ],
        correctAnswer: "function foo<T>(arg: T): T { return arg; }",
        explanation:
          "Generic functions use type parameters in angle brackets to work with multiple types while maintaining type safety.",
      },
    ],
    CSS: [
      {
        question: `What is the ${difficulty === "Hard" ? "most performant way to animate" : "difference between"} CSS ${difficulty === "Hard" ? "using transform vs top/left" : "Flexbox and Grid"}?`,
        options: [
          "Flexbox is 1D, Grid is 2D",
          "Grid is 1D, Flexbox is 2D",
          "They are the same",
          "Flexbox is deprecated",
        ],
        correctAnswer: "Flexbox is 1D, Grid is 2D",
        explanation:
          "Flexbox works in one dimension (row OR column), while Grid works in two dimensions (rows AND columns).",
      },
    ],
    JavaScript: [
      {
        question: `What is the output of ${difficulty === "Hard" ? "Promise.allSettled() vs Promise.all()" : "typeof null"} in JavaScript?`,
        options: ["null", "undefined", "object", "number"],
        correctAnswer: "object",
        explanation:
          "This is a known JavaScript quirk. typeof null returns 'object' due to a legacy bug in the language.",
      },
      {
        question: `What does the ${difficulty === "Hard" ? "event loop microtask queue" : "async/await"} keyword do?`,
        options: [
          "Makes code run faster",
          "Pauses execution until promise resolves",
          "Creates a new thread",
          "Prevents errors",
        ],
        correctAnswer: "Pauses execution until promise resolves",
        explanation:
          "The await keyword pauses the async function execution until the promise is settled, then resumes with the resolved value.",
      },
    ],
  };

  const topicQuestions =
    mcqTemplates[topic as keyof typeof mcqTemplates] || mcqTemplates.React;
  const template = topicQuestions[index % topicQuestions.length];

  return {
    id: `q-${Date.now()}-${index}`,
    type: "mcq",
    question: template.question,
    options: template.options,
    correctAnswer: template.correctAnswer,
    explanation: template.explanation,
    difficulty: difficulty as "Easy" | "Medium" | "Hard",
    points: difficulty === "Easy" ? 5 : difficulty === "Medium" ? 10 : 15,
  };
}

function generateMockCodingQuestion(
  topic: string,
  difficulty: string,
  index: number
): GeneratedQuestion {
  const codingTemplates = [
    {
      question: `Implement a ${difficulty === "Hard" ? "debounce function with leading/trailing options" : "function that reverses a string"} without using built-in methods.`,
      codeStarter: `function ${difficulty === "Hard" ? "debounce" : "reverseString"}(input) {\n  // Your code here\n  \n}`,
      testCases: [
        'reverseString("hello") should return "olleh"',
        'reverseString("world") should return "dlrow"',
        'reverseString("") should return ""',
      ],
      correctAnswer: "Implementation should handle edge cases",
      explanation: "Consider edge cases like empty strings, single characters, and unicode.",
    },
    {
      question: `Create a ${difficulty === "Hard" ? "deep clone function that handles circular references" : "function that finds the maximum number in an array"} without using Math.max().`,
      codeStarter: `function ${difficulty === "Hard" ? "deepClone" : "findMax"}(arr) {\n  // Your code here\n  \n}`,
      testCases: [
        "findMax([1, 5, 3, 9, 2]) should return 9",
        "findMax([-1, -5, -3]) should return -1",
        "findMax([]) should return undefined",
      ],
      correctAnswer: "Implementation should handle empty arrays",
      explanation: "Use reduce or a simple loop to track the maximum value.",
    },
  ];

  const template = codingTemplates[index % codingTemplates.length];

  return {
    id: `q-${Date.now()}-${index}`,
    type: "coding",
    question: template.question,
    codeStarter: template.codeStarter,
    testCases: template.testCases,
    correctAnswer: template.correctAnswer,
    explanation: template.explanation,
    difficulty: difficulty as "Easy" | "Medium" | "Hard",
    points: difficulty === "Easy" ? 10 : difficulty === "Medium" ? 20 : 30,
  };
}