import React, { useState, useEffect } from "react";
import { Sparkles, Users, BookOpen, ArrowRight, Target } from "lucide-react";
import QuizSection from "./QuizSection";

const Hero = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ quizzes: 0, topics: 0, users: 0 });

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then((res) => res.json())
      .then((data) => {
        setQuizzes(data.data);
        const totalQuizzes = data.data.reduce(
          (acc, curr) => acc + curr.total,
          0
        );
        setStats({
          quizzes: totalQuizzes,
          topics: data.data.length,
          users: 10000,
        });
        setLoading(false);
      });
  }, []);

  // Counter animation
  const Counter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [end, duration]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-full border border-indigo-100 dark:border-white/20 shadow-sm">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-300" />
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                Master Your Skills
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Welcome to an amazing
                <br />
                online{" "}
                <span className="relative text-black dark:text-white">
                  QuizZone
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none">
                    <path
                      d="M2 10C78.957 4.5 221.043 4.5 298 10"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Test your knowledge on a variety of fun and interesting topics.
                Challenge yourself and track your progress!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-indigo-600 dark:bg-gray-800 dark:text-indigo-300 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border-2 border-indigo-100 dark:border-gray-700">
                View All Topics
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-indigo-100 dark:border-white/10 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-xl mb-4 mx-auto">
                  <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-300" />
                </div>
                <div className="text-3xl font-bold text-gray-800 dark:text-white">
                  <Counter end={stats.quizzes} suffix="+" />
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-1">
                  Total Quizzes
                </div>
              </div>

              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-purple-100 dark:border-white/10 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl mb-4 mx-auto">
                  <Target className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                </div>
                <div className="text-3xl font-bold text-gray-800 dark:text-white">
                  <Counter end={stats.topics} suffix="+" />
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-1">
                  Topics
                </div>
              </div>

              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-pink-100 dark:border-white/10 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-xl mb-4 mx-auto">
                  <Users className="w-6 h-6 text-pink-600 dark:text-pink-300" />
                </div>
                <div className="text-3xl font-bold text-gray-800 dark:text-white">
                  <Counter end={stats.users / 1000} suffix="K+" />
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-1">
                  Active Users
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <QuizSection quizzes={quizzes} loading={loading} />
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
