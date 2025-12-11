import { Award, Sparkles, Trophy, Zap } from "lucide-react";
import React from "react";

const Newsletter = () => {
  return (
    <section className="px-4 py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Sparkles className="w-10 h-10 text-white" />
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Test Your Skills?
            </h2>
            <p className="text-xl text-indigo-200">
              Join 10,000+ users already learning and improving every day
            </p>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 border-4 border-gray-900 flex items-center justify-center text-white font-semibold">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-white/90">
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-indigo-200">Rated 5.0 by our users</p>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white/95 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 whitespace-nowrap">
                Get Started Free
              </button>
            </div>
            <p className="text-indigo-200 text-sm mt-4">
              🎉 No credit card required. Start learning instantly!
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-8 flex-wrap text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              <span>Expert Content</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  //   <style>{`
  //     @keyframes blob {
  //       0%, 100% { transform: translate(0, 0) scale(1); }
  //       33% { transform: translate(30px, -50px) scale(1.1); }
  //       66% { transform: translate(-20px, 20px) scale(0.9); }
  //     }
  //     .animate-blob {
  //       animation: blob 7s infinite;
  //     }
  //     .animation-delay-2000 {
  //       animation-delay: 2s;
  //     }
  //     .animation-delay-4000 {
  //       animation-delay: 4s;
  //     }
  //     @keyframes slideUp {
  //       from {
  //         opacity: 0;
  //         transform: translateY(30px);
  //       }
  //       to {
  //         opacity: 1;
  //         transform: translateY(0);
  //       }
  //     }
  //   `}</style>
  // </div>
};

export default Newsletter;
