'use client';

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react"; 
import Link from "next/link";
import React, { useState } from "react";
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import { TbSparkles } from "react-icons/tb";

const contactDetails = {
  email: "surajgpor@gmail.com",
  phone: "+91-9667965269",
  location: "Delhi, 110042, India",
  linkedin: "https://www.linkedin.com/in/suraj-singh-9613032f2/",
  github: "https://github.com/Siinu-singh",
};

// ── Glassmorphic Contact Card ────────────────────────────────────────────────
const ContactInfoCard = ({ icon, title, value, href, hue }: { icon: React.ReactNode; title: string; value: string; href?: string; hue: number }) => (
  <motion.div
    className="relative group p-6 rounded-2xl flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-300"
    whileHover={{ y: -4, scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    style={{
      background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
      backdropFilter: "blur(16px) saturate(140%)",
      WebkitBackdropFilter: "blur(16px) saturate(140%)",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: `0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)`,
    }}
  >
    {/* Inner hover glow */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ background: `radial-gradient(circle at center, hsl(${hue} 80% 60% / 0.15) 0%, transparent 70%)` }} />

    <motion.span
      className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full"
      whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{
        background: `hsl(${hue} 70% 50% / 0.2)`,
        color: `hsl(${hue} 90% 75%)`,
        border: `1px solid hsl(${hue} 70% 60% / 0.3)`,
        boxShadow: `inset 0 1px 0 hsl(${hue} 90% 75% / 0.2)`,
      }}
    >
      {icon}
    </motion.span>
    <h3 className="font-bold text-white mb-1.5 tracking-wide text-sm">{title}</h3>
    {href ? (
      <Link href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" 
            className="text-[13px] text-white/50 hover:text-white transition-colors duration-300 break-all">
        {value}
      </Link>
    ) : (
      <span className="text-[13px] text-white/50 break-all">{value}</span>
    )}
  </motion.div>
);


const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.currentTarget;
    
    setTimeout(() => {
        toast({
            title: "Message Sent! ✨",
            description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
        setIsSubmitting(false);
    }, 1200); 
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, filter: "blur(5px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)", transition: { type: 'spring', stiffness: 100, damping: 15 } },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 20, staggerChildren: 0.1 } },
  };

  const inputClass = "w-full h-12 bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl focus-visible:ring-1 focus-visible:ring-indigo-400/50 focus-visible:border-indigo-400/50 focus-visible:bg-white/10 transition-all duration-300";

  return (
    <motion.section
      id="contact"
      className="relative py-24 md:py-32 bg-background overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
    >
      {/* ── Deep Space Atmospheric Glow ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen" aria-hidden="true">
        <motion.div
           initial={{ opacity: 0.3 }}
           animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] lg:w-[800px] lg:h-[800px] rounded-full blur-[120px]"
           style={{ background: "radial-gradient(circle, hsl(260 80% 50% / 0.15) 0%, hsl(200 80% 40% / 0.05) 50%, transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* ── Header ── */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em]"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              color: "hsl(220 90% 75%)",
            }}
          >
            <TbSparkles size={13} /> Get In Touch
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 drop-shadow-sm">Me</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto font-light">
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* ── Left Side: Contact Info Cards ── */}
          <motion.div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5" variants={itemVariants}>
            <ContactInfoCard icon={<Mail size={20} strokeWidth={2.5} />} title="Email" value={contactDetails.email} href={`mailto:${contactDetails.email}`} hue={220} />
            <ContactInfoCard icon={<Phone size={20} strokeWidth={2.5} />} title="Phone" value={contactDetails.phone} href={`tel:${contactDetails.phone}`} hue={260} />
            <ContactInfoCard icon={<Linkedin size={20} strokeWidth={2.5} />} title="LinkedIn" value="@suraj-singh" href={contactDetails.linkedin} hue={200} />
            <ContactInfoCard icon={<MapPin size={20} strokeWidth={2.5} />} title="Location" value={contactDetails.location} hue={320} />
          </motion.div>

          {/* ── Right Side: Glass Contact Form ── */}
          <motion.div className="lg:col-span-3 h-full" variants={formVariants}>
            <div className="relative h-full w-full rounded-3xl overflow-hidden p-[1px]">
              {/* Outer glowing border loop */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 z-0" />
              
              <div className="relative z-10 h-full w-full rounded-3xl p-8 sm:p-10 flex flex-col justify-center"
                   style={{
                     background: "linear-gradient(160deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)",
                     backdropFilter: "blur(24px) saturate(180%)",
                     WebkitBackdropFilter: "blur(24px) saturate(180%)",
                     boxShadow: "0 24px 60px rgba(0,0,0,0.3)"
                   }}
              >
                <div className="mb-8">
                   <h3 className="text-2xl font-bold text-white mb-2">Send me a message</h3>
                   <div className="h-[2px] w-12 bg-gradient-to-r from-indigo-400 to-transparent rounded-full" />
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5 flex-grow flex flex-col justify-between">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <motion.div className="space-y-1.5" variants={itemVariants}>
                       <Label htmlFor="name" className="text-white/70 text-xs font-semibold uppercase tracking-wider ml-1">Name</Label>
                       <Input id="name" name="name" type="text" placeholder="Your Name" required className={inputClass}/>
                    </motion.div>
                    
                    <motion.div className="space-y-1.5" variants={itemVariants}>
                        <Label htmlFor="email" className="text-white/70 text-xs font-semibold uppercase tracking-wider ml-1">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="Your Email" required className={inputClass}/>
                    </motion.div>
                  </div>

                  <motion.div className="space-y-1.5" variants={itemVariants}>
                      <Label htmlFor="subject" className="text-white/70 text-xs font-semibold uppercase tracking-wider ml-1">Subject</Label>
                      <Input id="subject" name="subject" type="text" placeholder="Subject" required className={inputClass}/>
                  </motion.div>
                  
                  <motion.div className="space-y-1.5 flex-grow flex flex-col" variants={itemVariants}>
                    <Label htmlFor="message" className="text-white/70 text-xs font-semibold uppercase tracking-wider ml-1">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your Message" required rows={6} 
                              className={`${inputClass} resize-none pt-4 flex-grow`} />
                  </motion.div>
                   
                  <motion.div variants={itemVariants} className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full h-14 rounded-xl overflow-hidden font-semibold text-[15px] tracking-wide text-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{
                        background: "linear-gradient(135deg, hsl(230 80% 60% / 0.8), hsl(260 80% 60% / 0.8))",
                        boxShadow: "0 8px 32px hsl(230 80% 60% / 0.3), inset 0 1px 0 rgba(255,255,255,0.4)"
                      }}
                    >
                      {/* Top reflection sheen */}
                      <div className="absolute top-0 left-0 right-0 h-1/2 rounded-t-xl bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
                      
                      {/* Hover shimmer sweep */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background: "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
                          backgroundSize: "200% 100%",
                          animation: "shimmerContact 2s infinite linear"
                        }}
                      />
                      
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? "Sending..." : "Send Message"} 
                        <Send size={16} className={`transition-transform duration-300 ${isSubmitting ? "translate-x-4 opacity-0" : "group-hover:translate-x-1"}`} />
                      </span>
                    </button>
                  </motion.div>

                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
       {/* Inject shimmer keyframes */}
       <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmerContact {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}} />
    </motion.section>
  );
};

export default ContactSection;
