'use client'; // Add 'use client' directive

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import TechStack from '@/components/about/tech-stack'; // Import TechStack
import Education from '@/components/about/education'; // Import Education
import Experience from '@/components/about/experience'; // Import Experience
import { motion } from 'framer-motion'; // Import motion

const AboutSection = () => {
  // Data (can be moved to separate files/services later)
  const aboutText = "I'm an AI Engineer with 2+ years of hands-on experience building production-grade LLM systems, RAG pipelines, and agentic AI workflows. I've shipped systems that process 2,000+ queries/day, reduced response times from 4 hours to under 2 minutes, and fine-tuned models that cut AI-detection rates by 70%. I work across the full AI lifecycle — from data extraction and vector search to cloud deployment on AWS — and I care deeply about building things that actually work at scale.";
  const location = "Gurugram, India"; // Updated location
  const profileImageUrl = "https://res.cloudinary.com/dsrht8rss/image/upload/v1746711807/WhatsApp_Image_2025-05-04_at_21.18.58_yv76vs.jpg";
  const aiHint = "person looking in mirror";

  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1, // Start animating children slightly after section is visible
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

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.section
      id="about"
      className="py-16 md:py-24 bg-background text-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column: Image, Intro Text, Location */}
          <motion.div
            className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left"
            variants={sectionVariants} // Use section variants to stagger children inside
          >
            <motion.div
              className="relative w-48 h-48 md:w-60 md:h-60 mb-6 rounded-full overflow-hidden shadow-lg border-4 border-accent/30"
              variants={imageVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsla(var(--accent)/0.4)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={profileImageUrl}
                alt="Suraj Kumar"
                width={300}
                height={300}
                sizes="(max-width: 768px) 192px, 240px"
                style={{ objectFit: 'cover' }}
                data-ai-hint={aiHint}
                className="transform transition-transform duration-300 h-full w-full"
                priority
              />
            </motion.div>
            <motion.p className="text-muted-foreground leading-relaxed mb-4 px-4 lg:px-0" variants={itemVariants}>
              {aboutText}
            </motion.p>
            <motion.div className="flex items-center text-muted-foreground text-sm" variants={itemVariants}>
              <MapPin size={16} className="mr-2 text-accent" />
              {location}
            </motion.div>
          </motion.div>

          {/* Right Column: Education, Experience, Tech Stack */}
          <motion.div
            className="lg:col-span-2 space-y-10"
            variants={sectionVariants} // Use section variants to stagger children inside
          >
            {/* Education Section */}
            <motion.div variants={itemVariants}>
              <Education />
            </motion.div>

            {/* Experience Section */}
            <motion.div variants={itemVariants}>
              <Experience />
            </motion.div>

            {/* Tech Stack Section */}
            <motion.div variants={itemVariants}>
              <TechStack />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
