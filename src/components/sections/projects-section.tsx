// @ts-nocheck
'use client';

import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from 'framer-motion';
import React, { useRef, useState, useCallback } from "react";
import { FiExternalLink } from "react-icons/fi";
import {
  SiGithub, SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
  SiExpress, SiMongodb, SiPython, SiFastapi, SiLangchain, SiDocker,
  SiStreamlit
} from "react-icons/si";
import { FaCode, FaBrain, FaRobot, FaDatabase, FaMicrophone, FaInstagram } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { TbSparkles } from "react-icons/tb";

// ── Tech icon map ─────────────────────────────────────────────────────────────
const techIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'react': SiReact, 'next.js': SiNextdotjs, 'typescript': SiTypescript,
  'node.js': SiNodedotjs, 'express.js': SiExpress, 'mongodb': SiMongodb,
  'python': SiPython, 'fastapi': SiFastapi, 'langchain': SiLangchain,
  'docker': SiDocker, 'rag': FaBrain, 'nlp': FaBrain, 'chromadb': FaDatabase,
  'opensearch': BsSearch, 'pandas': FaCode, 'asyncio': FaCode,
  'streamlit': SiStreamlit, 'default': FaCode,
};
const getTechIcon = (tech: string) => {
  const I = techIcons[tech.toLowerCase()] || techIcons.default;
  return <I size={11} />;
};

// ── Per-project palette ───────────────────────────────────────────────────────
const palette = {
  "AI Email Automation Agent":      { hue: 260, label: "AI / Automation",  icon: <FaRobot /> },
  "Real Estate Knowledge Base":     { hue: 156, label: "Data Pipeline / RAG", icon: <FaDatabase /> },
  "Voice Notes AI":                 { hue: 340, label: "MERN / GenAI",     icon: <FaMicrophone /> },
  "AI Instagram Post Generator":    { hue: 27,  label: "Multi-Agent AI",   icon: <FaInstagram /> },
  "RAG Chatbot":                    { hue: 200, label: "RAG / Search",     icon: <BsSearch /> },
  "My Portfolio":                   { hue: 290, label: "Frontend / 3D",    icon: <FaCode /> },
} as const;

