// // src/components/layout/Topbar.tsx
// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Search,
//   Bell,
//   Moon,
//   Sun,
//   User,
//   LogOut,
//   Settings,
//   ChevronDown,
// } from "lucide-react";

// export default function Topbar() {
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [isDark, setIsDark] = useState(false);
//   const [notifications] = useState(3);

//   return (
//     <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-40">
//       {/* Search */}
//       <div className="flex-1 max-w-md">
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search quizzes, topics..."
//             className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition text-sm"
//           />
//         </div>
//       </div>

//       {/* Right Actions */}
//       <div className="flex items-center gap-4">
//         {/* Dark Mode Toggle */}
//         <button
//           onClick={() => setIsDark(!isDark)}
//           className="p-2 rounded-lg hover:bg-gray-100 transition text-gray-600"
//         >
//           {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//         </button>

//         {/* Notifications */}
//         <button className="relative p-2 rounded-lg hover:bg-gray-100 transition text-gray-600">
//           <Bell className="w-5 h-5" />
//           {notifications > 0 && (
//             <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
//               {notifications}
//             </span>
//           )}
//         </button>

//         {/* Profile Dropdown */}
//         <div className="relative">
//           <button
//             onClick={() => setIsProfileOpen(!isProfileOpen)}
//             className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-100 transition"
//           >
//             <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
//               JD
//             </div>
//             <div className="hidden md:block text-left">
//               <p className="text-sm font-semibold text-gray-900">John Doe</p>
//               <p className="text-xs text-gray-500">Pro Plan</p>
//             </div>
//             <ChevronDown className="w-4 h-4 text-gray-400" />
//           </button>

//           {/* Dropdown */}
//           <AnimatePresence>
//             {isProfileOpen && (
//               <>
//                 <div
//                   className="fixed inset-0 z-40"
//                   onClick={() => setIsProfileOpen(false)}
//                 />
//                 <motion.div
//                   initial={{ opacity: 0, y: -10, scale: 0.95 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0, y: -10, scale: 0.95 }}
//                   transition={{ duration: 0.15 }}
//                   className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
//                 >
//                   <div className="px-4 py-3 border-b border-gray-100">
//                     <p className="font-semibold text-gray-900">John Doe</p>
//                     <p className="text-sm text-gray-500">john@example.com</p>
//                   </div>
//                   <div className="py-1">
//                     <button className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition">
//                       <User className="w-4 h-4" />
//                       My Profile
//                     </button>
//                     <button className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition">
//                       <Settings className="w-4 h-4" />
//                       Settings
//                     </button>
//                   </div>
//                   <div className="border-t border-gray-100 py-1">
//                     <button className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition">
//                       <LogOut className="w-4 h-4" />
//                       Logout
//                     </button>
//                   </div>
//                 </motion.div>
//               </>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </header>
//   );
// }


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
  const avatarUrl = user?.avatar || `https://api.dicebear.com/7.0/avataaars.svg?seed=${displayEmail}`;

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white/80 px-6 backdrop-blur-md">

      {/* Left: Search Bar (Optional) */}
      <div className="flex flex-1 items-center">
        <div className="relative hidden sm:flex w-full max-w-md items-center">
          <Search className="absolute left-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search assessments, topics..."
            className="h-10 w-full rounded-full border border-gray-300 bg-gray-50 pl-10 pr-4 text-sm outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>
      </div>

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
            className="flex items-center gap-3 rounded-full border border-gray-200 bg-white p-1 pr-3 transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-expanded={isProfileOpen}
          >
            <Image
              src={avatarUrl}
              alt={displayName}
              width={32}
              height={32}
              className="rounded-full object-cover ring-2 ring-gray-100"
            />
            <div className="hidden flex-col items-start text-left sm:flex">
              <span className="text-sm font-semibold text-gray-700 leading-none">{displayName}</span>
              <span className="text-xs text-gray-500 mt-1">{displayRole}</span>
            </div>
            <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isProfileOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Dropdown Menu (Framer Motion for smooth animation) */}
          <AnimatePresence>
            {isProfileOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl border border-gray-100 bg-white p-1 shadow-lg shadow-black/5 ring-1 ring-black/5"
              >
                <div className="border-b border-gray-100 px-4 py-3 sm:hidden">
                  <p className="text-sm font-medium text-gray-900">{displayName}</p>
                  <p className="text-xs text-gray-500">{displayEmail}</p>
                </div>

                <div className="py-1">
                  <Link href="/dashboard/profile" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-indigo-600">
                    <User className="h-4 w-4" /> My Profile
                  </Link>
                  <Link href="/dashboard/settings" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-indigo-600">
                    <Settings className="h-4 w-4" /> Settings
                  </Link>
                </div>

                <div className="border-t border-gray-100 py-1">
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-red-600 transition-colors hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4" /> Sign out
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
