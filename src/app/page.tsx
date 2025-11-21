"use client";

import { motion } from "framer-motion";

const blurFadeIn = {
  hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
  visible: { filter: "blur(0px)", opacity: 1, y: 0 },
};

const spring = { type: "spring", stiffness: 300, damping: 30 };

export default function Home() {
  return (
    <div className="relative">
      <motion.main 
        initial="hidden" 
        animate="visible" 
        transition={{ staggerChildren: 0.08 }} 
        className="space-y-12 text-sm md:text-base"
      >
        <motion.section 
          variants={blurFadeIn} 
          transition={spring}
          className="space-y-4 group will-change-[transform,opacity,filter]"
        >
          <div className="mb-2 flex items-center gap-2 text-xs font-mono text-neutral-500">
            <span className="relative">
              <span className="relative z-10">ivan@dev:~$</span>
              <span className="pointer-events-none absolute inset-0 -translate-y-px translate-x-px text-emerald-500/30 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity">
                ivan@dev:~$
              </span>
            </span>
            <span className="text-neutral-500">
              cat profile.md
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-100 transition-[text-shadow,transform] duration-300 hover:-translate-y-0.5 hover:[text-shadow:2px_0_0_#22c55e,-2px_0_0_#38bdf8]">
            ivan_manylov
          </h1>
        <p className="text-neutral-400">
          full stack engineer based in zagreb, croatia.
          <br />
          building digital tools with minimalism and performance in mind.
        </p>
        <div className="flex gap-4 text-neutral-500">
          <a
            href="#"
            className="hover:text-neutral-200 transition-colors border-b border-transparent hover:border-neutral-200 pb-0.5"
          >
            github
          </a>
          <a
            href="#"
            className="hover:text-neutral-200 transition-colors border-b border-transparent hover:border-neutral-200 pb-0.5"
          >
            twitter
          </a>
          <a
            href="#"
            className="hover:text-neutral-200 transition-colors border-b border-transparent hover:border-neutral-200 pb-0.5"
          >
            email
          </a>
        </div>
      </motion.section>

      <motion.div 
        variants={blurFadeIn} 
        transition={spring}
        className="text-neutral-700 select-none flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase will-change-[transform,opacity,filter]"
      >
        <span className="text-neutral-800">/</span>
        <span className="flex-1 overflow-hidden">
          <span className="inline-block translate-y-[1px]">
            ---------------------------------------------
          </span>
        </span>
        <span className="text-neutral-600">sec</span>
      </motion.div>

      <motion.section 
        variants={blurFadeIn} 
        transition={spring}
        className="space-y-6 will-change-[transform,opacity,filter]"
      >
        <h2 className="font-bold text-neutral-200">experience</h2>
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <span className="font-medium">senior engineer @ tech_corp</span>
              <span className="text-neutral-500 text-xs">2022 - present</span>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              architecting scalable microservices and leading a team of 5 developers.
              improved system throughput by 40% using rust and grpc.
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <span className="font-medium">developer @ startup_inc</span>
              <span className="text-neutral-500 text-xs">2020 - 2022</span>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              built the core product from scratch using next.js and postgresql.
              implemented real-time collaboration features for 10k+ active users.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.div 
        variants={blurFadeIn} 
        transition={spring}
        className="text-neutral-700 select-none flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase will-change-[transform,opacity,filter]"
      >
        <span className="text-neutral-800">/</span>
        <span className="flex-1 overflow-hidden">
          <span className="inline-block translate-y-[1px]">
            ---------------------------------------------
          </span>
        </span>
        <span className="text-neutral-600">sec</span>
      </motion.div>

      <motion.section 
        variants={blurFadeIn} 
        transition={spring}
        className="space-y-6 will-change-[transform,opacity,filter]"
      >
        <h2 className="font-bold text-neutral-200">projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div 
            whileHover={{ y: -4, rotate: -0.4, transition: { duration: 0.15 } }}
            className="group relative border border-neutral-800 bg-neutral-900/30 p-4 hover:bg-neutral-950 hover:border-emerald-500/60 transition-all duration-150 project-card"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="font-medium text-neutral-200">term_ui</span>
              <span className="text-xs text-neutral-500 border border-neutral-800 px-1.5 py-0.5 rounded bg-black/40">rust</span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed mb-4">
              a zero-dependency terminal user interface library focused on performance and simplicity.
            </p>
            <div className="flex items-baseline justify-between text-[10px] font-mono">
              <a href="#" className="text-neutral-500 hover:text-emerald-300 underline decoration-neutral-700 underline-offset-2">view source</a>
              <span className="text-emerald-500/0 group-hover:text-emerald-400 group-hover:opacity-100 opacity-0 transition-all">&gt; git clone term_ui</span>
            </div>
          </motion.div>

          <motion.div 
             whileHover={{ y: -4, rotate: -0.4, transition: { duration: 0.15 } }}
             className="group relative border border-neutral-800 bg-neutral-900/30 p-4 hover:bg-neutral-950 hover:border-emerald-500/60 transition-all duration-150 project-card"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="font-medium text-neutral-200">cache_lite</span>
              <span className="text-xs text-neutral-500 border border-neutral-800 px-1.5 py-0.5 rounded bg-black/40">go</span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed mb-4">
              distributed in-memory cache with raft consensus algorithm implementation.
            </p>
             <div className="flex items-baseline justify-between text-[10px] font-mono">
              <a href="#" className="text-neutral-500 hover:text-emerald-300 underline decoration-neutral-700 underline-offset-2">view source</a>
              <span className="text-emerald-500/0 group-hover:text-emerald-400 group-hover:opacity-100 opacity-0 transition-all">&gt; go get</span>
            </div>
          </motion.div>
          
           <motion.div 
             whileHover={{ y: -4, rotate: -0.4, transition: { duration: 0.15 } }}
             className="group relative border border-neutral-800 bg-neutral-900/30 p-4 hover:bg-neutral-950 hover:border-emerald-500/60 transition-all duration-150 project-card"
           >
            <div className="flex justify-between items-start mb-2">
              <span className="font-medium text-neutral-200">pixel_art</span>
              <span className="text-xs text-neutral-500 border border-neutral-800 px-1.5 py-0.5 rounded bg-black/40">ts</span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed mb-4">
              browser-based pixel art editor with layer support and gif export.
            </p>
             <div className="flex items-baseline justify-between text-[10px] font-mono">
              <a href="#" className="text-neutral-500 hover:text-emerald-300 underline decoration-neutral-700 underline-offset-2">view source</a>
              <span className="text-emerald-500/0 group-hover:text-emerald-400 group-hover:opacity-100 opacity-0 transition-all">&gt; npm install</span>
            </div>
          </motion.div>

           <motion.div 
             whileHover={{ y: -4, rotate: -0.4, transition: { duration: 0.15 } }}
             className="group relative border border-neutral-800 bg-neutral-900/30 p-4 hover:bg-neutral-950 hover:border-emerald-500/60 transition-all duration-150 project-card"
           >
            <div className="flex justify-between items-start mb-2">
              <span className="font-medium text-neutral-200">notes_cli</span>
              <span className="text-xs text-neutral-500 border border-neutral-800 px-1.5 py-0.5 rounded bg-black/40">sh</span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed mb-4">
              minimalist note taking tool for the command line enthusiast.
            </p>
             <div className="flex items-baseline justify-between text-[10px] font-mono">
              <a href="#" className="text-neutral-500 hover:text-emerald-300 underline decoration-neutral-700 underline-offset-2">view source</a>
              <span className="text-emerald-500/0 group-hover:text-emerald-400 group-hover:opacity-100 opacity-0 transition-all">&gt; ./install.sh</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.div 
        variants={blurFadeIn} 
        transition={spring}
        className="text-neutral-700 select-none flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase will-change-[transform,opacity,filter]"
      >
        <span className="text-neutral-800">/</span>
        <span className="flex-1 overflow-hidden">
          <span className="inline-block translate-y-[1px]">
            ---------------------------------------------
          </span>
        </span>
        <span className="text-neutral-600">end</span>
      </motion.div>

      <motion.footer 
        variants={blurFadeIn} 
        transition={spring}
        className="text-xs text-neutral-600 flex justify-between items-center will-change-[transform,opacity,filter]"
      >
        <span>© 2025 ivan manylov</span>
        <span className="font-mono">src code</span>
      </motion.footer>
    </motion.main>
    </div>
  );
}
