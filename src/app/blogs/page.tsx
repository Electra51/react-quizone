import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";


const posts = [
  {
    title: "How to structure a modern quiz app",
    excerpt: "A clean folder layout makes growth easier for every team.",
  },
  {
    title: "Why Next.js App Router is ideal for content-rich apps",
    excerpt: "Layouts, nested routes, and shared UI all work naturally together.",
  },
  {
    title: "Tailwind CSS v4 tips for faster UI development",
    excerpt: "Use utility classes to move from mockup to polished UI quickly.",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="container-custom py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Blogs</p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900">Fresh notes from the FrontendIQ team</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="card">
              <h2 className="text-xl font-semibold text-slate-900">{post.title}</h2>
              <p className="mt-3 text-slate-600">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
