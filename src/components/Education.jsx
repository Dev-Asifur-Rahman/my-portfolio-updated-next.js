import React from "react";

const Education = () => {
  return (
    <div
      id="education"
      className="w-full lg:mt-30 md:mt-25 mt-20 rounded-lg md:rounded-xl p-4 md:p-6 lg:p-8"
    >
      <div className="w-full flex flex-col items-center text-center mb-8 md:mb-12">
        <p className="uppercase tracking-[6px] text-sm text-gradient mb-3">
          Academic Journey
        </p>

        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold">
          Education & Learning
        </h2>

        <p className="max-w-2xl text-white/60 mt-4 text-sm md:text-base">
          My academic background, learning experiences and the journey that
          shaped my skills in software development and modern technologies.
        </p>

        <div className="mt-6 w-40 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="timeline-start mb-10 md:text-end glass-bg p-4 rounded-lg">
            <time className="font-mono text-sm text-gray-300">2021 - 2025</time>
            <div className="text-lg font-black text-white">
              BSc in Computer Science & Engineering
            </div>
            <p className="text-gray-300 mt-1">
              Manarat International University
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Currently studying core computer science subjects including web
              development, algorithms, database systems, and software
              engineering.
            </p>
          </div>

          <hr />
        </li>

        <li>
          <hr />

          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="timeline-end mb-10 glass-bg p-4 rounded-lg">
            <time className="font-mono text-sm text-gray-300">2019 - 2021</time>
            <div className="text-lg font-black text-white">
              Higher Secondary Certificate (HSC)
            </div>
            <p className="text-gray-300 mt-1">Science Group</p>
            <p className="text-gray-400 text-sm mt-2">
              Focused on Mathematics, Physics, and ICT which built a strong
              foundation for programming and problem solving.
            </p>
          </div>

          <hr />
        </li>

        <li>
          <hr />

          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="timeline-start md:text-end glass-bg p-4 rounded-lg">
            <time className="font-mono text-sm text-gray-300">2015 - 2018</time>
            <div className="text-lg font-black text-white">
              Secondary School Certificate (SSC)
            </div>
            <p className="text-gray-300 mt-1">Science Group</p>
            <p className="text-gray-400 text-sm mt-2">
              Completed secondary education with a strong interest in science
              and technology.
            </p>
          </div>

          <hr />
        </li>

        <li>
          <hr />

          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="timeline-end glass-bg p-4 rounded-lg">
            <time className="font-mono text-sm text-gray-300">2015</time>
            <div className="text-lg font-black text-white">
              Junior School Certificate (JSC)
            </div>
            <p className="text-gray-300 mt-1">
              Early academic foundation in science, mathematics, and general
              studies.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Education;
