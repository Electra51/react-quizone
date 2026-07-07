"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bell, Search, User, LogOut, Settings, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/src/context/AuthContext";
import Swal from "sweetalert2";

export default function Topbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { user, logout } = useAuth();
  const router = useRouter();
  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
      Swal.fire({
        icon: "success",
        title: "Logged out successfully",
        timer: 2000,
        showConfirmButton: false,
      });
      router.push("/login");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Logout failed",
        text: "Please try again",
      });
    }
  };

  const displayName = user?.fullName || "Loading...";
  const displayEmail = user?.email || "";
  const displayRole = user?.role || "Candidate";
  const avatarUrl = user?.avatar || `/user.png`;

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-end border-b border-gray-200 bg-white/80 px-6 backdrop-blur-md">

      {/* Left: Search Bar (Optional) */}
      {/* <div className="flex flex-1 items-center">
        <div className="relative hidden sm:flex w-full max-w-md items-center">
          <Search className="absolute left-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search assessments, topics..."
            className="h-10 w-full rounded-full border border-gray-300 bg-gray-50 pl-10 pr-4 text-sm outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>
      </div> */}

      {/* Right: Notifications & Profile */}
      <div className="flex items-center gap-4">
        {/* Notification Button */}
        <button
          aria-label="Notifications"
          className="relative rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <Bell className="h-5 w-5" />
          {/* Unread dot */}
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white p-1 pr-3 transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-expanded={isProfileOpen}
          >
            <Image
              src={avatarUrl}
              alt={displayName}
              width={30}
              height={30}
              className="rounded-full object-cover ring-2 ring-gray-100"
            />
            <div className="hidden flex-col items-start text-left sm:flex">
              <span className="text-sm font-semibold text-gray-700 leading-none">{displayName}</span>
     
            </div>
           
          </button>

        
        </div>
      </div>
    </header>
  );
}
