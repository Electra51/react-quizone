// src/app/(marketing)/pricing/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started",
      price: { monthly: 0, yearly: 0 },
      features: [
        "3 assessments per month",
        "Basic AI analysis",
        "Community support",
        "Public profile",
        "Basic code editor"
      ],
      cta: "Get Started Free",
      popular: false,
      gradient: "from-gray-500 to-gray-700"
    },
    {
      name: "Pro",
      description: "For serious developers",
      price: { monthly: 19, yearly: 15 },
      features: [
        "Unlimited assessments",
        "Advanced AI analysis",
        "Priority support",
        "Custom portfolio",
        "Advanced code editor",
        "Performance analytics",
        "Downloadable certificates",
        "Interview preparation"
      ],
      cta: "Start Pro Trial",
      popular: true,
      gradient: "from-blue-600 to-purple-600"
    },
    {
      name: "Enterprise",
      description: "For teams and companies",
      price: { monthly: 99, yearly: 79 },
      features: [
        "Everything in Pro",
        "Team management",
        "Custom assessments",
        "API access",
        "Dedicated account manager",
        "SSO integration",
        "Advanced analytics",
        "Custom branding",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  const faqs = [
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied, contact us for a full refund."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans."
    },
    {
      question: "Can I switch plans later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes will be prorated."
    },
    {
      question: "Is there a student discount?",
      answer: "Yes! We offer 50% off Pro plans for students. Contact us with your student ID to get started."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 px-4 bg-linear-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose the plan that fits your needs. Upgrade or downgrade at any time.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-md border border-gray-200">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full font-medium transition ${
                billingCycle === "monthly"
                  ? "bg-linear-to-r from-blue-600 to-purple-600 text-white"
                  : "text-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-full font-medium transition ${
                billingCycle === "yearly"
                  ? "bg-linear-to-r from-blue-600 to-purple-600 text-white"
                  : "text-gray-600"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 p-8 transition hover:shadow-2xl ${
                  plan.popular ? "border-blue-500 shadow-xl scale-105" : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">
                      ${billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly}
                    </span>
                    {plan.price.monthly > 0 && (
                      <span className="text-gray-600 ml-2">/month</span>
                    )}
                  </div>
                  {billingCycle === "yearly" && plan.price.monthly > 0 && (
                    <p className="text-sm text-green-600 mt-2">
                      Billed annually (${plan.price.yearly * 12}/year)
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.name === "Enterprise" ? "/contact" : "/register"}
                  className={`block w-full py-3 rounded-lg font-semibold text-center transition ${
                    plan.popular
                      ? "bg-linear-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                      : "border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Compare Plans</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-linear-to-r from-blue-600 to-purple-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">Free</th>
                  <th className="px-6 py-4 text-center font-semibold">Pro</th>
                  <th className="px-6 py-4 text-center font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { feature: "Assessments per month", free: "3", pro: "Unlimited", enterprise: "Unlimited" },
                  { feature: "AI Analysis", free: "Basic", pro: "Advanced", enterprise: "Advanced" },
                  { feature: "Support", free: "Community", pro: "Priority", enterprise: "Dedicated" },
                  { feature: "Custom Branding", free: "❌", pro: "❌", enterprise: "✅" },
                  { feature: "API Access", free: "❌", pro: "❌", enterprise: "✅" },
                  { feature: "Team Management", free: "❌", pro: "❌", enterprise: "✅" }
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{row.free}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{row.pro}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-linear-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of developers who are advancing their careers with FrontendIQ
          </p>
          <Link
            href="/register"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl transition transform hover:scale-105"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}