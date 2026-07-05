// src/app/(marketing)/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about FrontendIQ's mission to revolutionize frontend developer assessments with AI-powered technology.",
};

export default function AboutPage() {
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "10+ years in frontend development. Previously at Google and Meta.",
      avatar: "👨‍💼",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "AI/ML expert with passion for developer tools. Ex-Microsoft.",
      avatar: "👩‍💻",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Mike Rodriguez",
      role: "Head of Product",
      bio: "Product leader focused on developer experience. 8+ years in EdTech.",
      avatar: "👨‍🎨",
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  const stats = [
    { value: "50K+", label: "Developers Assessed" },
    { value: "500+", label: "Companies Trust Us" },
    { value: "95%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Accuracy First",
      description: "Our AI models are trained on real-world code to provide the most accurate skill assessments."
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "We constantly evolve our platform with cutting-edge technology to stay ahead of industry trends."
    },
    {
      icon: "🤝",
      title: "Community",
      description: "Building a supportive community where developers can learn, grow, and succeed together."
    },
    {
      icon: "🔒",
      title: "Trust & Security",
      description: "Your data and code are secure with enterprise-grade encryption and privacy protections."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-linear-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Empowering Developers to
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Excel</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're on a mission to revolutionize how frontend developers are assessed and hired, 
            using AI to provide fair, accurate, and insightful evaluations.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              FrontendIQ was born from a simple observation: traditional coding interviews don't accurately 
              reflect a developer's true abilities. We saw talented developers struggle with artificial 
              constraints while less skilled candidates excelled at memorization.
            </p>
            <p>
              In 2023, our founding team came together with a shared vision: create an assessment platform 
              that evaluates real-world skills using AI-powered analysis. We combined decades of experience 
              in frontend development, machine learning, and education technology to build something truly different.
            </p>
            <p>
              Today, FrontendIQ is trusted by thousands of developers and hundreds of companies worldwide. 
              Our AI-driven assessments provide deeper insights than traditional methods, helping both 
              developers showcase their true potential and companies find the perfect candidates.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-8 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-linear-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Meet Our Team</h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Passionate experts dedicated to transforming developer assessments
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-linear-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Assessment Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of developers who are showcasing their true potential with FrontendIQ
          </p>
          <a
            href="/register"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl transition transform hover:scale-105"
          >
            Get Started Free
          </a>
        </div>
      </section>
    </div>
  );
}