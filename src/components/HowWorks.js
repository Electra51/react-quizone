// import {
//   ArrowRight,
//   BookOpen,
//   Sparkles,
//   Target,
//   Trophy,
//   Zap,
// } from "lucide-react";
// import React from "react";

// const HowWorks = () => {
//   return (
//     <section className="px-4 py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 shadow-sm">
//             <Zap className="w-4 h-4 text-indigo-600" />
//             <span className="text-sm font-semibold text-indigo-600">
//               SIMPLE PROCESS
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             How It Works
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             Start your learning journey in just 4 simple steps
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
//           {/* Connection Lines for Desktop */}
//           <div className="hidden lg:block absolute top-24 left-0 right-0 h-1">
//             <div className="absolute inset-0 flex items-center justify-between px-[12%]">
//               <div className="flex-1 h-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-full"></div>
//             </div>
//           </div>

//           {[
//             {
//               step: "1",
//               title: "Choose Topic",
//               description:
//                 "Select from React, JavaScript, CSS, Git and more topics that interest you",
//               icon: <Target className="w-8 h-8" />,
//               color: "from-indigo-500 to-purple-500",
//             },
//             {
//               step: "2",
//               title: "Answer Questions",
//               description:
//                 "Take your time and answer thoughtfully. No rush, learn at your own pace",
//               icon: <BookOpen className="w-8 h-8" />,
//               color: "from-purple-500 to-pink-500",
//             },
//             {
//               step: "3",
//               title: "Get Results",
//               description:
//                 "See your score instantly with detailed breakdown of correct and wrong answers",
//               icon: <Trophy className="w-8 h-8" />,
//               color: "from-pink-500 to-rose-500",
//             },
//             {
//               step: "4",
//               title: "Improve",
//               description:
//                 "Review explanations, retake quizzes, and watch your progress grow over time",
//               icon: <Sparkles className="w-8 h-8" />,
//               color: "from-rose-500 to-orange-500",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="relative"
//               style={{
//                 animation: `slideUp 0.6s ease-out ${index * 0.15}s both`,
//               }}>
//               <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
//                 {/* Step Number Circle */}
//                 <div
//                   className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 group-hover:scale-110 transition-transform`}>
//                   {item.step}
//                 </div>

//                 {/* Icon */}
//                 <div className="flex justify-center mt-6 mb-6">
//                   <div
//                     className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
//                     {item.icon}
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 text-center leading-relaxed">
//                   {item.description}
//                 </p>

//                 {/* Hover Effect */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div className="text-center mt-16">
//           <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center gap-2 mx-auto">
//             Start Learning Now
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowWorks;

import {
  ArrowRight,
  BookOpen,
  Sparkles,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import React from "react";

const HowWorks = () => {
  return (
    <section className="px-4 py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-indigo-900/30 rounded-full mb-4 shadow-sm">
            <Zap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              SIMPLE PROCESS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Start your learning journey in just 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines for Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1">
            <div className="absolute inset-0 flex items-center justify-between px-[12%]">
              <div className="flex-1 h-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 rounded-full"></div>
            </div>
          </div>

          {[
            {
              step: "1",
              title: "Choose Topic",
              description:
                "Select from React, JavaScript, CSS, Git and more topics that interest you",
              icon: <Target className="w-8 h-8" />,
              color: "from-indigo-500 to-purple-500",
            },
            {
              step: "2",
              title: "Answer Questions",
              description:
                "Take your time and answer thoughtfully. No rush, learn at your own pace",
              icon: <BookOpen className="w-8 h-8" />,
              color: "from-purple-500 to-pink-500",
            },
            {
              step: "3",
              title: "Get Results",
              description:
                "See your score instantly with detailed breakdown of correct and wrong answers",
              icon: <Trophy className="w-8 h-8" />,
              color: "from-pink-500 to-rose-500",
            },
            {
              step: "4",
              title: "Improve",
              description:
                "Review explanations, retake quizzes, and watch your progress grow over time",
              icon: <Sparkles className="w-8 h-8" />,
              color: "from-rose-500 to-orange-500",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.15}s both`,
              }}>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
                {/* Step Number Circle */}
                <div
                  className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 group-hover:scale-110 transition-transform`}>
                  {item.step}
                </div>

                {/* Icon */}
                <div className="flex justify-center mt-6 mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  {item.description}
                </p>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center gap-2 mx-auto">
            Start Learning Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
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
    </section>
  );
};

export default HowWorks;
