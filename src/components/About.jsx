import React from "react";
import {
  Code2,
  Database,
  Globe,
  LayoutDashboard,
} from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full lg:mt-10 md:mt-6 mt-4 rounded-lg md:rounded-xl glass-bg p-4 md:p-6 lg:p-8 overflow-hidden"
    >
      <div className="w-full flex flex-col gap-8">
        
        <div className="text-center lg:text-left">
          <p className="text-gradient font-semibold text-sm md:text-base uppercase tracking-[4px]">
            About Me
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-black">
            Passionate About Building Modern Web Experiences
          </h2>

          <p className="mt-5 text-white/70 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl">
            A Full Stack Developer passionate about
            creating modern, responsive and user-focused web applications.
            I enjoy turning ideas into interactive digital experiences using
            technologies like React, Next.js, Typescript, Node.js, Express.js and MongoDB, PostgreSQL.
          </p>

          <p className="mt-4 text-white/70 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl">
            I focus on writing clean and scalable code while building
            smooth user interfaces with modern design systems, animations
            and optimized performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          
          <div className="glass-bg rounded-xl p-5 border border-white/10">
            <Code2 className="text-white mb-4" size={34} />

            <h3 className="text-xl font-bold text-white">
              Frontend Development
            </h3>

            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              Building responsive and interactive user interfaces using
              React.js, Next.js and Tailwind CSS.
            </p>
          </div>

          <div className="glass-bg rounded-xl p-5 border border-white/10">
            <Database className="text-white mb-4" size={34} />

            <h3 className="text-xl font-bold text-white">
              Backend Development
            </h3>

            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              Creating scalable server-side applications using Node.js,
              Express.js and MongoDB.
            </p>
          </div>

          <div className="glass-bg rounded-xl p-5 border border-white/10">
            <LayoutDashboard className="text-white mb-4" size={34} />

            <h3 className="text-xl font-bold text-white">
              UI/UX Focused
            </h3>

            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              Designing smooth and visually appealing experiences with
              modern layouts and animations.
            </p>
          </div>

          <div className="glass-bg rounded-xl p-5 border border-white/10">
            <Globe className="text-white mb-4" size={34} />

            <h3 className="text-xl font-bold text-white">
              Web Technologies
            </h3>

            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              Working with modern tools, APIs, authentication systems and
              deployment platforms.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;