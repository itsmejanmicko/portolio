import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-8">
          {/* Logo or Branding */}
          <h1 className="text-3xl font-bold text-[#64ffda] tracking-wide mb-6 md:mb-0">
            Jan-Micko's<span className="text-gray-300">'s Portfolio</span>
          </h1>

          {/* Social Links */}
          <div className="flex space-x-8">
            <a
              href={import.meta.env.VITE_APP_GIT}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#64ffda] transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/john-mikko-i-mejia-2474b2249/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#64ffda] transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={import.meta.env.VITE_APP_OUTLOOK}
              className="hover:text-[#64ffda] transition"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">
              About Me
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
                      I am dedicated to learning and growing every day,
          driven by genuine passions for continuous
          improvements. My consistent efforts and commitments
          to my goals help me steadily progress and achieve
          new milestones.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/projects" className="hover:underline hover:text-[#64ffda]">
                  Projects
                </a>
              </li>
              <li>
                <a href={import.meta.env.VITE_APP_BLOG} className="hover:underline hover:text-[#64ffda]">
                  Blog
                </a>
              </li>
              <li>
                <Link  to="/contact" className="hover:underline hover:text-[#64ffda]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:your-email@example.com"
                  className="hover:underline hover:text-[#64ffda]"
                >
                  Email: mejia.johnmikkoi@gmail.com
                </a>
              </li>
              <li>
                <p>Phone: +63 9056742156</p>
              </li>
              <li>
                <p>Location: Quezon, Philippines</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-center items-center mt-12 border-t border-gray-800 pt-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Jan-Micko. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;