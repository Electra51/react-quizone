"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAssessmentsOpen, setIsAssessmentsOpen] = useState(false);
  const pathname = usePathname();

  const assessmentCategories = [
    { name: "All Assessments", href: "/assessments", icon: "📋" },
    { name: "React", href: "/assessments/react", icon: "⚛️" },
    { name: "TypeScript", href: "/assessments/typescript", icon: "📘" },
    { name: "JavaScript", href: "/assessments/javascript", icon: "⚡" },
    { name: "CSS & Tailwind", href: "/assessments/css", icon: "🎨" },
    { name: "Next.js", href: "/assessments/nextjs", icon: "▲" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          
          {/* Logo */}
          <Link href="/" className="">
            <Image
              src="/logo1.png"
              alt="FrontendIQ logo"
              width={400}
              height={36}
              className="h-9 w-9 md:h-13 md:w-16 rounded-lg object-cover"
              priority
            />
            
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            
            {/* Assessments Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAssessmentsOpen(!isAssessmentsOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition"
              >
                <span>Assessments</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isAssessmentsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isAssessmentsOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsAssessmentsOpen(false)}
                  />
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-20">
                    {assessmentCategories.map((category) => (
                      <Link
                        key={category.href}
                        href={category.href}
                        className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition"
                        onClick={() => setIsAssessmentsOpen(false)}
                      >
                        <span className="text-xl">{category.icon}</span>
                        <span className="text-gray-700">{category.name}</span>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Other Links */}
            <Link href="/features" className="text-gray-700 hover:text-blue-600 transition">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition">
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition">
              Blog
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-6 py-2 bg-linear-to-tr from-[#3452F3] to-[#442a94] text-white rounded-md hover:shadow-lg transition font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            {/* Assessments Accordion */}
            <div>
              <button
                onClick={() => setIsAssessmentsOpen(!isAssessmentsOpen)}
                className="flex items-center justify-between w-full text-gray-700 font-medium"
              >
                <span>Assessments</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isAssessmentsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isAssessmentsOpen && (
                <div className="mt-2 space-y-2 pl-4">
                  {assessmentCategories.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      className="flex items-center space-x-2 py-2 text-gray-600 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{category.icon}</span>
                      <span>{category.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/features" className="block text-gray-700 font-medium" onClick={() => setIsOpen(false)}>
              Features
            </Link>
            <Link href="/pricing" className="block text-gray-700 font-medium" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <Link href="/blog" className="block text-gray-700 font-medium" onClick={() => setIsOpen(false)}>
              Blog
            </Link>

            <div className="pt-4 space-y-2 border-t">
              <Link
                href="/login"
                className="block w-full text-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block w-full text-center px-4 py-2 bg-linear-to-r from-blue-600 to-[#442a94] text-white rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}