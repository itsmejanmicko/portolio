import {  Github, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import scanning from '../../utils/scanning(2).gif'
import vite from '../../utils/vite(1).png'
import brainbox from '../../utils/brainbox(1).png'
import certigen from '../../utils/certigen(1).jpg'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubLink?: string
  externalLink?: string
  status?: string
  icon?: string
}

const projects: Project[] = [
  {
    title: "Image Classify (Web)",
    description: "Building a web app that can identify animals what breed they are.",
    technologies: ["React", "Tensorflow.js"],
    externalLink: "https://padetect.vercel.app/",
    icon:scanning,
  },
  {
    title: "EyAi your ai no memory companion",
    description: "A static site like a chatbot gpt-3 that you can ask about anything except your personal life.",
    technologies: ["React", "Gemini", "GPT-3", "TailwindCSS", "Express"],
    githubLink: "https://github.com/itsmejanmicko/eyayFr",
    externalLink: "https://eyay.vercel.app/",
    icon:vite,
  },
  {
    title: "EHalalan",
    description: "A capstone project in our school that is a web app that can help the user to know the candidates and vote online.",
    status: "This is under development case of updates about security and features",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    externalLink: "/",
    icon:vite,
  },
  {
    title: "BrainBox",
    description: "Brainbox is an e-commerce website I created purely for fun. After working on numerous typical e-commerce personal projects, I wanted to build something unique—an entertaining platform that humorously sells brains to enhance learning capacity.",
    status: "Note. Underdevelopment due to backend issues",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/itsmejanmicko/brainbox",
    externalLink: "https://brainbox-pi.vercel.app/",
    icon:brainbox,
  },
  {
    title: "Certigen",
    description: "A simple certificate generator that can generate a certificate for the user.",
    technologies: ["React", "TailwindCSS"],
    githubLink: "https://github.com/itsmejanmicko/certigen",
    externalLink: "https://certigen-zeta.vercel.app/",
    icon:certigen,
  },
  {
    title: "Quiz App",
    description: "I created this quiz app to test my knowledge of React and TypeScript. The app fetches questions from the Open Trivia Database API and displays them to the user.",
    technologies: ["React", "TypeScript"],
    externalLink: "https://quiz-gold-eta.vercel.app/",
    icon:vite,
  }
]

export default function Projects() {
  return (
    <div className="px-4 min-h-screen sm:px-6 bg-[#0a192f] w-full">
      <div className=" py-32 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          <span className="text-gray-200">Personal Projects</span>
        </h2>
        <h4 className="text-red-500 text-sm mt-2">
          <span>
            Note: These are all personal projects I built while studying. Commissioned work and capstone projects are not included due to user agreements.
          </span>
        </h4>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-12 w-full"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.3,  
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#0A192F] border border-[#172A45] rounded-lg p-6 hover:transform hover:-translate-y-1 transition-transform duration-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-start mb-4">
              {project.externalLink && (
                <Link to={project.externalLink}>
                  <img src={project.icon} className="w-10 h-10 text-[#64FFDA]" />
                </Link>
              )}
              <div className="flex gap-4">
                {project.githubLink && (
                  <Link to={project.githubLink} className="text-gray-400 hover:text-[#64FFDA]">
                    <Github className="w-5 h-5" />
                  </Link>
                )}
                {project.externalLink && (
                  <Link to={project.externalLink} className="text-gray-400 hover:text-[#64FFDA]">
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                )}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-200 mb-2">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              {project.description}
            </p>
            <p className="text-red-500 text-sm mb-4">{project.status}</p>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="text-xs text-gray-400">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
