"use client";

import { useState, useEffect } from "react";
import { Search, Filter, Play, Clock, Target, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { quizApi } from "../../../lib/api/quiz";
import { categoryApi } from "../../../lib/api/category";
import Link from "next/link";
import { cn } from "../../../lib/utils";

export default function CandidateAssessments() {
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    // Debounce search slightly
    const timer = setTimeout(() => {
      fetchQuizzes();
    }, 500);
    return () => clearTimeout(timer);
  }, [search, selectedCategory, selectedDifficulty]);

  const fetchCategories = async () => {
    try {
      const res = await categoryApi.getAllCategories();
      setCategories(res.data);
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  const fetchQuizzes = async () => {
    try {
      setLoading(true);
      const res = await quizApi.getAllQuizzes({
        search,
        category: selectedCategory,
        difficulty: selectedDifficulty,
        limit: 50,
      });
      setQuizzes(res.data.quizzes || []);
    } catch (error) {
      console.error("Failed to fetch quizzes", error);
    } finally {
      setLoading(false);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty === "Easy") return "text-green-600 bg-green-50";
    if (difficulty === "Medium") return "text-yellow-600 bg-yellow-50";
    if (difficulty === "Hard") return "text-red-600 bg-red-50";
    return "text-blue-600 bg-blue-50";
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Assessments</h1>
          <p className="text-gray-500 text-sm mt-1">Browse and take quizzes to test your skills</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search assessments..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        
        <div className="flex gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c._id} value={c._id}>{c.name}</option>
            ))}
          </select>
          
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
            <option value="Mixed">Mixed</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
        </div>
      ) : quizzes.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
          <Target className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-gray-900">No assessments found</h3>
          <p className="text-gray-500">Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz, index) => (
            <motion.div
              key={quiz._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all flex flex-col"
            >
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-700 rounded-md">
                    {categories.find(c => c._id === quiz.category)?.name || "Category"}
                  </span>
                  <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-md", getDifficultyColor(quiz.difficulty))}>
                    {quiz.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{quiz.title}</h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-3">{quiz.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{quiz.timeLimit} mins</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Target className="w-4 h-4 text-gray-400" />
                    <span>{quiz.passingScore}% to pass</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <Link
                  href={`/candidate/assessments/${quiz._id}`}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Play className="w-4 h-4" /> Start Assessment
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
