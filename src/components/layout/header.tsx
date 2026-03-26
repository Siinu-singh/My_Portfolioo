'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, User, Code, Mail, Linkedin, Github, LayoutGrid } from 'lucide-react'; // Added LayoutGrid
import React, { useState, useEffect } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Import Tooltip components
import { motion } from 'framer-motion'; // Import motion

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Updated nav items to match reference image
  const navItems = [
    { name: 'Home', href: '#home', icon: <Home size={20} /> },
    { name: 'About', href: '#about', icon: <User size={20} /> },
    { name: 'Skills', href: '#skills', icon: <Code size={20} /> }, 
    { name: 'Projects', href: '#projects', icon: <LayoutGrid size={20} /> }, // Changed icon to LayoutGrid
    { name: 'Contact', href: '#contact', icon: <Mail size={20} /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/suraj-singh-461303252/', icon: <Linkedin size={20} />, external: true },
    { name: 'GitHub', href: 'https://github.com/Siinu-singh', icon: <Github size={20} />, external: true },
  ];

  // Handle scroll effect for subtle background/shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Trigger effect after scrolling down a bit more
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    // Delay animation until after initial load/paint
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 20, delay: 0.5 } }
  };

  const buttonVariants = {
      hover: { scale: 1.15, y: -2, transition: { type: "spring", stiffness: 400, damping: 10 } }, // Add slight lift on hover
      tap: { scale: 0.95, y: 0 }, // Ensure tap brings it back down slightly
      initial: { scale: 1, y: 0 }
    };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.header
        className={`w-auto transition-all duration-300 ${
          isScrolled ? 'shadow-lg rounded-full bg-card/90 backdrop-blur-md border border-border/60' : 'bg-transparent'
        }`}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
      <TooltipProvider delayDuration={100}> {/* Reduced delay for faster tooltip */}
        <nav className={`flex items-center justify-center space-x-2 px-4 py-2 transition-colors duration-300 ${isScrolled ? '' : 'bg-transparent'}`}> {/* Adjust padding/background based on scroll */}
          {navItems.map((item) => (
            <Tooltip key={item.name}>
              <TooltipTrigger asChild>
                 <motion.div // Wrap Button in motion.div for animations
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                 >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 w-9 h-9 transition-colors duration-200" // Ensure smooth color transition
                    asChild
                  >
                    <Link
                      href={item.href}
                      target={item.external ? '_blank' : '_self'}
                      rel={item.external ? 'noopener noreferrer' : ''}
                      aria-label={item.name}
                    >
                      {item.icon}
                    </Link>
                  </Button>
                </motion.div>
              </TooltipTrigger>
              {/* Tooltip Content appears below the icon */}
              <TooltipContent side="bottom" className="text-xs bg-popover border border-border shadow-md rounded px-2 py-1"> {/* Use popover background */}
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </TooltipProvider>
      </motion.header>
    </div>
  );
};

export default Header;
