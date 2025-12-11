import { ArrowRight, Award, Trophy, Zap } from "lucide-react";
import React from "react";

const QuizSection = ({ loading, quizzes }) => {
  return (
    <section className="px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Choose Your Challenge
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Select a topic and start testing your knowledge right away
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg animate-pulse">
                <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-xl mx-auto mb-4"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto mb-4"></div>
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quizzes.map((quiz, index) => (
              <div
                key={quiz.id}
                className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
                style={{
                  animation: `slideUp 0.5s ease-out ${index * 0.1}s both`,
                }}>
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 dark:group-hover:from-indigo-400/10 dark:group-hover:to-purple-400/10 transition-all duration-300"></div>

                <div className="relative z-10">
                  {/* Logo */}
                  <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center shadow-lg">
                      <img
                        src={quiz.logo}
                        alt={quiz.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {quiz.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
                      <Trophy className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        Total quiz: {quiz.total}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6 text-sm text-gray-600 dark:text-gray-300">
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
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 dark:from-indigo-300/10 dark:to-purple-300/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizSection;
