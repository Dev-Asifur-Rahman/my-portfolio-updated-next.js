import React from "react";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const skillGroups = {
    frontend: {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          icon: "",
        },
        {
          name: "CSS",
          icon: "",
        },
        {
          name: "JavaScript",
          icon: "",
        },
        {
          name: "TypeScript",
          icon: "",
        },
        {
          name: "React",
          icon: "",
        },
        {
          name: "Next.js",
          icon: "",
        },
        {
          name: "Tailwind CSS",
          icon: "",
        },
        {
          name: "Redux",
          icon: "",
        },
      ],
    },

    backend: {
      title: "Backend & Database",
      skills: [
        {
          name: "Node.js",
          icon: "",
        },
        {
          name: "Express.js",
          icon: "",
        },
        {
          name: "MongoDB",
          icon: "",
        },
        {
          name: "Firebase",
          icon: "",
        },
        {
          name: "REST API",
          icon: "",
        },
      ],
    },

    tools: {
      title: "Tools",
      skills: [
        {
          name: "Git",
          icon: "",
        },
        {
          name: "GitHub",
          icon: "",
        },
        {
          name: "Postman",
          icon: "",
        },
        {
          name: "VS Code",
          icon: "",
        },
        {
          name: "Figma",
          icon: "",
        },
        {
          name: "Netlify",
          icon: "",
        },
        {
          name: "Vercel",
          icon: "",
        },
      ],
    },
  };
  return (
    <div
      id="skills"
      className="w-full lg:mt-10 md:mt-6 mt-4 rounded-lg md:rounded-xl"
    >
      <div className="w-full grid grid-cols-1 gap-y-10">
        <section className="w-full">
          <Marquee speed={30} className="">
            {skillGroups?.frontend?.skills.map((skill, index) => {
              return (
                <div
                  style={{
                    boxShadow: "inset 0 4px 12px rgba(255,255,255,0.2)",
                  }}
                  className="h-20 aspect-square lg:mx-12 md:mx-8 mx-4 glass-bg rounded-md shadow-inner flex items-center justify-center"
                  key={index}
                >
                  Hello
                </div>
              );
            })}
          </Marquee>
        </section>
        <section className="w-full">
          <Marquee pauseOnHover speed={30} direction="right" className="">
            {skillGroups?.frontend?.skills.map((skill, index) => {
              return (
                <div
                  className="h-20 aspect-square lg:mx-12 md:mx-8 mx-4 glass-bg"
                  key={index}
                >
                  Hello
                </div>
              );
            })}
          </Marquee>
        </section>
        <section className="w-full">
          <Marquee pauseOnHover speed={30} className="">
            {skillGroups?.frontend?.skills.map((skill, index) => {
              return (
                <div
                  className="h-20 aspect-square lg:mx-12 md:mx-8 mx-4 glass-bg"
                  key={index}
                >
                  Hello
                </div>
              );
            })}
          </Marquee>
        </section>
      </div>
    </div>
  );
};

export default Skills;
