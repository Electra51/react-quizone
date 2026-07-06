// src/components/ui/Button.tsx
"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      icon,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {

    
    const variants = {
      primary:
        "bg-linear-to-tr from-[#3452F3] to-[#442a94] text-white hover:shadow-lg hover:scale-[1.02]",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
      outline: "border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600",
      ghost: "text-gray-700 hover:bg-gray-100",
      danger: "bg-red-600 text-white hover:bg-red-700",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Please wait...</span>
          </>
        ) : (
          <>
            {icon}
            {children}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";