// ── Projects data ─────────────────────────────────────────────────────────────
const projectsData = [
  {
    title: "AI Email Automation Agent",
    descriptionPoints: [
      "End-to-end pipeline: FastAPI ingestion → embeddings + OpenSearch retrieval → LLM generation → automated dispatch.",
      "Cut resolution time from 4 h to under 2 min via RAG-powered auto-responses (2 K queries / day, 92 % accuracy).",
      "Eliminated a 3-person manual review queue; deployed on AWS Lambda with CI/CD.",
    ],
    technologies: ["Python", "FastAPI", "LangChain", "OpenSearch", "RAG"],
    imageUrl: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=700&auto=format&fit=crop&q=80",
    link: "#", repoLink: "#",
  },
  {
    title: "Real Estate Knowledge Base",
    descriptionPoints: [
      "Multi-source scraper extracting 500 K+ listings across 1 300+ cities, feeding a vectorised knowledge base.",
      "Powers AI-driven property recommendations; reduced manual curation by 80 %.",
      "Built with Python, Pandas, and OpenSearch for scalable NLP-driven querying.",
    ],
    technologies: ["Python", "Pandas", "MongoDB", "OpenSearch", "NLP"],
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&auto=format&fit=crop&q=80",
    link: "#", repoLink: "#",
  },
  {
    title: "Voice Notes AI",
    descriptionPoints: [
      "Full-stack MERN app with live Web Speech API transcription and Gemini 1.5 Flash summarization.",
      "Smart re-enable logic prevents redundant API calls; full CRUD with audio playback.",
      "RESTful API with 6 endpoints — upload, transcription, summarization, and note management.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript"],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=700&auto=format&fit=crop&q=80",
    link: "#", repoLink: "#",
  },
  {
    title: "AI Instagram Post Generator",
    descriptionPoints: [
      "Parallel Content Agent (Claude 3.5) + Image Agent (DALL-E 3) orchestrated via FastAPI.",
      "Generates captions, hashtags, and 1024 × 1024 images from a single topic in seconds.",
      "Draft & publish flow with Next.js 14 frontend and async aiohttp orchestration.",
    ],
    technologies: ["FastAPI", "Python", "Next.js", "asyncio"],
    imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=700&auto=format&fit=crop&q=80",
    link: "#", repoLink: "#",
  },
  {
    title: "RAG Chatbot",
    descriptionPoints: [
      "Hybrid search: BM25 sparse + dense vectors fused via Reciprocal Rank Fusion → answers in 2–5 s.",
      "Cross-encoder reranking (ms-marco-MiniLM-L-6-v2) + RapidOCR for scanned PDF corpora.",
      "Open-source stack: BAAI/bge embeddings, ChromaDB, Gemini 2.0 Flash with source citations.",
    ],
    technologies: ["Python", "FastAPI", "ChromaDB", "Streamlit", "RAG"],
    imageUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&auto=format&fit=crop&q=80",
    link: "#", repoLink: "#",
  },
  {
    title: "My Portfolio",
    descriptionPoints: [
      "Next.js 14 + TypeScript portfolio with 3D starfield background and Earth-glow hero.",
      "Glassmorphism card system, Framer Motion micro-animations, and scroll-triggered reveals.",
      "Fully responsive across all breakpoints; ships with dark-mode-first design tokens.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Three.js", "Framer Motion"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMmLQ1liZsB1dJTPSd_hBBdasqOFNXgv-7AA&s",
    link: "#home", repoLink: "https://github.com/Siinu-singh",
  },
];

// ── Spotlight card component ───────────────────────────────────────────────────
const ProjectCard = React.memo(({ project, index }: { project: typeof projectsData[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const meta = palette[project.title as keyof typeof palette] ?? palette["My Portfolio"];

  const h = meta.hue;
  const glowColor   = `hsl(${h} 80% 60% / 0.45)`;
  const accentLight = `hsl(${h} 90% 75%)`;
  const accentBg    = `hsl(${h} 70% 50% / 0.18)`;
  const borderColor = `hsl(${h} 60% 70% / 0.25)`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      {/* ── Static gradient border ── */}
      <div
        className="absolute -inset-[1px] rounded-3xl pointer-events-none z-0"
        style={{
          background: `linear-gradient(135deg, rgba(255,255,255,0.08), transparent 50%, rgba(255,255,255,0.04))`,
        }}
      />

      {/* ── Glass card body ── */}
      <div
        className="relative rounded-3xl overflow-hidden flex flex-col h-full z-10"
        style={{
          background: "linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 50%, rgba(0,0,0,0.15) 100%)",
          backdropFilter: "blur(24px) saturate(160%)",
          WebkitBackdropFilter: "blur(24px) saturate(160%)",
          border: `1px solid ${borderColor}`,
          boxShadow: "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)",
        }}
      >

        {/* ── Reflection sheen (liquid-glass-inspired) ── */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-3xl">
          <div
            className="absolute top-0 left-0 right-0 h-1/2"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* ── Image area ── */}
        <div className="relative h-56 w-full overflow-hidden flex-shrink-0">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
            className="object-cover transition-transform duration-700"
            priority={index < 2}
          />
          {/* Multi-stop gradient scrim */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.78) 100%)"
          }} />



          {/* ── Category pill (glass on glass) ── */}
          <div
            className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide text-white/90"
            style={{
              background: "rgba(0,0,0,0.35)",
              backdropFilter: "blur(12px) saturate(140%)",
              WebkitBackdropFilter: "blur(12px) saturate(140%)",
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            <span style={{ color: accentLight }}>{meta.icon}</span>
            {meta.label}
          </div>

          {/* ── Index badge (top-right) ── */}
          <div className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white/70"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* ── Title at bottom of image ── */}
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-8">
            <h3 className="text-[1.2rem] font-bold text-white leading-tight drop-shadow-lg">
              {project.title}
            </h3>
          </div>
        </div>

        {/* ── Card body ── */}
        <div className="relative flex flex-col flex-grow px-5 pt-4 pb-5 gap-4 z-10">

          {/* Thin accent line under image */}
          <div className="h-[1px] w-full -mt-1 mb-1 rounded-full opacity-50"
            style={{ background: `linear-gradient(to right, ${accentLight}50, transparent)` }} />

          {/* Description bullets */}
          <ul className="space-y-2.5 flex-grow">
            {project.descriptionPoints.map((pt, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[12.5px] text-white/60 leading-relaxed">
                <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full" style={{ background: accentLight }} />
                {pt}
              </li>
            ))}
          </ul>

          {/* ── Tech badges — glass pills ── */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1 px-2.5 py-[5px] rounded-full text-[10.5px] font-medium transition-all duration-200 cursor-default"
                style={{
                  background: accentBg,
                  border: `1px solid hsl(${h} 60% 65% / 0.2)`,
                  color: accentLight,
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                <span className="opacity-75">{getTechIcon(tech)}</span>
                {tech}
              </span>
            ))}
          </div>

          {/* ── Action buttons ── */}
          <div className="flex gap-2 pt-0.5">
            {project.repoLink && project.repoLink !== "#" && (
              <motion.a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-[7px] text-[11px] font-semibold text-white/70 transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <SiGithub size={12} /> GitHub
              </motion.a>
            )}
            {project.link && project.link !== "#" && (
              <motion.a
                href={project.link}
                target={project.link.startsWith('#') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-[7px] text-[11px] font-semibold transition-all duration-200"
                style={{
                  background: `hsl(${h} 70% 55% / 0.25)`,
                  border: `1px solid hsl(${h} 70% 65% / 0.35)`,
                  color: accentLight,
                  backdropFilter: "blur(8px)",
                  boxShadow: `0 0 12px hsl(${h} 70% 55% / 0.2)`,
                }}
              >
                <TbSparkles size={12} /> Live Demo <FiExternalLink size={11} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
});
ProjectCard.displayName = "ProjectCard";

// ── Section ───────────────────────────────────────────────────────────────────
const ProjectsSection = () => (
  <section
    id="projects"
    className="relative py-20 md:py-32 overflow-hidden bg-background text-foreground"
  >
    {/* Ambient blobs */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -top-60 -left-60 h-[650px] w-[650px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, hsl(260 80% 55% / 0.35), transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, hsl(200 80% 55% / 0.3), transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute -bottom-32 left-1/4 h-[450px] w-[450px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, hsl(340 80% 55% / 0.25), transparent 70%)", filter: "blur(60px)" }} />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      {/* Heading */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Glass super-label */}
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em]"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            color: "hsl(260 90% 75%)",
          }}
        >
          <TbSparkles size={13} />
          What I've Built
        </div>

        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
          Projects{" "}
          <span className="relative inline-block">
            Showcase
            <span className="absolute bottom-1 left-0 right-0 h-[3px] rounded-full"
              style={{ background: "linear-gradient(to right, hsl(260 80% 65%), hsl(200 80% 65%), hsl(340 80% 65%))" }} />
          </span>
        </h2>

        <p className="mt-5 text-base text-white/45 max-w-lg mx-auto leading-relaxed">
          Production AI systems, full-stack applications & research projects — all shipped with care.
        </p>
      </motion.div>

      {/* 3-col grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
