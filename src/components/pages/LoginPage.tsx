// frontend/src/app/(auth)/login/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Lock, Home } from "lucide-react";
import { LoginFormData, loginSchema } from "@/src/lib/validations/auth";
import { authApi } from "@/src/lib/api";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import Swal from "sweetalert2";
import Image from "next/image";


export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  // ✅ Show success toast if coming from register
  useEffect(() => {
    const registered = searchParams.get("registered");
    
    if (registered === "true") {
      // Show SweetAlert2 toast
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "🎉 Account created successfully!<br/><small style='color:#666'>Please login to continue</small>",
        width: "400px",
      });

      // Remove query param from URL (clean URL)
      router.replace("/login", { scroll: false });
    }
  }, [searchParams, router]);

  const onSubmit = async (data: LoginFormData) => {
    setApiError("");
    setIsLoading(true);

    try {
      await authApi.login({
        email: data.email,
        password: data.password,
      });

      reset();
      router.push("/dashboard");
    } catch (error: any) {
      setApiError(error.message || "Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
  <div
      className="grid grid-cols-1 md:grid-cols-[45%_55%] md:gap-3 p-8">
      {/* Header */}
    
       <div className="flex flex-col justify-center items-center gap-3">
              <Image
                src="/logo1.png"
                alt="FrontendIQ logo"
                width={400}
                height={36}
                className="h-9 w-9 md:h-13 md:w-16 rounded-lg object-cover"
                priority
              />
          
              
              <div className="text-center mb-8 mt-5">
               <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-gray-600">Login to continue your learning journey</p>
              </div>
            </div>

     <div className="lg:pr-26"> {/* Error Message */}
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
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          icon={<Mail className="w-5 h-5" />}
          error={errors.email?.message}
          disabled={isLoading}
          {...register("email")}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          icon={<Lock className="w-5 h-5" />}
          error={errors.password?.message}
          disabled={isLoading}
          {...register("password")}
        />

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              {...register("rememberMe")}
              disabled={isLoading}
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Remember me</span>
          </label>
          <Link
            href="/forgot-password"
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Forgot password?
          </Link>
        </div>

        <Button type="submit" loading={isLoading} fullWidth>
          Login
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
          <Button variant="outline" type="button" disabled={isLoading}>
            <svg width="24px" height="24px" viewBox="0 0 30 30" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16" fill="#00ac47"/><path d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16" fill="#4285f4"/><path d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z" fill="#ffba00"/><polygon fill="#2ab2db" points="8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374"/><path d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z" fill="#ea4435"/><polygon fill="#2ab2db" points="8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626"/><path d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z" fill="#4285f4"/></svg>
            Google
          </Button>
          <Button variant="outline" type="button" disabled={isLoading}>
            <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            GitHub
          </Button>
        </div>

      {/* Register Link */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="text-blue-600 hover:text-blue-700 font-semibold"
        >
          Sign up
        </Link>
      </p>

    </div>
    </div>
  );
}