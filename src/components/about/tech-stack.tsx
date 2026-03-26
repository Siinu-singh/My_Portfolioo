// @ts-nocheck - Disabling type checking for this file due to complex icon mapping
'use client'; // Add 'use client' directive

import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion'; // Import motion
import React from "react"; // Import React

// Import specific icons from lucide-react (for placeholders/defaults)
import { Code, Database, Server, Palette, Cog, GitBranch, LayoutTemplate, Zap, Cloud, Terminal, Bot, BrainCircuit, FileJson, DatabaseZap, Settings2, BarChart, Package } from 'lucide-react';

// Import colorful icons from react-icons/si (Simple Icons) - Copied from SkillsSection
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiNodedotjs, SiExpress, SiSpringboot, SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiSpringsecurity, SiHibernate, SiSocketdotio, SiThreedotjs, SiJsonwebtokens, SiGit, SiGithub
} from "react-icons/si";
import { FaCode, FaCloud, FaTools } from "react-icons/fa"; // Placeholders for Docker, Jenkins, AWS, etc.

// Mapping from skill name (lowercase) to colorful icon component - Copied from SkillsSection
const colorfulIcons: Record<string, React.ComponentType<{ size?: number | string; className?: string }>> = {
  html: SiHtml5,
  css: SiCss3,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  'next.js': SiNextdotjs,
  'tailwind css': SiTailwindcss,
  'framer motion': SiFramer,
  'shadcn ui': Palette, // Use Palette from lucide as placeholder if no specific icon
  'node.js': SiNodedotjs,
  'express.js': SiExpress,
  java: FaCode, // Placeholder for Java
  springboot: SiSpringboot,
  'rest apis': Server, // Use Server from lucide as placeholder
  mongodb: SiMongodb,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  'redux toolkit': FaTools, // Placeholder for Redux Toolkit
  git: SiGit,
  github: SiGithub,
  docker: FaTools, // Placeholder for Docker
  jenkins: FaTools, // Placeholder for Jenkins
  aws: FaCloud, // Placeholder for AWS
  vercel: FaCloud, // Placeholder for Vercel
  postman: FaTools, // Placeholder for Postman
  jira: FaTools, // Placeholder for Jira
  figma: FaTools, // Placeholder for Figma
  jwt: SiJsonwebtokens,
  hibernate: SiHibernate,
  'socket.io': SiSocketdotio,
  'three.js': SiThreedotjs,
};

// Function to get the colorful icon component - Copied from SkillsSection
const getSkillIcon = (skillName: string) => {
  const IconComponent = colorfulIcons[skillName.toLowerCase()];
  // Return the component or a default one if not found
  return IconComponent ? <IconComponent size={16} className="mr-1.5" /> : <Code size={14} className="mr-1.5 text-muted-foreground" />; // Default lucide icon
};


const techStackData = [
  // Combined from previous TechStack and SkillsSection Frontend
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "ShadCN UI",
  // Backend
  "Java", "SpringBoot", "Node.js", "Express.js", "REST APIs",
  // Database
  "MongoDB", "MySQL", "PostgreSQL",
  // State Management
  "Redux Toolkit",
  // Tools & Others
  "Git", "GitHub", "Docker", "Jenkins", "AWS", "Vercel", "Postman", "Jira", "Figma",
  // Added from Project Section
  "JWT", "Hibernate", "Socket.IO", "Three.js"
];

const TechStack = () => {
   const containerVariants = {
     hidden: {},
     visible: {
       transition: {
         staggerChildren: 0.05, // Stagger badges slightly
       },
     },
   };

   const itemVariants = {
     hidden: { scale: 0.8, opacity: 0 },
     visible: {
       scale: 1,
       opacity: 1,
       transition: {
         type: 'spring',
         stiffness: 260,
         damping: 20,
       },
     },
   };

  return (
    <div>
      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">Tech Stack</h3>
      <motion.div
        className="flex flex-wrap gap-3"
        variants={containerVariants}
        // Let parent component (AboutSection) control initial/whileInView
      >
        {techStackData.map((techName) => (
          <motion.div
            key={techName}
            variants={itemVariants} // Animate each badge
            whileHover={{ y: -3, scale: 1.05, boxShadow: "0px 5px 10px hsla(var(--accent) / 0.2)" }} // Enhanced hover effect
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Badge
              variant="secondary"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-secondary border border-border/50 hover:bg-accent/10 hover:border-accent/50 transition-colors duration-200 cursor-default text-foreground" // Added cursor-default and explicit text-foreground
            >
              {getSkillIcon(techName)} {/* Add icon here */}
              <span>{techName}</span> {/* Keep tech name */}
            </Badge>
           </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;
