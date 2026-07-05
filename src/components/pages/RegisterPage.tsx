// src/app/(auth)/register/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { User, Mail, Lock, Home, CheckCircle2 } from "lucide-react";
import { RegisterFormData, registerSchema } from "../../lib/validations/auth";
import { mockRegister } from "../../services/auth";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";


export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const password = watch("password");

  // Password strength indicator
  const getPasswordStrength = (pwd: string) => {
    if (!pwd) return { strength: 0, label: "", color: "" };
    
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[a-z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^A-Za-z0-9]/.test(pwd)) strength++;

    const levels = [
      { label: "Very Weak", color: "bg-red-500" },
      { label: "Weak", color: "bg-orange-500" },
      { label: "Fair", color: "bg-yellow-500" },
      { label: "Good", color: "bg-blue-500" },
      { label: "Strong", color: "bg-green-500" },
    ];

    return {
      strength,
      label: levels[strength - 1]?.label || "",
      color: levels[strength - 1]?.color || "bg-gray-300",
    };
  };

  const passwordStrength = getPasswordStrength(password);

  const onSubmit = async (data: RegisterFormData) => {
    setApiError("");
    setSuccessMessage("");
    setIsLoading(true);

    try {
      const response = await mockRegister(data);

      if (response.success) {
        setSuccessMessage(response.message);
        reset();
        // Redirect to login after 2 seconds
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        setApiError(response.message);
      }
    } catch (error) {
      setApiError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
        <p className="text-gray-600">Start your frontend assessment journey</p>
      </div>

      {/* Success Message */}
      {successMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
        >
          <p className="text-green-800 text-sm font-medium">✓ {successMessage}</p>
        </motion.div>
      )}

      {/* Error Message */}
      {apiError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
        >
          <p className="text-red-800 text-sm font-medium">⚠ {apiError}</p>
        </motion.div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Input
          label="Full Name"
          type="text"
          placeholder="John Doe"
          icon={<User className="w-5 h-5" />}
          error={errors.fullName?.message}
          {...register("fullName")}
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          icon={<Mail className="w-5 h-5" />}
          error={errors.email?.message}
          {...register("email")}
        />

        <div>
          <Input
            label="Password"
            type="password"
            placeholder="Create a strong password"
            icon={<Lock className="w-5 h-5" />}
            error={errors.password?.message}
            helperText="Must contain uppercase, lowercase, number & special character"
            {...register("password")}
          />

          {/* Password Strength Indicator */}
          {password && (
            <div className="mt-2">
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className={`h-1 flex-1 rounded-full transition-all ${
                      level <= passwordStrength.strength
                        ? passwordStrength.color
                        : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-gray-600">
                Password strength: <span className="font-semibold">{passwordStrength.label}</span>
              </p>
            </div>
          )}
        </div>

        <Input
          label="Confirm Password"
          type="password"
          placeholder="Re-enter your password"
          icon={<Lock className="w-5 h-5" />}
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        {/* Terms & Conditions */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="agreeToTerms"
            {...register("agreeToTerms")}
            className="w-4 h-4 mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="agreeToTerms" className="text-sm text-gray-700 cursor-pointer">
            I agree to the{" "}
            <Link href="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
              Privacy Policy
            </Link>
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="text-sm text-red-500">⚠ {errors.agreeToTerms.message}</p>
        )}

        <Button type="submit" loading={isLoading} fullWidth>
          Create Account
        </Button>
      </form>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      {/* Social Login */}
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" type="button">
          <Home className="w-5 h-5" />
          Google
        </Button>
        <Button variant="outline" type="button">
          <Home className="w-5 h-5" />
          GitHub
        </Button>
      </div>

      {/* Login Link */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-blue-600 hover:text-blue-700 font-semibold"
        >
          Login
        </Link>
      </p>

      {/* Benefits */}
      <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-200">
        <p className="text-xs text-blue-900 font-semibold mb-3">✨ What you get:</p>
        <ul className="space-y-2">
          {[
            "3 free assessments",
            "AI-powered skill analysis",
            "Personalized learning path",
            "Join 50K+ developers",
          ].map((benefit, i) => (
            <li key={i} className="flex items-center text-xs text-blue-700">
              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}