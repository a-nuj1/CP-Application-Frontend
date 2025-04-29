import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LogoImg from "../../assets/pp.png";

const MeetDeveloper = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const socialLinks = [
    {
      name: "Twitter",
      url: "https://x.com/_anuj01",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anuj-kumar-gupta-631651227/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/a-nuj1",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:anujgupta1532003@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-2xl mx-auto">
        {/* Profile Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="mb-8 bg-purple-700 p-1 rounded-full shadow-md shadow-purple-500/50 hover:shadow-purple-400/70 transition-shadow duration-300"
          >
            <img
              src={LogoImg}
              alt="Anuj Gupta"
              className="w-48 h-48 rounded-full object-cover border-4 border-white"
            />
          </motion.div>

          <motion.h1
            className="text-4xl font-bold text-white mb-2"
            variants={itemVariants}
          >
            Anuj Gupta
          </motion.h1>

          <motion.p
            className="text-xl text-purple-300 mb-6"
            variants={itemVariants}
          >
            Full Stack Web Developer
          </motion.p>

          <motion.p
            className="text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            Hey there! 👋 I’m <strong>Anuj Gupta</strong> — a passionate 
            full-stack developer with a love for clean UI, clever logic, and
            Tea ☕. With 1+ year of experience working on full-stack web
            apps using React, Node.js, and MongoDB, I thrive on turning complex
            problems into elegant, scalable solutions.
            <br/>
            <br />
            On another note, I’ve solved over 900 problems on LeetCode and reached a peak rating of 1855  — always sharpening my problem-solving skills.
            <br/>
            <br />
            My go-to tech stack:{" "}
            <strong>JavaScript, React, Node.js, Express.js, MongoDB</strong>
           .
            <br />
            <br />
            Always up for building cool stuff, learning new tricks, or just
            geeking out over tech.
          </motion.p>
        </motion.div>

        {/* Connect Section */}
        <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Connect With Me
          </h2>
          <motion.div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                custom={index}
                variants={itemVariants}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center w-6 h-6 text-gray-300 group-hover:text-white">
                  {link.icon}
                </span>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-purple-300 transition-opacity duration-300 whitespace-nowrap">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Fun Quote */}
        <motion.div variants={itemVariants} className="mt-10 text-center">
          <p className="text-yellow-400 italic">
            I have a joke on async functions… but you’ll get it later. 😄
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MeetDeveloper;
