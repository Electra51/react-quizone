import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { topics } from "../../../lib/quizData";

export default function TopicDetailPage({ params }: { params: { slug: string } }) {
  const topic = topics.find((item) => item.slug === params.slug);

  if (!topic) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="container-custom py-16">
        <Link href="/topics" className="text-sm font-semibold text-blue-600">
          ← Back to topics
        </Link>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">{topic.difficulty}</p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900">{topic.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">{topic.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              {topic.questions} questions
            </span>
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
              Ready to practice
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
