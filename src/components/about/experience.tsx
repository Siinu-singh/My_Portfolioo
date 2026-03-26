'use client'; // Add 'use client' directive

import { motion } from 'framer-motion';

// Updated experience data based on the resume
const experienceData = [
  {
    company: "Expedient Healthcare Marketing Pvt Ltd (Healthians)",
    role: "Artificial Intelligence Engineer",
    duration: "Nov 2025 - Present",
    location: "Delhi, India",
    descriptionPoints: [
      "Architected an LLM-powered email automation agent (RAG + OpenSearch) processing 2,000+ queries/day with 92% response accuracy, eliminating a 3-person manual review queue.",
      "Designed an AI inference pipeline combining embeddings, vector similarity search, and LLM prompting to retrieve company policies and generate accurate, context-aware customer responses.",
      "Improved prompt templates and retrieval strategies via iterative testing, increasing policy retrieval precision by 26% and cutting average response latency by 30%.",
      "Optimized AI workflows resulting in 30% faster response times and a 20% reduction in manual workload, significantly boosting scalability and customer satisfaction.",
    ],
  },
  {
    company: "Reeltor",
    role: "Artificial Intelligence Engineer → Frontend Developer",
    duration: "Jan 2024 - Nov 2025",
    location: "Delhi, India",
    descriptionPoints: [
      "Built an AI text humaniser (Ollama + spaCy) transforming 10,000+ articles, reducing AI-detection rate by 70% and improving content publish rate by 35%.",
      "Fine-tuned Qwen2.5 1.8b on Runpod GPU infrastructure; achieved 40% improvement in output quality vs base model for domain-specific real estate content.",
      "Engineered data extraction pipelines collecting 500,000+ property records across 1,300+ cities, reducing manual curation effort by 80%.",
      "Built React.js + Next.js dashboards integrating AI pipelines, enabling non-technical teams to trigger and monitor LLM workflows without engineering support.",
    ],
  },
];

const Experience = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // Stagger each timeline item
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  };

   const dotVariants = {
     hidden: { scale: 0 },
     visible: {
       scale: 1,
       transition: {
         delay: 0.1, // Delay slightly after item appears
         type: 'spring',
         stiffness: 400,
         damping: 10,
       },
     },
   };

   const bulletPointVariants = {
      hidden: { opacity: 0, x: -10 },
      visible: (i: number) => ({ // Custom function for staggered delay based on index
        opacity: 1,
        x: 0,
        transition: {
          delay: i * 0.05, // Stagger each bullet point slightly
          type: 'spring',
          stiffness: 200,
          damping: 15,
        },
      }),
   };

  return (
    <div>
      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">Experience</h3>
      <motion.div
        className="space-y-6 relative" // Added relative for gradient positioning
        variants={containerVariants}
        // Let parent component (AboutSection) control initial/whileInView
      >
        {/* Subtle Gradient Line - adjust colors and positioning as needed */}
        <div className="absolute left-[calc(-6px+1.5px)] top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/50 to-accent/30 z-[-1]"></div>

        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="relative pl-6 border-l border-transparent" // Made original border transparent
            variants={itemVariants} // Animate each experience block
          >
            {/* Dot on the timeline */}
            <motion.span
              className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-accent border-2 border-background"
              variants={dotVariants} // Animate the dot
             />

            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
              <div>
                <p className="font-medium text-foreground">{exp.role}</p>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </div>
              <div className="text-sm text-muted-foreground mt-1 sm:mt-0 sm:text-right flex-shrink-0">
                <p>{exp.duration}</p>
                <p className="text-xs">{exp.location}</p>
              </div>
            </div>
            <motion.ul // Animate the list container to stagger children
                className="list-none space-y-1 pl-0 mt-2"
                variants={containerVariants} // Reuse container for stagger effect
            >
               {exp.descriptionPoints.map((point, idx) => (
                 <motion.li
                    key={idx}
                    className="flex items-start"
                    custom={idx} // Pass index to custom variant function
                    variants={bulletPointVariants} // Animate each bullet point
                 >
                    <span className="text-accent mr-2 mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"></span>
                    <span className="text-sm text-muted-foreground">{point}</span>
                 </motion.li>
               ))}
             </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
