// src/app/(admin)/ai-generator/page.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Wand2,
  Settings2,
  FileText,
  Code2,
  Shuffle,
  CheckCircle2,
  Edit3,
  Trash2,
  RotateCcw,
  Save,
  Eye,
  AlertCircle,
  Loader2,
  Brain,
  Zap,
  Target,
} from "lucide-react";
import { GeneratedQuestion, mockGenerateQuiz, QuizGenerationRequest } from "../../../services/aiService";
import { Input } from "../../../components/ui/Input";
import { cn } from "../../../lib/utils";
import { Button } from "../../../components/ui/Button";


const quizGenerationSchema = z.object({
  topic: z
    .string()
    .min(3, "Topic must be at least 3 characters")
    .max(100, "Topic must be less than 100 characters"),
  difficulty: z.enum(["Easy", "Medium", "Hard", "Mixed"]),
  questionType: z.enum(["mcq", "coding", "mixed"]),
  numberOfQuestions: z
    .number()
    .min(1, "Must generate at least 1 question")
    .max(20, "Cannot generate more than 20 questions at once"),
});

type QuizGenerationFormData = z.infer<typeof quizGenerationSchema>;

export default function AIQuizGeneratorPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedQuestions, setGeneratedQuestions] = useState<GeneratedQuestion[]>([]);
  const [error, setError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuizGenerationFormData>({
    resolver: zodResolver(quizGenerationSchema),
    defaultValues: {
      topic: "",
      difficulty: "Medium",
      questionType: "mixed",
      numberOfQuestions: 5,
    },
  });

  const onSubmit = async (data: QuizGenerationFormData) => {
    setIsGenerating(true);
    setError("");
    setSuccessMessage("");
    setGeneratedQuestions([]);

    try {
      const response = await mockGenerateQuiz(data as QuizGenerationRequest);

      if (response.success && response.questions) {
        setGeneratedQuestions(response.questions);
        setSuccessMessage(response.message);
      } else {
        setError(response.error || "Failed to generate questions");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDeleteQuestion = (id: string) => {
    setGeneratedQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  const handleRegenerateQuestion = (id: string) => {
    // Mock regeneration - in real app, call AI again for specific question
    setGeneratedQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, question: q.question + " (Regenerated)" } : q
      )
    );
  };

  const handleSaveQuiz = () => {
    // Mock save - in real app, save to database
    alert(`Quiz saved! ${generatedQuestions.length} questions will be added to the database.`);
    setGeneratedQuestions([]);
    reset();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">AI Quiz Generator</h1>
        <p className="text-gray-600 mt-1">
          Generate high-quality assessment questions powered by AI
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Generation Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-1"
        >
          <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Wand2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Generate Quiz</h2>
                <p className="text-sm text-gray-500">Configure your quiz parameters</p>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Topic */}
              <Input
                label="Topic"
                placeholder="e.g., React Hooks, TypeScript Generics"
                icon={<FileText className="w-5 h-5" />}
                error={errors.topic?.message}
                {...register("topic", { valueAsNumber: false })}
              />

              {/* Difficulty */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Difficulty Level
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(["Easy", "Medium", "Hard", "Mixed"] as const).map((level) => (
                    <label
                      key={level}
                      className={cn(
                        "flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border-2 cursor-pointer transition-all",
                        "hover:border-purple-400",
                        errors.difficulty?.message
                          ? "border-red-300"
                          : "border-gray-200"
                      )}
                    >
                      <input
                        type="radio"
                        value={level}
                        {...register("difficulty")}
                        className="sr-only"
                      />
                      <span className="text-sm font-medium text-gray-700">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question Type */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Question Type
                </label>
                <div className="space-y-2">
                  {[
                    { value: "mcq", label: "Multiple Choice", icon: FileText },
                    { value: "coding", label: "Coding Challenge", icon: Code2 },
                    { value: "mixed", label: "Mixed", icon: Shuffle },
                  ].map((type) => {
                    const Icon = type.icon;
                    return (
                      <label
                        key={type.value}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg border-2 cursor-pointer transition-all",
                          "hover:border-purple-400"
                        )}
                      >
                        <input
                          type="radio"
                          value={type.value}
                          {...register("questionType")}
                          className="sr-only"
                        />
                        <Icon className="w-5 h-5 text-purple-600" />
                        <span className="text-sm font-medium text-gray-700">
                          {type.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Number of Questions */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Number of Questions:{" "}
                  <span className="text-purple-600 font-bold">
                    {generatedQuestions.length > 0
                      ? generatedQuestions.length
                      : "5"}
                  </span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  {...register("numberOfQuestions", { valueAsNumber: true })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1</span>
                  <span>20</span>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <p className="text-red-800 text-sm font-medium flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </p>
                </motion.div>
              )}

              {/* Generate Button */}
              <Button
                type="submit"
                loading={isGenerating}
                fullWidth
                icon={!isGenerating ? <Sparkles className="w-5 h-5" /> : undefined}
              >
                {isGenerating ? "Generating..." : "Generate Questions"}
              </Button>
            </form>

            {/* Tips */}
            <div className="mt-6 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <p className="text-xs text-purple-900 font-semibold mb-2 flex items-center gap-1">
                <Brain className="w-4 h-4" />
                AI Tips:
              </p>
              <ul className="space-y-1 text-xs text-purple-700">
                <li>• Be specific with topics for better results</li>
                <li>• Mixed difficulty provides balanced assessment</li>
                <li>• Review generated questions before saving</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Generated Questions Preview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Generated Questions</h2>
                <p className="text-sm text-gray-500">
                  {generatedQuestions.length > 0
                    ? `${generatedQuestions.length} questions ready for review`
                    : "No questions generated yet"}
                </p>
              </div>
              {generatedQuestions.length > 0 && (
                <Button
                  variant="primary"
                  onClick={handleSaveQuiz}
                  icon={<Save className="w-5 h-5" />}
                >
                  Save Quiz
                </Button>
              )}
            </div>

            {/* Success Message */}
            <AnimatePresence>
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <p className="text-green-800 text-sm font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    {successMessage}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Loading State */}
            {isGenerating && (
              <div className="flex flex-col items-center justify-center py-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4"
                >
                  <Brain className="w-8 h-8 text-white" />
                </motion.div>
                <p className="text-gray-600 font-medium">AI is generating questions...</p>
                <p className="text-sm text-gray-500 mt-1">This may take a few seconds</p>
              </div>
            )}

            {/* Empty State */}
            {!isGenerating && generatedQuestions.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No Questions Yet
                </h3>
                <p className="text-gray-600 max-w-md">
                  Configure your quiz parameters and click "Generate Questions" to create
                  AI-powered assessment questions.
                </p>
              </div>
            )}

            {/* Questions List */}
            <AnimatePresence>
              {!isGenerating && generatedQuestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  {generatedQuestions.map((question, index) => (
                    <motion.div
                      key={question.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.05 }}
                      className="border border-gray-200 rounded-lg p-5 hover:border-purple-300 hover:shadow-md transition-all group"
                    >
                      {/* Question Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                            {index + 1}
                          </span>
                          <div>
                            <div className="flex items-center gap-2">
                              {question.type === "mcq" ? (
                                <FileText className="w-4 h-4 text-blue-600" />
                              ) : (
                                <Code2 className="w-4 h-4 text-green-600" />
                              )}
                              <span className="text-xs font-semibold text-gray-500 uppercase">
                                {question.type}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={cn(
                              "px-2 py-1 rounded text-xs font-semibold",
                              question.difficulty === "Easy" && "bg-green-100 text-green-700",
                              question.difficulty === "Medium" && "bg-yellow-100 text-yellow-700",
                              question.difficulty === "Hard" && "bg-red-100 text-red-700"
                            )}
                          >
                            {question.difficulty}
                          </span>
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-semibold">
                            {question.points} pts
                          </span>
                        </div>
                      </div>

                      {/* Question Text */}
                      <h4 className="font-semibold text-gray-900 mb-3">
                        {question.question}
                      </h4>

                      {/* MCQ Options */}
                      {question.type === "mcq" && question.options && (
                        <div className="space-y-2 mb-3">
                          {question.options.map((option, i) => (
                            <div
                              key={i}
                              className={cn(
                                "flex items-center gap-3 p-3 rounded-lg border",
                                option === question.correctAnswer
                                  ? "border-green-500 bg-green-50"
                                  : "border-gray-200 bg-gray-50"
                              )}
                            >
                              <span className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-xs font-semibold text-gray-600">
                                {String.fromCharCode(65 + i)}
                              </span>
                              <span className="text-sm text-gray-700 flex-1">{option}</span>
                              {option === question.correctAnswer && (
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Coding Question */}
                      {question.type === "coding" && (
                        <div className="mb-3">
                          {question.codeStarter && (
                            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-3">
                              <code>{question.codeStarter}</code>
                            </pre>
                          )}
                          {question.testCases && (
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                              <p className="text-xs font-semibold text-blue-900 mb-2">
                                Test Cases:
                              </p>
                              <ul className="space-y-1">
                                {question.testCases.map((tc, i) => (
                                  <li key={i} className="text-xs text-blue-700">
                                    • {tc}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Explanation */}
                      <div className="bg-gray-50 rounded-lg p-3 mb-3">
                        <p className="text-xs font-semibold text-gray-700 mb-1">
                          Explanation:
                        </p>
                        <p className="text-sm text-gray-600">{question.explanation}</p>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                        <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
                          <Edit3 className="w-4 h-4" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleRegenerateQuestion(question.id)}
                          className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition"
                        >
                          <RotateCcw className="w-4 h-4" />
                          Regenerate
                        </button>
                        <button
                          onClick={() => handleDeleteQuestion(question.id)}
                          className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition ml-auto"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}