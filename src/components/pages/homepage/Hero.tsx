"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const techStack = ["React", "Next.js", "TypeScript", "Tailwind CSS"];

export default function Hero() {
  return (
    <section className="container-custom grid gap-14 py-30 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      {/* Left column */}
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p
          className="font-mono text-sm font-medium tracking-tight text-indigo-600"
        >
          {"Frontend-developer-assessment-platform"}
        </motion.p>

        <motion.h1
          className="mt-1 text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl"
        >
          Hire frontend engineers who{" "}
          <span className="bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            ship
          </span>
          , not just talk.
        </motion.h1>

        <motion.p  className="mt-6 max-w-xl text-lg text-slate-600">
          FQ helps hiring teams,educators and developers benchmark React.js, Next.js, Typescript, and Tailwind CSS expertise through structured assessments and guided practice.
        </motion.p>

        <motion.div  className="mt-6 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-xs text-slate-500"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div  className="mt-9 flex flex-wrap gap-4">
          <Link
            href="/assessments"
            className="group inline-flex items-center gap-2 rounded-md  bg-linear-to-tr from-[#3452F3] to-[#442a94] text-white px-6 py-3 font-semibold  shadow-sm shadow-indigo-200 transition hover:shadow-md hover:shadow-indigo-300"
          >
            Explore Assessments
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/topics"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            View Topics
          </Link>
        </motion.div>
      </motion.div>

      {/* Right column — live assessment mock (signature element) */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
        className="relative"
      >
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl shadow-slate-900/10">
          {/* window chrome */}
          <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-950/60 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <div className="ml-3 flex gap-4 font-mono text-xs">
              <span className="border-b-2 border-indigo-400 pb-2.75 -mb-2.75 text-slate-200">
                useDebounce.ts
              </span>
              <span className="text-slate-500">Result.tsx</span>
            </div>
          </div>

          {/* code body */}
          <div className="relative px-5 py-5 font-mono text-[13px] leading-6">
            <pre className="whitespace-pre">
              <code>
                <div className="flex"><span className="mr-4 select-none text-slate-600">1</span><span><span className="text-violet-400">function</span> <span className="text-sky-400">useDebounce</span>(value: <span className="text-emerald-400">string</span>, delay: <span className="text-emerald-400">number</span>) {"{"}</span></div>
                <div className="flex"><span className="mr-4 select-none text-slate-600">2</span><span className="pl-4"><span className="text-violet-400">const</span> [debounced, setDebounced] = useState(value);</span></div>
                <div className="flex"><span className="mr-4 select-none text-slate-600">3</span><span></span></div>
                <div className="flex bg-amber-400/10"><span className="mr-4 select-none text-slate-600">4</span><span className="pl-4"><span className="text-violet-400">useEffect</span>(() =&gt; {"{"}</span></div>
                <div className="flex bg-amber-400/10"><span className="mr-4 select-none text-slate-600">5</span><span className="pl-8">
                  <span className="text-violet-400">const</span> timer = setTimeout(() =&gt; setDebounced(value), delay);
                </span></div>
                <div className="flex bg-amber-400/10"><span className="mr-4 select-none text-slate-600">6</span><span className="pl-8"><span className="text-violet-400">return</span> () =&gt; clearTimeout(timer);</span></div>
                <div className="flex bg-amber-400/10"><span className="mr-4 select-none text-slate-600">7</span><span className="pl-4">{"}, [value]);"} <span className="ml-2 inline-block h-4 w-0.5 animate-pulse bg-slate-400 align-middle" /></span></div>
                <div className="flex"><span className="mr-4 select-none text-slate-600">8</span><span></span></div>
                <div className="flex"><span className="mr-4 select-none text-slate-600">9</span><span className="pl-4"><span className="text-violet-400">return</span> debounced;</span></div>
                <div className="flex"><span className="mr-4 select-none text-slate-600">10</span><span>{"}"}</span></div>
              </code>
            </pre>

            {/* inline review bubble */}
            <div className="mt-4 flex items-start gap-2 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-xs text-amber-200">
              <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              <span>
                Line 7: missing <code className="text-amber-100">delay</code> in the dependency
                array — stale closure risk.
              </span>
            </div>
          </div>

          {/* test result strip */}
          <div className="flex items-center justify-between border-t border-slate-800 bg-slate-950/60 px-5 py-3 font-mono text-xs">
            <div className="flex items-center gap-4 text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" /> 3 passed
              </span>
              <span className="flex items-center gap-1.5 text-rose-400">
                <XCircle className="h-3.5 w-3.5" /> 1 failed
              </span>
            </div>
            <span className="rounded-full bg-slate-800 px-2.5 py-1 text-slate-200">80% score</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}