// src/app/(dashboard)/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Target,
  Flame,
  Trophy,
  Clock,
  Award,
  ArrowRight,
  Zap,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  Brain,
} from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Link from "next/link";
import StatCard from "../../components/ui/StatCard";
import { aiRecommendations, candidateStats, leaderBoard, recentAssessments, skillBreakdown, weeklyProgress } from "../../data/mockData";
import { cn } from "../../lib/utils";



export default function CandidateDashboard() {
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600 bg-green-50";
    if (score >= 70) return "text-blue-600 bg-blue-50";
    if (score >= 50) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  const getPriorityColor = (priority: string) => {
    if (priority === "high") return "text-red-600 bg-red-50 border-red-200";
    if (priority === "medium") return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-green-600 bg-green-50 border-green-200";
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
            <p className="text-blue-100 text-lg">
              You&apos;re on a 7-day streak! Keep it up and unlock new badges.
            </p>
          </div>
          <Link
            href="/dashboard/assessments"
            className="mt-4 md:mt-0 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition flex items-center gap-2 w-fit"
          >
            <Zap className="w-5 h-5" />
            Take Assessment
          </Link>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard
          title="Assessments"
          value={candidateStats.totalAssessments}
          icon={FileText}
          color="bg-blue-500"
          trend={{ value: 12, isPositive: true }}
          index={0}
        />
        <StatCard
          title="Avg Score"
          value={`${candidateStats.averageScore}%`}
          icon={Target}
          color="bg-green-500"
          trend={{ value: 5, isPositive: true }}
          index={1}
        />
        <StatCard
          title="Streak"
          value={`${candidateStats.currentStreak} days`}
          icon={Flame}
          color="bg-orange-500"
          index={2}
        />
        <StatCard
          title="Rank"
          value={`#${candidateStats.rank}`}
          icon={Trophy}
          color="bg-purple-500"
          trend={{ value: 23, isPositive: true }}
          index={3}
        />
        <StatCard
          title="Hours Spent"
          value={`${candidateStats.totalHours}h`}
          icon={Clock}
          color="bg-indigo-500"
          index={4}
        />
        <StatCard
          title="Certificates"
          value={candidateStats.certificates}
          icon={Award}
          color="bg-yellow-500"
          index={5}
        />
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Skill Radar Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">Skill Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={skillBreakdown}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="skill" tick={{ fontSize: 12, fill: "#6b7280" }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
              <Radar
                name="Score"
                dataKey="score"
                stroke="#6366f1"
                fill="#6366f1"
                fillOpacity={0.3}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Weekly Progress Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">Weekly Progress</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={weeklyProgress
            }>
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#6b7280" }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: "#6b7280" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="score"
                stroke="#6366f1"
                strokeWidth={2}
                fill="url(#colorScore)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Assessments & AI Recommendations */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Assessments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Recent Assessments</h3>
            <Link
              href="/dashboard/assessments"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {recentAssessments.map((assessment, index) => (
              <motion.div
                key={assessment.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold",
                    assessment.status === "in-progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : getScoreColor(assessment.score)
                  )}>
                    {assessment.status === "in-progress" ? (
                      <Clock className="w-5 h-5" />
                    ) : (
                      `${assessment.score}`
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
                      {assessment.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {assessment.category} • {assessment.date} • {assessment.duration}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-xs font-semibold",
                    assessment.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  )}>
                    {assessment.status === "completed" ? "Completed" : "In Progress"}
                  </span>
                  {assessment.status === "completed" && (
                    <p className="text-xs text-gray-500 mt-1">
                      {assessment.correctAnswers}/{assessment.totalQuestions} correct
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <Brain className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-bold text-gray-900">AI Recommendations</h3>
          </div>

          <div className="space-y-4">
            {aiRecommendations.map((rec) => (
              <div
                key={rec.id}
                className={cn(
                  "p-4 rounded-lg border",
                  getPriorityColor(rec.priority)
                )}
              >
                <div className="flex items-center gap-2 mb-2">
                  {rec.priority === "high" ? (
                    <AlertTriangle className="w-4 h-4" />
                  ) : (
                    <BookOpen className="w-4 h-4" />
                  )}
                  <h4 className="font-semibold text-sm">{rec.title}</h4>
                </div>
                <p className="text-xs mb-3 opacity-80">{rec.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-2 py-1 bg-white/50 rounded">
                    {rec.category}
                  </span>
                  <span className="text-xs opacity-70">⏱ {rec.estimatedTime}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Leaderboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white rounded-xl border border-gray-200 p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">🏆 Top Performers</h3>
          <Link
            href="/dashboard/leaderboard"
            className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
          >
            Full Leaderboard <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-3">
          {leaderBoard.map((user, index) => (
            <motion.div
              key={user.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className={cn(
                "flex items-center justify-between p-4 rounded-lg border transition",
                user.name === "You"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-100 hover:border-gray-200"
              )}
            >
              <div className="flex items-center gap-4">
                <span className="w-8 text-center font-bold text-gray-500">
                  {user.badge || `#${user.rank}`}
                </span>
                <span className="text-3xl">{user.avatar}</span>
                <div>
                  <p className={cn(
                    "font-semibold",
                    user.name === "You" ? "text-blue-700" : "text-gray-900"
                  )}>
                    {user.name}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-gray-900">{user.score}%</span>
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}