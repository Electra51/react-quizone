"use client";

import { useState, useEffect } from "react";
import { Sparkles, Save, Loader2, Target, Clock, BookOpen } from "lucide-react";
import { quizApi } from "../../../../lib/api/quiz";
import { categoryApi } from "../../../../lib/api/category";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function CreateAssessment() {
  const router = useRouter();
  const [categories, setCategories] = useState<any[]>([]);
  
  // Assessment Details
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("Medium");
  const [timeLimit, setTimeLimit] = useState(30);
  const [passingScore, setPassingScore] = useState(70);

  // AI Generation Settings
  const [topic, setTopic] = useState("");
  const [questionType, setQuestionType] = useState("mcq");
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  
  const [generatedQuestions, setGeneratedQuestions] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await categoryApi.getAllCategories();
      setCategories(res.data);
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  const handleGenerateAI = async () => {
    if (!topic.trim()) return Swal.fire("Error", "Please enter a topic", "error");
    try {
      setIsGenerating(true);
      const res = await quizApi.generateAI({
        topic,
        difficulty,
        questionType,
        numberOfQuestions
      });
      setGeneratedQuestions(res.data);
      Swal.fire("Success", "Questions generated successfully!", "success");
    } catch (error: any) {
      Swal.fire("Error", error.message || "Failed to generate questions", "error");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveAssessment = async () => {
    if (!title || !description || !category || generatedQuestions.length === 0) {
      return Swal.fire("Error", "Please fill all details and generate questions first.", "error");
    }

    try {
      setIsSaving(true);
      await quizApi.saveGenerated({
        questions: generatedQuestions,
        quizData: {
          title,
          description,
          category,
          difficulty,
          timeLimit,
          passingScore,
          questions: [] // will be replaced by backend with newly saved questions
        }
      });
      
      Swal.fire("Saved!", "Assessment created successfully.", "success").then(() => {
        router.push("/admin/dashboard"); // Or wherever the admin dashboard is
      });
    } catch (error: any) {
      Swal.fire("Error", error.message || "Failed to save assessment", "error");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Create New Assessment</h1>
        <p className="text-gray-500 mt-2">Design a new assessment or generate questions using AI.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-gray-900 border-b pb-2">Assessment Details</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g. Advanced React Patterns"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 resize-none"
                rows={3}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Category</option>
                {categories.map((c) => (
                  <option key={c._id} value={c._id}>{c.name}</option>
                ))}
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time (mins)</label>
                <input
                  type="number"
                  value={timeLimit}
                  onChange={(e) => setTimeLimit(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pass Score (%)</label>
                <input
                  type="number"
                  value={passingScore}
                  onChange={(e) => setPassingScore(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-indigo-900 border-b border-indigo-200 pb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" /> AI Question Generator
            </h2>
            
            <div>
              <label className="block text-sm font-medium text-indigo-900 mb-1">Topic</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g. React Hooks"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-indigo-900 mb-1">Difficulty</label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="w-full px-4 py-2 border border-indigo-200 rounded-lg"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                  <option value="Mixed">Mixed</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-900 mb-1">Count</label>
                <input
                  type="number"
                  value={numberOfQuestions}
                  onChange={(e) => setNumberOfQuestions(Number(e.target.value))}
                  min={1} max={20}
                  className="w-full px-4 py-2 border border-indigo-200 rounded-lg"
                />
              </div>
            </div>

            <button
              onClick={handleGenerateAI}
              disabled={isGenerating}
              className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold flex justify-center items-center gap-2 hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              Generate Questions
            </button>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-full flex flex-col">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <h2 className="text-xl font-bold text-gray-900">Questions ({generatedQuestions.length})</h2>
              {generatedQuestions.length > 0 && (
                <button
                  onClick={handleSaveAssessment}
                  disabled={isSaving}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg font-bold flex items-center gap-2 hover:bg-green-700 transition disabled:opacity-50"
                >
                  {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  Save Assessment
                </button>
              )}
            </div>

            <div className="flex-1 overflow-y-auto space-y-6">
              {generatedQuestions.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 py-20">
                  <BookOpen className="w-16 h-16 mb-4 opacity-50" />
                  <p>Use the AI generator on the left to create questions.</p>
                </div>
              ) : (
                generatedQuestions.map((q, i) => (
                  <div key={i} className="p-5 border border-gray-100 bg-gray-50 rounded-xl">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-gray-900">Q{i + 1}. {q.title}</h4>
                      <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-md font-semibold">
                        {q.difficulty}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mt-4 mb-4">
                      {q.options?.map((opt: string, optIdx: number) => (
                        <div key={optIdx} className={`p-3 rounded-lg border ${opt === q.correctAnswer ? 'bg-green-50 border-green-200 text-green-800' : 'bg-white border-gray-200'}`}>
                          {opt}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm font-semibold text-gray-700">Explanation:</p>
                      <p className="text-sm text-gray-600 mt-1">{q.explanation}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
