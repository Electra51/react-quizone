import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";


const stats = [
  { label: "Active learners", value: "1.2k+" },
  { label: "Weekly quizzes", value: "320" },
  { label: "Average score", value: "87%" },
  { label: "Topics covered", value: "24" },
];

export default function StatisticsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="container-custom py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Statistics</p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900">A simple snapshot of the learning journey</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card">
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <p className="mt-3 text-3xl font-semibold text-slate-900">{stat.value}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
