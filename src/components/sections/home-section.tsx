// @ts-nocheck
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown, Hand } from 'lucide-react';
import Header from '@/components/layout/header';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import { SiPython, SiReact, SiFastapi } from 'react-icons/si';
import { TbSparkles } from 'react-icons/tb';

// Dynamically import StarryBackgroundClient with SSR disabled
const StarryBackgroundClient = dynamic(
  () => import('@/components/three/starry-background-client').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-background z-[-1]" />,
  }
);

// ── Enhanced Volumetric Earth Glow ─────────────────────────────────────────────
const EarthGlow = () => {
  return (
    <div 
      className="absolute bottom-0 left-0 right-0 h-[400px] md:h-[600px] overflow-hidden z-0 pointer-events-none mix-blend-screen"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
      }}
    >
      {/* Outer diffuse aura (massive width so side lines are far off screen) */}
      <motion.div
        initial={{ opacity: 0.25, scale: 1 }}
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-300px] md:bottom-[-400px] left-1/2 transform -translate-x-1/2 w-[250%] md:w-[200%] aspect-[2/1] rounded-[50%] blur-[120px]"
        style={{
          background: "radial-gradient(ellipse at top, hsl(260 80% 50% / 0.6) 0%, hsl(200 80% 40% / 0.3) 40%, transparent 70%)"
        }}
      />
      {/* Intense inner core */}
      <motion.div
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-150px] md:bottom-[-200px] left-1/2 transform -translate-x-1/2 w-[180%] md:w-[130%] aspect-[3/1] rounded-[50%] blur-[60px]"
        style={{
          background: "radial-gradient(ellipse at top, hsl(230 90% 65% / 0.9) 0%, hsl(280 80% 55% / 0.5) 40%, transparent 70%)"
        }}
      />
      {/* Soft Horizon Edge (Replacing the hard border-t) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-60px] md:bottom-[-80px] left-1/2 transform -translate-x-1/2 w-[150%] md:w-[110%] h-[120px] rounded-[50%] blur-[8px]"
        style={{
          background: "linear-gradient(to bottom, hsl(220 100% 80% / 0.8) 0%, transparent 20%)",
        }}
      />
    </div>
  );
};



const HomeSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0, filter: "blur(10px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-background"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Header />
      <StarryBackgroundClient />
      <EarthGlow />

      {/* Content Container */}
      <motion.div
        className="container relative z-20 px-4 flex flex-col items-center"
        variants={containerVariants}
      >
        {/* ── Premium Glassmorphic Badge ── */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-[13px] font-medium text-white/90 cursor-default"
            style={{
              background: "rgba(0,0,0,0.25)",
              backdropFilter: "blur(16px) saturate(180%)",
              WebkitBackdropFilter: "blur(16px) saturate(180%)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.15)"
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            Actively Seeking Job Opportunities
          </div>
        </motion.div>

        {/* ── Main Heading ── */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tight mb-8"
          variants={itemVariants}
          style={{ lineHeight: 1.05 }}
        >
          <span className="text-white drop-shadow-md">Architecting</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-indigo-200 to-sky-200 drop-shadow-sm">
            Intelligence.
          </span>
        </motion.h1>

        {/* ── Sub Heading ── */}
        <motion.p
          className="text-[1.1rem] sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          variants={itemVariants}
        >
          Hey, I'm <span className="text-white font-medium">Suraj Kumar</span>. I build production AI systems, scalable RAG pipelines, and agentic workflows that turn complex problems into effortless digital experiences.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
          variants={itemVariants}
        >
          {/* Liquid Glass Primary Button */}
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto relative group"
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {/* Outer animated glow */}
            <div className="absolute -inset-[2px] rounded-full blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-500"
              style={{ background: "linear-gradient(135deg, hsl(260 80% 60%), hsl(200 80% 60%))" }} />
            
            <a href="https://www.linkedin.com/in/suraj-singh-9613032f2/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full relative overflow-hidden rounded-full px-8 h-14 border border-white/20 transition-all duration-300"
                style={{
                  background: "linear-gradient(160deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 100%)",
                  backdropFilter: "blur(12px) saturate(140%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 24px rgba(0,0,0,0.3)"
                }}
              >
                {/* Upper reflection sheen */}
                <div className="absolute top-0 left-0 right-0 h-1/2 rounded-t-full pointer-events-none"
                  style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)" }} />
                
                {/* Sweeping shine on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"
                  style={{
                    background: "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.8) 50%, transparent 70%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 2s infinite linear"
                  }} 
                />
                
                <span className="relative z-10 flex items-center font-semibold text-white tracking-wide text-[15px]">
                  <Hand size={18} className="mr-2.5" /> Let's Connect
                </span>
              </Button>
            </a>
          </motion.div>

          {/* Frosted Outline Secondary Button */}
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto"
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <a href="https://drive.google.com/file/d/1R-Qsw2h56ZwfVisLdKRCp21olgPTvzwu/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>
              <Button variant="outline" size="lg" className="w-full text-white/80 hover:text-white rounded-full px-8 h-14 bg-transparent transition-all duration-300"
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(0,0,0,0.2)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)"
                }}
              >
                <span className="font-semibold tracking-wide text-[15px] flex items-center">
                  My Resume <ArrowDown className="ml-2.5 h-4 w-4" />
                </span>
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom fade scrim for seamless transition to next section */}
      <div className="absolute bottom-0 w-full h-[150px] bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      {/* Inject shimmer keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}} />
    </motion.section>
  );
};

export default HomeSection;
