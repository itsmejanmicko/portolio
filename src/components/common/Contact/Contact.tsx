export default function Contact() {
 return (
   <section className="min-h-screen bg-[#0a192f] flex flex-col items-center justify-center px-6 py-20">
     <div className="max-w-2xl mx-auto text-center">
       <h2 className="text-[#64ffda] font-mono text-base mb-5">
         What&apos;s Next?
       </h2>
       <h3 className="text-[#ccd6f6] text-5xl font-bold mb-6">
         Get In Touch
       </h3>
       <p className="text-[#8892b0] text-lg mb-12 leading-relaxed">
         I&apos;m  currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
       </p>
       <a
         href="mailto:mejia.johnmikkoi@outlook.com"
         className="inline-block px-7 py-4 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors duration-200 font-mono text-sm"
       >
         Say Hello
       </a>
     </div>
   </section>
 )
}
