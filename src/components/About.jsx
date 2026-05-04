import React from "react";
import { Code2, Database, Globe, LayoutDashboard } from "lucide-react";

const About = () => {
  const aboutCard = [
    {
      logo: <Code2 className="text-white mb-4" size={34} />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using React.js, Next.js and Tailwind CSS.",
    },
    {
      logo: <Database className="text-white mb-4" size={34} />,
      title: "Backend Development",
      description:
        "Creating scalable server-side applications using Node.js, Express.js and MongoDB.",
    },
    {
      logo: <LayoutDashboard className="text-white mb-4" size={34} />,
      title: "UI/UX Focused",
      description:
        "Designing smooth and visually appealing experiences with modern, layouts and animations.",
    },
    {
      logo: <Globe className="text-white mb-4" size={34} />,
      title: "Web Technologies",
      description:
        "Working with modern tools, APIs, authentication systems and deployment platforms.",
    },
  ];
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
            A <span className="text-gradient ">Full Stack Developer</span>{" "}
            passionate about creating modern, responsive and user-focused web
            applications. I enjoy turning ideas into interactive digital
            experiences using technologies like React, Next.js, Typescript,
            Node.js, Express.js and MongoDB, PostgreSQL.
          </p>

          <p className="mt-4 text-white/70 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl">
            I focus on writing clean and scalable code while building smooth
            user interfaces with modern design systems, animations and optimized
            performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {aboutCard?.map((card, index) => {
            return (
              <div key={index} className="glass-bg rounded-xl p-5 border border-white/10 hover:scale-105 transition-all duration-200">
                {card?.logo}
                <h3 className="text-xl font-bold text-white">
                  {card?.title}
                </h3>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  {card?.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
