import { motion } from "framer-motion";
import { useState } from "react";
import expressvg from '../../utils/svg/Express.svg';
import firebasevg from '../../utils/svg/firebase-svgrepo-com.svg';
import mongodbvg from '../../utils/svg/mongodb-svgrepo-com.svg';
import nodejsvg from '../../utils/svg/node-js-svgrepo-com.svg';
import reactvg from '../../utils/svg/reactjs-svgrepo-com.svg';
import typescript from '../../utils/svg/typescript-svgrepo-com.svg';
import database from '../../utils/svg/browser-website-svgrepo-com.svg';
import frontent from '../../utils/svg/icons8-frontend-50.png';
import backend from '../../utils/svg/icons8-database-50.png';

const skills = [
  {
    title: "Optimization & Performance",
    description:
      "I prioritize both frontend and backend optimization using techniques such as code-splitting, lazy loading, and efficient state management on the frontend. On the backend, I optimize database queries, leverage indexing in MongoDB, and structure APIs effectively to ensure a scalable, high-performance experience.",
    img: database,
  },
  {
    title: "Frontend Development",
    description:
      "As a Junior Frontend Developer, I specialize in HTML, CSS, and JavaScript, along with experience in React and React Vite to build responsive and interactive web applications. My focus is on writing clean, maintainable code and creating seamless user experiences.",
    img: frontent,
  },
  {
    title: "Backend Development",
    description:
      "I have experience in Backend Development, managing server-side logic using MongoDB, Express.js, and Node.js. My skills include handling databases efficiently, optimizing API performance, and ensuring smooth integration between frontend and backend components.",
    img: backend,
  },
];

const technologies = [
  { title: "React", img: reactvg },
  { title: "Node.js", img: nodejsvg },
  { title: "Express.js", img: expressvg },
  { title: "MongoDB", img: mongodbvg },
  { title: "Firebase", img: firebasevg },
  { title: "TypeScript", img: typescript },
];

const loopingTechnologies = [...technologies, ...technologies];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#0a192f] text-white font-custom relative flex flex-col justify-center items-center py-20">
      {/* Centered Blurred Gradient */}
      <motion.div
        initial={{ rotate: "0deg", scale: 1, opacity: 0.6, y: 0 }}
        animate={{ rotate: "360deg", scale: [1, 1.2, 1.6], opacity: [0.6, 0.8, 0.6], y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-[350px] h-[350px] bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 blur-[160px] opacity-50 rounded-full"></div>
      </motion.div>

      {/* Title */}
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className="relative z-10 sm:px-32 px-6 py-10">
        <h1 className="text-xl font-bold underline decoration-white decoration-2 underline-offset-4">
          What <span className="text-purple-400">I can do →</span>
        </h1>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 sm:px-32 relative z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative transition-all duration-300 ${hoveredIndex !== null && hoveredIndex !== index ? "blur-sm opacity-50" : "opacity-100"}`}
          >
            <div className="bg-purple-900 rounded-lg shadow-2xl p-4">
              <div className="flex items-center gap-4">
                <img src={skill.img} alt={skill.title} className="w-10 h-10" />
                <h1 className="text-xl font-semibold">{skill.title}</h1>
              </div>
              <p className="mt-2 text-sm">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Technologies Carousel */}
      <div className="mt-10 text-xl font-bold"><p className=""><label className="text-purple-400">Technologies</label> I Use</p> </div>
      <div className="w-1/2 overflow-hidden mt-4 relative">
        <motion.div
          className="flex gap-5 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 10, ease: "linear" }}
        >
          {loopingTechnologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center justify-center px-4 py-4 min-w-[120px]">
              <img src={tech.img} alt={tech.title} className="w-10 h-10 rounded-xl" />
              <h1 className="text-sm mt-2">{tech.title}</h1>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
