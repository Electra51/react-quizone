// src/app/(admin)/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  FileText,
  BarChart3,
  DollarSign,
  TrendingUp,
  UserCheck,
  ArrowRight,
  Sparkles,
  Search,
  MoreHorizontal,
  Edit3,
  Trash2,
  Eye,
  Plus,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Link from "next/link";
import { adminQuizzes, adminStats, adminUsers, monthlyRevenue } from "../../data/mockData";
import StatCard from "../../components/ui/StatCard";
import { cn } from "../../lib/utils";

const categoryData = [
  { name: "React", value: 35, color: "#3b82f6" },
  { name: "TypeScript", value: 25, color: "#8b5cf6" },
  { name: "CSS", value: 20, color: "#ec4899" },
  { name: "JavaScript", value: 15, color: "#f59e0b" },
  { name: "Next.js", value: 5, color: "#10b981" },
];

export default function AdminDashboard() {
  const [userSearch, setUserSearch] = useState("");

  const filteredUsers = adminUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(userSearch.toLowerCase()) ||
      user.email.toLowerCase().includes(userSearch.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage your platform and monitor performance</p>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
          <Link
            href="/admin/ai-generator"
            className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            AI Quiz Generator
          </Link>
          <Link
            href="/admin/quizzes"
            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            New Quiz
          </Link>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard
          title="Total Users"
          value={adminStats.totalUsers.toLocaleString()}
          icon={Users}
          color="bg-blue-500"
          trend={{ value: 15, isPositive: true }}
          index={0}
        />
        <StatCard
          title="Active Users"
          value={adminStats.activeUsers.toLocaleString()}
          icon={UserCheck}
          color="bg-green-500"
          trend={{ value: 8, isPositive: true }}
          index={1}
        />
        <StatCard
          title="Total Quizzes"
          value={adminStats.totalQuizzes}
          icon={FileText}
          color="bg-purple-500"
          trend={{ value: 12, isPositive: true }}
          index={2}
        />
        <StatCard
          title="Submissions"
          value={adminStats.totalSubmissions.toLocaleString()}
          icon={BarChart3}
          color="bg-indigo-500"
          trend={{ value: 20, isPositive: true }}
          index={3}
        />
        <StatCard
          title="Revenue"
          value={`$${adminStats.revenue.toLocaleString()}`}
          icon={DollarSign}
          color="bg-yellow-500"
          trend={{ value: 18, isPositive: true }}
          index={4}
        />
        <StatCard
          title="Completion Rate"
          value={`${adminStats.avgCompletionRate}%`}
          icon={TrendingUp}
          color="bg-pink-500"
          index={5}
        />
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">Revenue & User Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyRevenue}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#6b7280" }} />
              <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
                formatter={(value: number, name: string) => [
                  name === "revenue" ? `$${value.toLocaleString()}` : value,
                  name === "revenue" ? "Revenue" : "Users",
                ]}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#6366f1"
                strokeWidth={2}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Category Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quiz Categories</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={5}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {categoryData.map((cat) => (
              <div key={cat.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                  <span className="text-gray-700">{cat.name}</span>
                </div>
                <span className="font-semibold text-gray-900">{cat.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tables Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Users */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Recent Users</h3>
            <Link href="/admin/users" className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={userSearch}
              onChange={(e) => setUserSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs font-semibold text-gray-500 uppercase border-b">
                  <th className="pb-3">User</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Quizzes</th>
                  <th className="pb-3">Score</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition">
                    <td className="py-3">
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </td>
                    <td className="py-3">
                      <span className={cn(
                        "px-2 py-1 rounded-full text-xs font-semibold",
                        user.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      )}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-gray-700">{user.quizzesTaken}</td>
                    <td className="py-3 text-sm font-semibold text-gray-900">
                      {user.avgScore > 0 ? `${user.avgScore}%` : "-"}
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 rounded hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 rounded hover:bg-yellow-50 text-gray-400 hover:text-yellow-600 transition">
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 rounded hover:bg-red-50 text-gray-400 hover:text-red-600 transition">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Quizzes Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Quizzes</h3>
            <Link href="/admin/quizzes" className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              Manage <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {adminQuizzes.map((quiz, index) => (
              <motion.div
                key={quiz.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="p-4 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition group"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition text-sm">
                      {quiz.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {quiz.category} • {quiz.difficulty} • {quiz.questions} questions
                    </p>
                  </div>
                  <span className={cn(
                    "px-2 py-1 rounded-full text-xs font-semibold ml-3",
                    quiz.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  )}>
                    {quiz.status}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <div className="flex gap-4 text-xs text-gray-500">
                    <span>📝 {quiz.attempts} attempts</span>
                    <span>📊 {quiz.avgScore}% avg</span>
                    <span>🤖 {quiz.createdBy}</span>
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                    <button className="p-1 rounded hover:bg-blue-100 text-gray-400 hover:text-blue-600">
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1 rounded hover:bg-red-100 text-gray-400 hover:text-red-600">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}