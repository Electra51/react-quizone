// src/app/(marketing)/blog/[slug]/not-found.tsx
import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-6">📝</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          The article you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/blog"
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  );
}