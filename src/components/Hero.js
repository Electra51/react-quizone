// import React from "react";
// import { Link } from "react-router-dom";
// import image from "../images/image1.png";
// import { ArrowRight, BookOpen, Brain, Trophy, Users } from "lucide-react";

// const Hero = () => {
//   return (
//     // <div className='px-4 py-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10' >
//     //   <div className='flex flex-col items-center justify-between lg:flex-row'>
//     //     <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
//     //       <div className='max-w-xl mb-6 lg:mt-8'>

//     //         <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
//     //           Welcome an amazing online <span className='inline-block text-blue-400'>QuiZone</span>
//     //         </h2>
//     //         <p className='text-base text-gray-700 md:text-lg'>
//     //         Take these quiz at QuiZone to test your knowledge on a variety of fun and interesting topics.
//     //         </p>
//     //       </div>
//     //       <div className=''>
//     //         <Link
//     //           to={'/Topics'}
//     //           className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none'
//     //         >
//     //           <span className='mr-1 items-center'>Get Started</span>
//     //           <svg
//     //             width='24'
//     //             height='24'
//     //             viewBox='0 0 24 24'
//     //             strokeLinecap='round'
//     //             strokeLinejoin='round'
//     //             strokeWidth='2'
//     //             className='w-0'
//     //           >

//     //           </svg>
//     //         </Link>

//     //       </div>
//     //     </div>
//     //     <div className='relative lg:w-1/2 ' data-aos="fade-left">
//     //       <img src={image} alt="" />
//     //     </div>
//     //   </div>

//     // </div>
//     <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//       <div className="flex flex-col items-center justify-between lg:flex-row gap-12">
//         {/* Left Content */}
//         <div className="flex-1 lg:pr-8">
//           <div className="max-w-xl">
//             <h1 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white sm:leading-tight">
//               Welcome an amazing online{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
//                 QuiZone
//               </span>
//             </h1>

//             <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//               Take these quiz at QuiZone to test your knowledge on a variety of
//               fun and interesting topics.
//             </p>

//             {/* CTA Button */}
//             <button className="group inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-blue-400 rounded-lg shadow-lg hover:bg-blue-500 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//               <span>Get Started</span>
//               <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>

//             {/* Feature Pills */}
//             <div className="mt-10 flex flex-wrap gap-3">
//               <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md">
//                 <Brain className="w-5 h-5 text-blue-500 mr-2" />
//                 <span className="text-sm font-medium text-gray-700">
//                   Test Your Knowledge
//                 </span>
//               </div>
//               <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md">
//                 <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
//                 <span className="text-sm font-medium text-gray-700">
//                   Win Rewards
//                 </span>
//               </div>
//               <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md">
//                 <Users className="w-5 h-5 text-green-500 mr-2" />
//                 <span className="text-sm font-medium text-gray-700">
//                   Join Community
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Content - Illustration */}
//         <div className="flex-1 relative">
//           <div className="relative">
//             {/* Main Illustration Container */}
//             <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
//               <div className="aspect-square flex items-center justify-center">
//                 {/* Illustration Placeholder - Students at Table */}
//                 <div className="relative w-full h-full flex items-center justify-center">
//                   {/* Boy Character */}
//                   <div className="absolute left-8 top-1/3">
//                     <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mb-2">
//                       <span className="text-3xl">👦</span>
//                     </div>
//                   </div>
//                   <img src={image} alt="" />
//                   {/* Girl Character */}
//                   <div className="absolute right-8 top-1/3">
//                     <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mb-2">
//                       <span className="text-3xl">👧</span>
//                     </div>
//                   </div>

//                   {/* Table/Desk */}
//                   <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg shadow-lg">
//                     <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-24 bg-white rounded-lg shadow-md p-2">
//                       <div className="space-y-1">
//                         <div className="flex items-center">
//                           <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
//                           <div className="h-2 bg-gray-200 rounded flex-1"></div>
//                         </div>
//                         <div className="flex items-center">
//                           <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
//                           <div className="h-2 bg-gray-200 rounded flex-1"></div>
//                         </div>
//                         <div className="flex items-center">
//                           <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
//                           <div className="h-2 bg-gray-200 rounded flex-1"></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Decorative Books */}
//                   <div className="absolute bottom-8 left-12 w-12 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded transform -rotate-12"></div>
//                   <div className="absolute bottom-8 left-20 w-12 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded transform rotate-6"></div>

//                   {/* Apple */}
//                   <div className="absolute bottom-16 right-16 text-3xl">🍎</div>

//                   {/* Sticky Notes */}
//                   <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-200 rounded shadow-md transform rotate-6"></div>
//                   <div className="absolute top-8 right-16 w-16 h-16 bg-blue-200 rounded shadow-md transform -rotate-3"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating Elements */}
//             <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
//               <BookOpen className="w-10 h-10 text-white" />
//             </div>

//             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
//               <span className="text-white text-3xl font-bold">Q</span>
//             </div>

//             {/* Background Decorations */}
//             <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full opacity-20 blur-3xl"></div>
//             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Trophy,
  Users,
  BookOpen,
  ArrowRight,
  Target,
  Zap,
  Award,
} from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50  dark:from-blue-900 dark:via-indigo-700 dark:to-purple-500">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-100 shadow-sm">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-600">
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
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
              <button className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border-2 border-indigo-100">
                View All Topics
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-indigo-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-xl mb-4 mx-auto">
                  <BookOpen className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800">
                  <Counter end={stats.quizzes} suffix="+" />
                </div>
                <div className="text-gray-600 mt-1">Total Quizzes</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-purple-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4 mx-auto">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800">
                  <Counter end={stats.topics} suffix="+" />
                </div>
                <div className="text-gray-600 mt-1">Topics</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-pink-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-xl mb-4 mx-auto">
                  <Users className="w-6 h-6 text-pink-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800">
                  <Counter end={stats.users / 1000} suffix="K+" />
                </div>
                <div className="text-gray-600 mt-1">Active Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Cards Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Choose Your Challenge
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select a topic and start testing your knowledge right away
            </p>
          </div>

          {/* Quiz Cards Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-lg animate-pulse">
                  <div className="w-20 h-20 bg-gray-200 rounded-xl mx-auto mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quizzes.map((quiz, index) => (
                <div
                  key={quiz.id}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                  style={{
                    animation: `slideUp 0.5s ease-out ${index * 0.1}s both`,
                  }}>
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-300"></div>

                  <div className="relative z-10">
                    {/* Logo */}
                    <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center shadow-lg">
                        <img
                          src={quiz.logo}
                          alt={quiz.name}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {quiz.name}
                      </h3>
                      <div className="flex items-center justify-center gap-2 text-gray-600">
                        <Trophy className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          Total quiz: {quiz.total}
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        <span>Quick & Fun</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-green-500" />
                        <span>Track Progress</span>
                      </div>
                    </div>

                    {/* Button */}
                    <button className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 group/btn">
                      Start Now
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

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
