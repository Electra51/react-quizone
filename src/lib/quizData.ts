export type Topic = {
  slug: string;
  title: string;
  description: string;
  difficulty: string;
  questions: number;
};

export const topics: Topic[] = [
  {
    slug: "react",
    title: "React Fundamentals",
    description: "Master components, props, state, and hooks.",
    difficulty: "Beginner",
    questions: 10,
  },
  {
    slug: "nextjs",
    title: "Next.js App Router",
    description: "Learn routing, layouts, and server components.",
    difficulty: "Intermediate",
    questions: 12,
  },
  {
    slug: "typescript",
    title: "TypeScript Basics",
    description: "Understand types, interfaces, and utility types.",
    difficulty: "Beginner",
    questions: 8,
  },
  {
    slug: "tailwind",
    title: "Tailwind CSS",
    description: "Build responsive interfaces with utility-first CSS.",
    difficulty: "Beginner",
    questions: 9,
  },
];
