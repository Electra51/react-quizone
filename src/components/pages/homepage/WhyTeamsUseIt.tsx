"use client";

import { motion } from "framer-motion";
import { MousePointerClick, SlidersHorizontal, LineChart, Users2 } from "lucide-react";

const featureCards = [
  {
    title: "Interactive assessments",
    description: "Engage learners with polished, modern challenge screens and responsive layouts.",
  },
  {
    title: "Structured practice",
    description: "Move from beginner concepts to advanced architecture with confidence.",
  },
  {
    title: "Performance tracking",
    description: "Monitor progress with milestones, completion states, and simple metrics.",
  },
  {
    title: "Built for teams",
    description: "Support hiring, upskilling, and internal evaluation workflows in one place.",
  },
];

const stepMeta = [
  { icon: MousePointerClick, accent: "violet", tint: "bg-violet-50 text-violet-600", bar: "bg-violet-500" },
  { icon: SlidersHorizontal, accent: "sky", tint: "bg-sky-50 text-sky-600", bar: "bg-sky-500" },
  { icon: LineChart, accent: "emerald", tint: "bg-emerald-50 text-emerald-600", bar: "bg-emerald-500" },
  { icon: Users2, accent: "amber", tint: "bg-amber-50 text-amber-600", bar: "bg-amber-500" },
];

export default function WhyTeamsUseIt() {
  return (
    <section className="container-custom pb-20">
      <div className="mb-12 max-w-3xl">
        <p className="font-mono text-sm font-medium tracking-tight text-indigo-600">
          {"why-teams-use-it"}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          A practical assessment experience for modern frontend roles
        </h2>
      </div>

      <div className="relative grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2">
        {featureCards.map((feature, i) => {
          const meta = stepMeta[i];
          const Icon = meta.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="group relative bg-white p-8"
            >
              {/* left accent bar */}
              {/* <span className={`absolute inset-y-0 left-0 w-1 ${meta.bar}`} /> */}

              <div className="flex items-start gap-4">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${meta.tint}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <span className="font-mono text-xs text-slate-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}