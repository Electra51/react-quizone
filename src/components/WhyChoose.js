import {
  ArrowRight,
  Award,
  BookOpen,
  Sparkles,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import React from "react";

const WhyChoose = () => {
  return (
    <section className="px-4 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-600">
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose QuizZone?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience the most engaging way to test and improve your knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="w-8 h-8" />,
              title: "Track Your Progress",
              description:
                "Monitor your learning journey with detailed analytics and performance insights",
              color: "from-blue-500 to-cyan-500",
              bgColor: "bg-blue-50",
            },
            {
              icon: <Trophy className="w-8 h-8" />,
              title: "Earn Achievements",
              description:
                "Unlock badges and rewards as you master different topics and reach milestones",
              color: "from-yellow-500 to-orange-500",
              bgColor: "bg-yellow-50",
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Instant Results",
              description:
                "Get immediate feedback on your answers and learn from your mistakes instantly",
              color: "from-purple-500 to-pink-500",
              bgColor: "bg-purple-50",
            },
            {
              icon: <BookOpen className="w-8 h-8" />,
              title: "Multiple Topics",
              description:
                "Explore a wide variety of subjects from React to Git and everything in between",
              color: "from-green-500 to-emerald-500",
              bgColor: "bg-green-50",
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: "Learn as You Play",
              description:
                "Detailed explanations help you understand concepts while having fun",
              color: "from-indigo-500 to-blue-500",
              bgColor: "bg-indigo-50",
            },
            {
              icon: <ArrowRight className="w-8 h-8 rotate-180" />,
              title: "Retake Unlimited",
              description:
                "Practice makes perfect! Retake quizzes as many times as you need to master them",
              color: "from-pink-500 to-rose-500",
              bgColor: "bg-pink-50",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div
                    className={`bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`}>
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div
                className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${feature.color} opacity-5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
