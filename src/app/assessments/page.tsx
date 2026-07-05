import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export const metadata: Metadata = {
  title: "Frontend Assessments",
  description:
    "Explore structured frontend developer assessments covering React, Next.js, TypeScript, and Tailwind CSS.",
  alternates: {
    canonical: "/assessments",
  },
};

const assessmentTracks = [
  {
    title: "React Fundamentals",
    description: "Test component thinking, hooks, state handling, and rendering patterns.",
  },
  {
    title: "Next.js App Router",
    description: "Evaluate route design, layouts, loading states, and data flow strategies.",
  },
  {
    title: "TypeScript for Frontend Teams",
    description: "Check type safety, interfaces, generics, and scalable component design.",
  },
  {
    title: "Tailwind CSS UI Skills",
    description: "Measure utility-first styling, responsive composition, and design consistency.",
  },
];

export default function AssessmentsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="container-custom py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Assessments</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
            Build confidence with focused frontend assessment tracks.
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            FrontendIQ gives learners and hiring teams a structured way to assess modern frontend capability using practical questions and real-world scenarios.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {assessmentTracks.map((track) => (
            <article key={track.title} className="card">
              <h2 className="text-xl font-semibold text-slate-900">{track.title}</h2>
              <p className="mt-3 text-slate-600">{track.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Ready to start?</h2>
          <p className="mt-3 text-slate-600">
            Use FrontendIQ to evaluate candidates, train developers, or sharpen your own frontend skills.
          </p>
          <Link href="/topics" className="mt-6 inline-flex text-blue-600 hover:text-blue-700">
            Explore practice topics →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
