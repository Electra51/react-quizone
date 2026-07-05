import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { topics } from "../../lib/quizData";
import { Footer } from "../../components/Footer";




export default function TopicsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="container-custom py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Topics</p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900">Pick your next quiz challenge</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {topics.map((topic) => (
            <article key={topic.slug} className="card">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-900">{topic.title}</h2>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                  {topic.difficulty}
                </span>
              </div>
              <p className="mt-3 text-slate-600">{topic.description}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                <span>{topic.questions} questions</span>
                <Link href={`/topics/${topic.slug}`} className="font-semibold text-blue-600 hover:text-blue-700">
                  Start quiz →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
