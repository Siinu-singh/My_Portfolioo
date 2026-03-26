'use client';

import { Users, Code, Coffee, Award, CalendarCheck, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';

const statsData = [
  { icon: <Activity size={36} />, value: 2, label: "Years of Experience" },
  { icon: <Code size={36} />, value: 2000, label: "Queries Processed / Day" },
  { icon: <Users size={36} />, value: 500000, label: "Property Records Extracted" },
  { icon: <Award size={36} />, value: 10000, label: "Articles AI-Humanised" },
];

// Animated Counter Component
const AnimatedCounter = ({ endValue, duration = 1500 }: { endValue: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Optional: Disconnect observer after first intersection
          // observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentRef = ref.current; // Capture ref value

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]); // Only depend on ref


  useEffect(() => {
      if (!isInView) return; // Only run animation if in view

      let startTime: number | null = null;
      let animationFrameId: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * endValue));
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
           setCount(endValue); // Ensure final value is exact
        }
      };

      animationFrameId = requestAnimationFrame(step);

      return () => cancelAnimationFrame(animationFrameId); // Cleanup on unmount or dependency change

    }, [endValue, duration, isInView]); // Rerun animation when isInView changes to true

  return <span ref={ref}>{count.toLocaleString()}+</span>; // Add '+' for effect
};


const StatsSection = () => {
   const containerVariants = {
     hidden: { opacity: 0 },
     visible: {
       opacity: 1,
       transition: {
         staggerChildren: 0.2,
         delayChildren: 0.1,
       },
     },
   };

   const itemVariants = {
     hidden: { y: 30, opacity: 0, scale: 0.9 },
     visible: {
       y: 0,
       opacity: 1,
       scale: 1,
       transition: {
         type: 'spring',
         stiffness: 100,
         damping: 15,
       },
     },
   };

  return (
    // Added subtle background gradient, adjust as needed
    <motion.section
        className="py-12 md:py-20 bg-gradient-to-b from-background to-secondary/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is visible
        variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-card rounded-lg shadow-md border border-border/30 hover:shadow-lg hover:border-accent/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.03 }} // Add slight scale on hover too
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div // Add motion to the icon for potential extra animation
                className="text-accent mb-4 inline-block"
                whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }} // Add icon jiggle/scale on hover
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                 {stat.icon}
               </motion.div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                 <AnimatedCounter endValue={stat.value} />
               </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;
