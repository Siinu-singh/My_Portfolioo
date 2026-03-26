// @ts-nocheck - Disabling type checking for this file due to complex icon mapping
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Database, Code, Server, Settings, Cloud, BarChart, Zap, BrainCircuit, Palette, GitBranch, Package } from "lucide-react"; // Keep lucide for category icons
import { motion } from 'framer-motion';
import React from "react"; // Import React

// Import colorful icons from react-icons/si (Simple Icons)
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiNodedotjs, SiExpress, SiSpringboot, SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiSpringsecurity, SiHibernate, SiSocketdotio, SiThreedotjs, SiJsonwebtokens, SiGit, SiGithub
} from "react-icons/si";
import { FaCode, FaCloud, FaTools } from "react-icons/fa"; // Placeholders for Docker, Jenkins, AWS, etc.

// Mapping from skill name (lowercase) to colorful icon component
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

const skillsData = [
  {
    category: "AI / Machine Learning",
    icon: <BrainCircuit size={18} className="text-accent" />,
    skills: ["LLMs", "RAG", "Agentic AI", "Prompt Engineering", "LangChain", "LlamaIndex", "Hugging Face", "NLP", "Embedding Generation", "Vector Similarity Search", "Fine-Tuning", "MLflow", "Model Evaluation", "Scikit-Learn", "PyTorch"]
  },
  {
    category: "Languages & Backend",
    icon: <Server size={18} className="text-accent" />,
    skills: ["Python", "JavaScript", "Java", "FastAPI", "Flask", "REST APIs", "Asynchronous Processing"]
  },
  {
    category: "Cloud & Infrastructure",
    icon: <Cloud size={18} className="text-accent" />,
    skills: ["AWS Bedrock", "AWS ECS/EKS", "AWS S3", "AWS Lambda", "Docker", "Kubernetes", "CI/CD Pipelines"]
  },
  {
    category: "Databases",
    icon: <Database size={18} className="text-accent" />,
    skills: ["MongoDB", "OpenSearch", "SQL", "Vector Databases"]
  },
  {
    category: "Frontend & Tools",
    icon: <Code size={18} className="text-accent" />,
    skills: ["React.js", "Next.js", "Pandas", "NumPy", "Git", "Jupyter Notebook", "Cursor AI", "Jira"]
  },
];


const SkillsSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const badgeContainerVariants = {
      hidden: {},
      visible: { transition: { staggerChildren: 0.05 } },
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 260, damping: 20 },
    },
  };

  // Function to get the colorful icon component
  const getSkillIcon = (skillName: string) => {
    const IconComponent = colorfulIcons[skillName.toLowerCase()];
    // Return the component or a default one if not found
    return IconComponent ? <IconComponent size={16} className="mr-1.5" /> : <Code size={14} className="mr-1.5 text-muted-foreground" />; // Default lucide icon
  };

  return (
    <motion.section
      id="skills"
      className="py-16 md:py-24 bg-background text-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
          variants={itemVariants}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((categoryData) => (
            <motion.div
              key={categoryData.category}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 20px hsla(var(--card-foreground) / 0.1)" }} // Adjusted shadow color
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full bg-card border border-border/30 rounded-xl shadow-sm overflow-hidden hover:border-accent/50 transition-colors duration-300">
                <CardHeader className="flex flex-row items-center space-x-3 pb-4 pt-6 px-6">
                  {categoryData.icon}
                  <CardTitle className="text-xl text-foreground">{categoryData.category}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={badgeContainerVariants}
                    // Animate badges when card is visible (inherited from parent)
                   >
                    {categoryData.skills.map((skill) => (
                      <motion.div
                         key={skill}
                         variants={badgeVariants}
                         whileHover={{ y: -2, scale: 1.05, boxShadow: "0 4px 8px hsla(var(--accent) / 0.15)" }} // Add subtle shadow on badge hover
                         transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-sm bg-secondary border border-border/50 hover:bg-accent/10 hover:border-accent/50 text-foreground transition-colors duration-200 cursor-default flex items-center px-3 py-1.5" // Ensure flex and center items
                        >
                          {getSkillIcon(skill)} {/* Get and render colorful icon */}
                          <span>{skill}</span> {/* Skill name */}
                        </Badge>
                       </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
