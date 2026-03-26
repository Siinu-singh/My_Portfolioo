'use client'; // Add 'use client' directive

import { motion } from 'framer-motion';

// Updated education data based on the resume
const educationData = [
  {
    institution: "Bhagwan Parshuram Institute of Technology, IPU",
    degree: "Bachelor of Technology in Computer Science",
    duration: "2021 - 2024",
    location: "Rohini, New Delhi",
    cgpa: "8.3 / 10.0",
  },
  {
    institution: "Govt. Polytechnic College Manesar",
    degree: "Diploma in Engineering",
    duration: "2018 - 2021",
    location: "Gurgaon, Haryana",
    cgpa: "7.0 / 10.0",
  },
];

const Education = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Stagger each education item
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div>
      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">Education</h3>
      <motion.div
        className="space-y-4"
        variants={containerVariants}
      // Let parent component (e.g., ExperienceAndEducationSection) control initial/whileInView
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row justify-between sm:items-start border-b border-border/30 pb-3 last:border-b-0 rounded px-2 -mx-2" // Added items-start for better alignment on smaller screens
            variants={itemVariants} // Animate each education item
            whileHover={{
              backgroundColor: "hsla(var(--accent) / 0.05)",
              x: 2, // Subtle shift on hover
              transition: { duration: 0.2 }
            }}
          >
            <div>
              <p className="font-medium text-foreground">{edu.institution}</p>
              <p className="text-sm text-muted-foreground">{edu.degree}</p>
              <p className="text-xs text-muted-foreground/80 mt-0.5">{edu.location}</p>
              {edu.cgpa && <p className="text-xs text-accent mt-0.5">CGPA: {edu.cgpa}</p>}
            </div>
            <div className="text-sm text-muted-foreground mt-1 sm:mt-0 sm:text-right flex-shrink-0">
              {edu.duration}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
