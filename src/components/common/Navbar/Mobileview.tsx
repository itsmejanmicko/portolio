import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import GithubSvg from "../../../utils/svg/GithubSvg";
import resume from '../../../utils/Mejia_John_Mikko_I_Resume-1.pdf'

interface MobileviewProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const links = [
  { to: "/", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
];

export default function MobileNav({ menuOpen, setMenuOpen }: MobileviewProps) {
  const location = useLocation();
  const isActive = (to: string) => location.pathname === to;

  return (
    menuOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="md:hidden bg-primary text-white text-center py-5 space-y-4"
      >
        <ol className="space-y-4 text-lg font-semibold flex flex-col">
          {links.map((item, index) => (
            <Link
              to={item.to}
              key={index}
              className={`${
                isActive(item.to)
                  ? "text-lg font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
                  : "text-lg font-semibold hover:text-green-400"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex-col flex items-center space-x-6 space-y-6 font-semibold">
              <Link
                to={import.meta.env.VITE_APP_GIT}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition"
              >
                <GithubSvg />
                <span>GitHub</span>
              </Link>
              <motion.a
                href={resume}
                download="Mejia_John_Mikko_Resume.pdf"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium 
                transition-all duration-300 hover:bg-purple-700 
                shadow-lg hover:shadow-purple-500/50 active:scale-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Resume</span>
              </motion.a>

            </div>
        </ol>
      </motion.div>
    )
  );
}
