import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import AboutSection from "../common/About/AboutSection";
import React from "react";
import Contact from "../common/Contact/Contact";
import Experience from "../common/Experience/Experience";
import Projects from "./Projects";
import Skills from "./Skills";

const COLOR = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function LandingPage() {
  const color = useMotionValue(COLOR[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  const aboutRef = useRef<HTMLElement | null>(null);
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    animate(color, COLOR, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  // Variants for text animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <React.Fragment>
      <motion.section
        style={{ backgroundImage }}
        className="relative flex items-center justify-center min-h-screen px-6 py-24  text-gray-200 text-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Re-triggers when visible
      >
        {/* Grid Background Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px", 
            opacity: 0.2, 
          }}
        />

        <motion.div className="max-w-4xl mx-auto relative z-10" variants={containerVariants}>
          {/* Beta Label */}
          <motion.span
            className="inline-block px-4 py-2 text-sm bg-gray-800/50 text-gray-200 rounded-full mb-8 uppercase tracking-wide"
            variants={textVariants}
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            Let's explore
          </motion.span>

          {/* Animated Greeting */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight flex items-center justify-center gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {["O", "h", "a", "y", "o", "o"].map((letter, i) => (
              <motion.span key={i} variants={wordVariants} custom={i}>
                {letter}
              </motion.span>
            ))}
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 20, 0, -20, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            >
              🖐️
            </motion.span>
          </motion.h1>

          {/* Name & Title */}
          <motion.p
            className="text-2xl md:text-3xl font-bold text-gray-300 mb-6"
            variants={textVariants}
            whileInView="visible"
            viewport={{  amount: 0.5 }}
          >
            I'm <span className="text-purple-400">John Mikko Mejia</span>,  
            a Full Stack Web Developer specializing in <span className="text-green-400">M.E.R.N</span> Stack.
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
            variants={textVariants}
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            I’m a full stack developer: I break the front-end, panic, Google the error, take a coffee break, and then fix it on the back-end! 😂🔥☕
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="px-6 py-3 bg-purple-600 text-white rounded-full font-medium 
            transition-all duration-300 hover:bg-purple-700 
            shadow-lg hover:shadow-purple-500/50 active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -100 }}
            onClick={scrollToAbout}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{  amount: 0.5 }}
          >
            View my profile →
          </motion.button>
        </motion.div>
      </motion.section>

      <AboutSection aboutRef={aboutRef as React.RefObject<HTMLElement>} />
      <Experience />
      <Projects />
      <Skills />
      <Contact /> 
    </React.Fragment>
  );
}
