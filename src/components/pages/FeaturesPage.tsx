// src/app/(marketing)/features/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Zap,
  Shield,
  BarChart3,
  Users,
  Sparkles,
  Target,
  Clock,
  Award,
  FileText,
  Globe,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: Brain,
      title: "AI Skill Analysis",
      description: "Get detailed insights into your strengths and weaknesses with our advanced AI-powered analysis.",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time code analysis",
        "Performance metrics",
        "Personalized recommendations",
        "Skill gap identification"
      ]
    },
    {
      icon: Sparkles,
      title: "AI Quiz Generator",
      description: "Create customized assessments in seconds with our intelligent question generation system.",
      color: "from-purple-500 to-pink-500",
      features: [
        "Topic-specific questions",
        "Difficulty adjustment",
        "Multiple question types",
        "Instant generation"
      ]
    },
    {
      icon: Code2,
      title: "Live Code Editor",
      description: "Write and test code directly in the browser with our powerful Monaco-based editor.",
      color: "from-green-500 to-emerald-500",
      features: [
        "Syntax highlighting",
        "Auto-completion",
        "Multiple languages",
        "Instant preview"
      ]
    },
    {
      icon: Shield,
      title: "Anti-Cheating System",
      description: "Ensure assessment integrity with advanced monitoring and security features.",
      color: "from-red-500 to-orange-500",
      features: [
        "Tab switch detection",
        "Copy-paste prevention",
        "Full-screen enforcement",
        "Behavioral analysis"
      ]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track progress with comprehensive dashboards and detailed performance reports.",
      color: "from-yellow-500 to-amber-500",
      features: [
        "Progress tracking",
        "Skill radar charts",
        "Historical data",
        "Exportable reports"
      ]
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Manage teams, assign assessments, and track collective performance effortlessly.",
      color: "from-indigo-500 to-blue-500",
      features: [
        "Role-based access",
        "Team assignments",
        "Bulk operations",
        "Collaborative features"
      ]
    }
  ];

  const additionalFeatures = [
    { icon: Zap, title: "Lightning Fast", description: "Optimized performance for seamless experience" },
    { icon: Target, title: "Accurate Assessment", description: "Industry-standard evaluation criteria" },
    { icon: Clock, title: "Time Tracking", description: "Monitor time spent on each question" },
    { icon: Award, title: "Certifications", description: "Earn verified skill certificates" },
    { icon: FileText, title: "PDF Reports", description: "Download detailed performance reports" },
    { icon: Globe, title: "Multi-language", description: "Support for 10+ programming languages" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              ✨ Powerful Features
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Everything You Need to
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Excel</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover the tools and features that make FrontendIQ the ultimate platform 
              for frontend developer assessments and skill development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {mainFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                //   variants={itemVariants}
                  className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:border-blue-500 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>

                  {/* Feature List */}
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* AI Features Highlight */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our AI engine analyzes your code, understands context, and provides 
              insights that go beyond simple scoring.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Skill Analysis */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Skill Analysis</h3>
              <p className="text-blue-100 mb-6">
                Get comprehensive feedback on your coding style, problem-solving approach, 
                and technical knowledge.
              </p>
              <ul className="space-y-3">
                {[
                  "Code quality assessment",
                  "Best practices evaluation",
                  "Performance optimization tips",
                  "Learning path recommendations"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-white">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* AI Quiz Generator */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Quiz Generator</h3>
              <p className="text-blue-100 mb-6">
                Create customized assessments tailored to your specific needs in seconds.
              </p>
              <ul className="space-y-3">
                {[
                  "Topic-specific questions",
                  "Difficulty level control",
                  "Multiple question formats",
                  "Instant generation & preview"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-white">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">And So Much More</h2>
            <p className="text-xl text-gray-600">Packed with features to enhance your learning journey</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {additionalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                //   variants={itemVariants}
                  className="flex items-start space-x-4 bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose FrontendIQ?</h2>
            <p className="text-xl text-gray-600">See how we compare to traditional assessment methods</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Traditional Methods</h3>
              <ul className="space-y-4">
                {[
                  "Manual question creation",
                  "Generic feedback",
                  "Limited analytics",
                  "Time-consuming evaluation",
                  "One-size-fits-all approach"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-600">
                    <span className="text-red-500 mr-3 text-xl">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* FrontendIQ */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-500"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">FrontendIQ</h3>
              <ul className="space-y-4">
                {[
                  "AI-powered question generation",
                  "Personalized detailed feedback",
                  "Comprehensive analytics dashboard",
                  "Instant AI evaluation",
                  "Customized learning paths"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-900 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of developers who are advancing their careers with FrontendIQ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl transition transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}