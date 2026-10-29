import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white about py-20 scroll-mt-20"
    >
      <div className="max-w-screen-lg px-6 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <div className="space-y-6 text-lg sm:text-xl leading-relaxed text-gray-300">
          <p>
            Hey, I'm Gaurav, a Full Stack Web Developer and Competitive
            Programming enthusiast who enjoys building impactful web
            applications and solving challenging problems. I work with
            technologies like React.js, Next.js, Node.js, Express.js,
            MongoDB, and SQL to turn ideas into practical, user-friendly
            products.
          </p>

          <p>
            Alongside development, I have a strong interest in Data Structures
            and Algorithms. I have solved 1000+ DSA problems across coding
            platforms and actively practice competitive programming to
            strengthen my problem-solving, analytical thinking, and coding
            skills. I have achieved a LeetCode rating of 1762 and continue
            working towards improving it.
          </p>

          <p>
            I am also involved in the competitive programming community as a
            Council Member and CP Head at Anveshan Coding Society. I have
            mentored 100+ students, helping them understand DSA concepts,
            approach problems systematically, and improve their coding
            abilities.
          </p>

          <p>
            On the development side, I enjoy building complete applications
            with responsive interfaces, secure authentication, database
            integration, REST APIs, and payment functionality. My projects
            reflect my interest in combining problem-solving with practical
            software development.
          </p>

          <p>
            I believe in continuous learning, writing clean and efficient
            code, and taking on challenges that push me beyond my comfort
            zone. I am always excited to collaborate with others, explore new
            technologies, and build solutions that create meaningful
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
          <div className="bg-gray-800 rounded-lg p-5 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400">
              1000+
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mt-2">
              DSA Problems
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-5 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400">
              1906
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mt-2">
              LeetCode Rating
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-5 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400">
              100+
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mt-2">
              Students Mentored
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-5 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400">
              MERN
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mt-2">
              Full Stack Development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;