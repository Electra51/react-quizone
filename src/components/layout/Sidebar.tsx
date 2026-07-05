// src/components/layout/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  Trophy,
  Settings,
  HelpCircle,
  LogOut,
  Brain,
  Users,
  ClipboardList,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";

interface SidebarProps {
  role: "candidate" | "admin";
}

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const candidateLinks = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: FileText, label: "My Assessments", href: "/dashboard/assessments" },
    { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
    { icon: Trophy, label: "Leaderboard", href: "/dashboard/leaderboard" },
    { icon: Brain, label: "AI Insights", href: "/dashboard/ai-insights" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ];

  const adminLinks = [
    { icon: LayoutDashboard, label: "Overview", href: "/admin" },
    { icon: Users, label: "Users", href: "/admin/users" },
    { icon: ClipboardList, label: "Quizzes", href: "/admin/quizzes" },
    { icon: Sparkles, label: "AI Generator", href: "/admin/ai-generator" },
    { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ];

  const links = role === "admin" ? adminLinks : candidateLinks;

  const isActive = (href: string) => {
    if (href === "/dashboard" || href === "/admin") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 260 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-screen bg-gray-900 text-white flex flex-col sticky top-0 overflow-hidden"
    >
      {/* Logo */}
      <div className="flex items-center h-16 px-4 border-b border-gray-800">
        <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-sm">F</span>
        </div>
        {!isCollapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="ml-3 text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap"
          >
            FrontendIQ
          </motion.span>
        )}
      </div>

      {/* Role Badge */}
      {!isCollapsed && (
        <div className="px-4 py-3">
          <span className={cn(
            "px-3 py-1 rounded-full text-xs font-semibold",
            role === "admin"
              ? "bg-red-500/20 text-red-400"
              : "bg-blue-500/20 text-blue-400"
          )}>
            {role === "admin" ? "👑 Admin" : "🎯 Candidate"}
          </span>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {links.map((link) => {
          const IconComponent = link.icon;
          const active = isActive(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                active
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              )}
            >
              <IconComponent className={cn(
                "w-5 h-5 flex-shrink-0",
                active ? "text-white" : "text-gray-400 group-hover:text-white"
              )} />
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm font-medium whitespace-nowrap"
                >
                  {link.label}
                </motion.span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 p-3 space-y-1">
        <Link
          href="/help"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
        >
          <HelpCircle className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span className="text-sm font-medium">Help & Support</span>}
        </Link>
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-gray-800 transition w-full">
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span className="text-sm font-medium">Logout</span>}
        </button>

        {/* Collapse Toggle */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center justify-center w-full py-2 text-gray-500 hover:text-gray-300 transition mt-2"
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>
    </motion.aside>
  );
}