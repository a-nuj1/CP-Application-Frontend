import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LogoImg from "../../assets/pp.png";
import Tabish from "@/assets/bgre.png";
import AkhileshImg from "../../assets/akhilesh.jpg";

const developers = [
  {
    name: "Akhilesh Gupta",
    role: "Full Stack Web Developer",
    img: AkhileshImg,
    bio: (
      <>
        Hey there! 👋 I'm <strong>Akhilesh Gupta</strong> — a passionate full-stack developer with 1+ year of experience building web applications using React.js, Node.js, and modern JavaScript technologies.<br /><br />I've worked on real-world projects like <strong>Tipsy Town Restaurant</strong> and <strong>Hotel Raj Palace</strong>, specializing in responsive UI design and seamless API integration.<br /><br />My tech stack: <strong>JavaScript, React, Node.js, Next.js, MongoDB, Tailwind CSS</strong><br /><br />Always excited to collaborate on innovative projects and learn new technologies!
      </>
    ),
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/Akhilesh10gupta",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
        ),
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/akhilesh-gupta-826067228/",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
        ),
      },
      {
        name: "Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=gakhilesh946@gmail.com&su=Hello from CP Application&body=Hi Akhilesh, I saw your profile on the CP Application!",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
        ),
      },
    ],
    quote: "Code is like humor. When you have to explain it, it's bad. 😄",
    color: "purple",
  },
  {
    name: "Anuj Gupta",
    role: "Full Stack Web Developer",
    img: LogoImg,
    bio: (
      <>
        Hey there! 👋 I'm <strong>Anuj Gupta</strong> — a passionate full-stack developer with a love for clean UI, clever logic, and Tea ☕. With 1+ year of experience working on full-stack web apps using React, Node.js, and MongoDB, I thrive on turning complex problems into elegant, scalable solutions.<br /><br />On another note, I've solved over 900 problems on LeetCode and reached a peak rating of 1855 — always sharpening my problem-solving skills.<br /><br />My go-to tech stack: <strong>JavaScript, React, Node.js, Express.js, MongoDB</strong>.<br /><br />Always up for building cool stuff, learning new tricks, or just geeking out over tech.
      </>
    ),
    socials: [
      {
        name: "Twitter",
        url: "https://x.com/_anuj01",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
        ),
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anuj-kumar-gupta-631651227/",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
        ),
      },
      {
        name: "GitHub",
        url: "https://github.com/a-nuj1",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
        ),
      },
      {
        name: "Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=anujgupta1532003@gmail.com&su=Hello from CP Application&body=Hi Anuj, I saw your profile on the CP Application!",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
        ),
      },
    ],
    quote: "I have a joke on async functions… but you'll get it later. 😄",
    color: "purple",
  },
  {
    name: "Tabish Javed",
    role: "Frontend Developer",
    img: Tabish,
    bio: (
      <>
        Hey there! 👋 I'm <strong>Tabish Javed</strong> — a dedicated frontend developer with a strong passion for building beautiful, responsive, and high-performance web applications using React, Tailwind CSS, and modern JavaScript tools.<br /><br />
        I've built projects like <a href="https://github.com/tabish-27/PicLingo" target="_blank" rel="noopener noreferrer" className="underline text-purple-300 hover:text-purple-400">PicLingo</a> and <a href="https://github.com/tabish-27/CP-Application-Frontend" target="_blank" rel="noopener noreferrer" className="underline text-purple-300 hover:text-purple-400">CP Application Frontend</a>, and I'm currently working on <strong>Zaiqa Bites</strong>, where I'm refining my skills in React, JSX, component design, and frontend architecture.<br /><br />
        On the DSA side, I've solved <strong>150+ problems</strong> across Sliding Window, Binary Search, and more — because clean logic is just as satisfying as clean UI.<br /><br />
        My current stack: <strong>JavaScript, React, Tailwind CSS, Parcel</strong> 
      </>
    ),
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tabish-javed/",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
        ),
      },
      {
        name: "GitHub",
        url: "https://github.com/tabish-27",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
        ),
      },
      {
        name: "Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=tabishjaved2030@gmail.com&su=Hello from CP Application&body=Hi Tabish, I saw your profile on the CP Application!",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
        ),
      },
    ],
    quote: "I would tell you a joke about closures… but it's not open to everyone. 😂",
    color: "purple",
  },
];

const MeetDeveloper = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-8xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {developers.map((dev, index) => (
            <motion.div
              key={dev.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl shadow-2xl p-8 border border-gray-600"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className={`mb-8 bg-gradient-to-br from-${dev.color}-600 to-${dev.color}-700 p-2 rounded-full shadow-lg shadow-${dev.color}-500/30 hover:shadow-${dev.color}-400/50 transition-all duration-300`}
                >
                  <img
                    src={dev.img}
                    alt={dev.name}
                    className={`w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl ${dev.name === "Akhilesh Gupta" ? "object-top" : ""}`}
                  />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.2 }}
                  className="text-4xl font-bold text-white mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                >
                  {dev.name}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  className={`text-xl text-${dev.color}-300 mb-8 font-medium`}
                >
                  {dev.role}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  className="text-gray-300 leading-relaxed text-center mb-8 text-base"
                >
                  {dev.bio}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="flex justify-center space-x-6 mb-8"
                >
                  {dev.socials.map((link, linkIndex) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group p-4 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.2 + linkIndex * 0.1 }}
                    >
                      <span className="relative flex items-center justify-center w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300">
                        {link.icon}
                      </span>
                      <span className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-${dev.color}-300 transition-opacity duration-300 whitespace-nowrap font-medium`}>
                        {link.name}
                      </span>
                    </motion.a>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.2 }}
                  className="text-center"
                >
                  <p className="text-yellow-400 italic text-lg font-medium">
                    {dev.quote}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetDeveloper;
