import { motion } from "framer-motion";
import ojt from "../../../utils/ojt(1).jpg";
import switchI from "../../../utils/switch.jpg";

export default function Experience() {
  const experiences = [
    {
      title: "Onsite Product Distribution (Converge)",
      description:
        "Managed onsite product distribution at specific client locations, including Converge Ph, ensuring timely delivery and setup of all products.",
      image: ojt,
    },
    {
      title: "Network Engineer (IMVI)",
      description:
        "Configured network equipment such as Cisco and Linksys, assisting employees in setting up and configuring products and directing them to clients. Provided technical support for troubleshooting network issues, ensuring optimal performance and connectivity. Assisted in maintaining network security by implementing firewall rules and access controls. Collaborated with teams to deploy new networking solutions and improve overall IT infrastructure efficiency.",
      image: switchI,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#1a2338] text-gray-300">
     <div className="flex items-center justify-center py-10">
       <motion.label
         initial={{ x: -200, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.8, ease: "easeInOut" }}
         viewport={{ once: false, amount: 0.5 }} // Re-animates when visible
         className="text-xl text-purple-400 font-semibold underline"
       >
         Work Experience
       </motion.label>
     </div>

      <section className="px-6 md:px-12 lg:px-32 flex flex-col items-center justify-center py-10 space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{rotateY: 20 , scale:1.1}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }} // Re-animates when visible
            className={`relative w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-2 ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image container */}
            <div className="relative flex justify-center lg:justify-start w-full max-w-sm">
              <img
                src={exp.image}
                alt={exp.title}
                className="rounded-lg shadow-lg object-cover w-full h-64"
              />
            </div>

            {/* Overlay container */}
            <div className="relative bg-gradient-to-r from-black/60 to-black/10 text-white p-4 md:p-6 lg:p-8 rounded-lg shadow-lg w-full lg:w-3/5">
              <h3 className="text-sm md:text-lg font-semibold text-purple-300 uppercase mb-2">
                Internship
              </h3>
              <h2 className="text-xl md:text-2xl font-bold mb-4">{exp.title}</h2>
              <p className="text-sm md:text-base leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
