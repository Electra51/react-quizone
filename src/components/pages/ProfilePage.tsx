"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { User, Mail, Lock, Camera, Save, Loader2, ShieldCheck, Briefcase, Home,  Globe, Code, FileText } from "lucide-react";
import Swal from "sweetalert2";
import { useAuth } from "@/src/context/AuthContext";
import { userApi } from "@/src/lib/api/user";

const ProfilePage = () => {
  const { user, refreshUser } = useAuth();
  
  // State for forms
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [experience, setExperience] = useState<number | "">("");
  const [skills, setSkills] = useState("");
  
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  
  // Loading states
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user) {
      setFullName(user.fullName || "");
      setBio(user.bio || "");
      setGithubUrl(user.githubUrl || "");
      setLinkedinUrl(user.linkedinUrl || "");
      setPortfolioUrl(user.portfolioUrl || "");
      setExperience(user.experience !== undefined ? user.experience : "");
      setSkills(user.skills ? user.skills.join(", ") : "");
    }
  }, [user]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  const avatarUrl = user.avatar || `/user.png`;

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      Swal.fire({
        icon: "error",
        title: "Invalid file",
        text: "Please select an image file",
      });
      return;
    }

    // Validate file size (e.g. max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      Swal.fire({
        icon: "error",
        title: "File too large",
        text: "Please select an image smaller than 5MB",
      });
      return;
    }

    try {
      setIsUploadingAvatar(true);
      await userApi.uploadAvatar(file);
      await refreshUser();
      
      Swal.fire({
        icon: "success",
        title: "Avatar updated",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Update failed",
        text: error.message || "Failed to upload avatar",
      });
    } finally {
      setIsUploadingAvatar(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsUpdatingProfile(true);
      
      const payload: any = { fullName };
      payload.bio = bio;
      payload.githubUrl = githubUrl;
      payload.linkedinUrl = linkedinUrl;
      payload.portfolioUrl = portfolioUrl;
      if (experience !== "") payload.experience = Number(experience);
      payload.skills = skills.split(",").map(s => s.trim()).filter(Boolean);

      await userApi.updateProfile(payload);
      await refreshUser();
      
      Swal.fire({
        icon: "success",
        title: "Profile updated",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Update failed",
        text: error.message || "Failed to update profile",
      });
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword || !newPassword) return;
    
    if (newPassword.length < 6) {
      Swal.fire({
        icon: "warning",
        title: "Password too short",
        text: "New password must be at least 6 characters long.",
      });
      return;
    }

    try {
      setIsUpdatingPassword(true);
      await userApi.changePassword({ currentPassword, newPassword });
      
      setCurrentPassword("");
      setNewPassword("");
      
      Swal.fire({
        icon: "success",
        title: "Password changed successfully",
        text: "Your password has been securely updated.",
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Change failed",
        text: error.message || "Failed to change password. Please check your current password.",
      });
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
        <p className="text-gray-500 mt-2">Manage your profile information and security preferences.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Avatar & Quick Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-1"
        >
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-indigo-100/20 text-center relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-10"></div>
            
            <div className="relative z-10">
              <div className="relative w-32 h-32 mx-auto mb-6 group cursor-pointer" onClick={handleAvatarClick}>
                <Image
                  src={avatarUrl}
                  alt={user.fullName}
                  fill
                  className="rounded-full object-cover ring-4 ring-white shadow-lg"
                />
                <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  {isUploadingAvatar ? (
                    <Loader2 className="w-8 h-8 text-white animate-spin" />
                  ) : (
                    <Camera className="w-8 h-8 text-white" />
                  )}
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/jpeg,image/png,image/webp"
                  className="hidden"
                />
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 truncate">{user.fullName}</h2>
              <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mt-1 mb-4">
                {user.role}
              </p>
              
              <div className="flex items-center justify-center gap-2 text-gray-600 bg-gray-50 py-2 px-4 rounded-xl text-sm">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="truncate">{user.email}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Forms */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Profile Form */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-indigo-100/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                <User className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Personal Information</h3>
            </div>
            
            <form onSubmit={handleUpdateProfile} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> Bio</div>
                </label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none resize-none"
                  placeholder="Tell us a little about yourself (max 500 characters)"
                  rows={3}
                  maxLength={500}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <div className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> Experience (Years)</div>
                  </label>
                  <input
                    type="number"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value === "" ? "" : Number(e.target.value))}
                    min="0"
                    max="50"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                    placeholder="e.g. 3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <div className="flex items-center gap-1.5"><Code className="w-4 h-4" /> Skills</div>
                  </label>
                  <input
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                    placeholder="React, TypeScript, Node.js"
                  />
                  <p className="text-xs text-gray-500 mt-1">Comma-separated list</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <div className="flex items-center gap-1.5"><Home className="w-4 h-4" /> GitHub URL</div>
                  </label>
                  <input
                    type="url"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                    placeholder="https://github.com/username"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <div className="flex items-center gap-1.5"><Home className="w-4 h-4" /> LinkedIn URL</div>
                  </label>
                  <input
                    type="url"
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> Portfolio URL</div>
                </label>
                <input
                  type="url"
                  value={portfolioUrl}
                  onChange={(e) => setPortfolioUrl(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={user.email}
                  disabled
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 text-gray-500 rounded-xl cursor-not-allowed"
                />
                <p className="text-xs text-gray-500 mt-1">Email address cannot be changed.</p>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={isUpdatingProfile}
                  className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors focus:ring-4 focus:ring-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isUpdatingProfile ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Save className="w-5 h-5" />
                  )}
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          {/* Password Form */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-indigo-100/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Security</h3>
            </div>
            
            <form onSubmit={handleChangePassword} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none"
                    placeholder="Enter current password"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none"
                    placeholder="Enter new password"
                    required
                    minLength={6}
                  />
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={isUpdatingPassword || !currentPassword || !newPassword}
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors focus:ring-4 focus:ring-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isUpdatingPassword ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <ShieldCheck className="w-5 h-5" />
                  )}
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;