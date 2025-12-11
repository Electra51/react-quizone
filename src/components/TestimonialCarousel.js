import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      company: "Tech Corp",
      image: "SJ",
      rating: 5,
      text: "QuizZone has been instrumental in helping me prepare for interviews. The React quizzes are spot-on and really test your understanding of core concepts. Highly recommended!",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Michael Chen",
      role: "Full Stack Engineer",
      company: "StartupXYZ",
      image: "MC",
      rating: 5,
      text: "I love how QuizZone breaks down complex JavaScript concepts into digestible questions. It's like having a mentor guiding you through your learning journey. The instant feedback is amazing!",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Emily Rodriguez",
      role: "Software Developer",
      company: "Digital Solutions",
      image: "ER",
      rating: 5,
      text: "The CSS quizzes helped me land my dream job! I went from feeling confused about flexbox and grid to confidently explaining them in interviews. Thank you QuizZone!",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "David Kim",
      role: "Junior Developer",
      company: "Web Agency",
      image: "DK",
      rating: 5,
      text: "As a self-taught developer, QuizZone has been my go-to resource for testing my knowledge. The variety of topics and the quality of questions are unmatched. Best learning tool ever!",
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Lisa Anderson",
      role: "CS Student",
      company: "University",
      image: "LA",
      rating: 5,
      text: "QuizZone made learning Git so much easier! The practical questions helped me understand version control in a way that textbooks never could. Now I'm contributing to open source!",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "James Wilson",
      role: "Tech Lead",
      company: "Innovation Labs",
      image: "JW",
      rating: 5,
      text: "I use QuizZone to keep my team sharp. It's perfect for quick knowledge checks and identifying areas where we need more training. The progress tracking feature is a game-changer!",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % Math.ceil(testimonials.length / 3)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.ceil(testimonials.length / 3)) %
        Math.ceil(testimonials.length / 3)
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const getVisibleTestimonials = () => {
    const startIdx = currentIndex * 3;
    return testimonials.slice(startIdx, startIdx + 3);
  };

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}>
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-indigo-600" />
              </div>

              {/* Avatar & Info */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Decorative Element */}
              <div
                className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${testimonial.gradient} opacity-5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-4 mt-12">
        <button
          onClick={prevSlide}
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:border-indigo-300 group"
          aria-label="Previous testimonials">
          <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-indigo-600 transition-colors" />
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-gradient-to-r from-indigo-600 to-purple-600"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:border-indigo-300 group"
          aria-label="Next testimonials">
          <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-indigo-600 transition-colors" />
        </button>
      </div>

      {/* Auto-play Indicator */}
      {isAutoPlaying && (
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            Auto-playing • Click arrows to pause
          </p>
        </div>
      )}
    </div>
  );
};
export default TestimonialCarousel;
