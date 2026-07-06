// src/app/(dashboard)/assessment/[quizId]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Flag,
  SkipForward,
  Send,
  Brain,
  Code2,
  FileText,
} from "lucide-react";
import { mockQuizDetails } from "../../../../data/mockData";
import { cn } from "../../../../lib/utils";
import { Button } from "../../../../components/ui/Button";


export default function AssessmentPage() {
  const params = useParams();
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(new Set());
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  const quiz = mockQuizDetails;
  const question = quiz.questions[currentQuestion];

  // Timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      handleSubmit();
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [question.id]: answer });
  };

  const handleFlag = () => {
    const newFlagged = new Set(flaggedQuestions);
    if (newFlagged.has(question.id)) {
      newFlagged.delete(question.id);
    } else {
      newFlagged.add(question.id);
    }
    setFlaggedQuestions(newFlagged);
  };

  const handleSubmit = () => {
    // Mock submit - in real app, send to backend
    console.log("Answers:", answers);
    router.push("/dashboard/assessment-result");
  };

  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">{quiz.title}</h1>
              <p className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {quiz.questions.length}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg font-semibold",
                  timeLeft < 300
                    ? "bg-red-100 text-red-700"
                    : "bg-blue-100 text-blue-700"
                )}
              >
                <Clock className="w-5 h-5" />
                <span>{formatTime(timeLeft)}</span>
              </div>
              <Button
                variant="primary"
                onClick={() => setShowSubmitModal(true)}
                icon={<Send className="w-5 h-5" />}
              >
                Submit
              </Button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl border border-gray-200 p-8"
          >
            {/* Question Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                  {currentQuestion + 1}
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
                  <span className="text-sm text-gray-500">{question.points} points</span>
                </div>
              </div>
              <button
                onClick={handleFlag}
                className={cn(
                  "p-2 rounded-lg transition",
                  flaggedQuestions.has(question.id)
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-400 hover:text-yellow-600"
                )}
              >
                <Flag className="w-5 h-5" />
              </button>
            </div>

            {/* Question */}
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {question.question}
            </h2>

            {/* MCQ Options */}
            {question.type === "mcq" && question.options && (
              <div className="space-y-3">
                {question.options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(option)}
                    className={cn(
                      "w-full flex items-center gap-4 p-4 rounded-lg border-2 text-left transition-all",
                      answers[question.id] === option
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    )}
                  >
                    <span
                      className={cn(
                        "w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-semibold",
                        answers[question.id] === option
                          ? "border-blue-500 bg-blue-500 text-white"
                          : "border-gray-300 text-gray-600"
                      )}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="flex-1 text-gray-700">{option}</span>
                    {answers[question.id] === option && (
                      <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Coding Question */}
            {question.type === "coding" && (
              <div>
                <textarea
                  className="w-full h-64 p-4 bg-gray-900 text-gray-100 rounded-lg font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your code here..."
                  value={answers[question.id] || ""}
                  onChange={(e) => handleAnswer(e.target.value)}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <Button
            variant="outline"
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            icon={<ChevronLeft className="w-5 h-5" />}
          >
            Previous
          </Button>

          {/* Question Navigator */}
          <div className="flex items-center gap-2">
            {quiz.questions.map((q, i) => (
              <button
                key={q.id}
                onClick={() => setCurrentQuestion(i)}
                className={cn(
                  "w-8 h-8 rounded-lg text-sm font-semibold transition",
                  i === currentQuestion
                    ? "bg-blue-600 text-white"
                    : answers[q.id]
                    ? "bg-green-100 text-green-700"
                    : flaggedQuestions.has(q.id)
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <Button
            variant="primary"
            onClick={() =>
              setCurrentQuestion(Math.min(quiz.questions.length - 1, currentQuestion + 1))
            }
            disabled={currentQuestion === quiz.questions.length - 1}
            icon={<ChevronRight className="w-5 h-5" />}
          >
            Next
          </Button>
        </div>
      </div>

      {/* Submit Modal */}
      <AnimatePresence>
        {showSubmitModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-8 max-w-md w-full"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Submit Assessment?
                </h3>
                <p className="text-gray-600">
                  You have answered {Object.keys(answers).length} out of{" "}
                  {quiz.questions.length} questions.
                </p>
                {flaggedQuestions.size > 0 && (
                  <p className="text-sm text-yellow-600 mt-2 flex items-center justify-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {flaggedQuestions.size} questions flagged for review
                  </p>
                )}
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowSubmitModal(false)}
                  fullWidth
                >
                  Review Answers
                </Button>
                <Button variant="primary" onClick={handleSubmit} fullWidth>
                  Submit Now
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}