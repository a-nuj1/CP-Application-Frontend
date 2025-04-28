import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const UnderDevelopment = () => {
  const navigate = useNavigate();

  // Fun particles for floating animation
  const particles = ["✨", "💫", "🌟", "🌀", "🌈", "🎉", "🪄"];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden text-white p-4">
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, index) => {
          const randomParticle = particles[Math.floor(Math.random() * particles.length)];
          const size = `${Math.random() * 1.5 + 1}rem`;
          return (
            <motion.div
              key={index}
              initial={{
                y: "100vh",
                x: Math.random() * 100,
                opacity: 0,
                rotate: Math.random() * 360,
              }}
              animate={{
                y: -100,
                opacity: [0, 0.7, 0],
                rotate: Math.random() * 720,
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: Math.random() * 3,
              }}
              className="absolute text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: size,
              }}
            >
              {randomParticle}
            </motion.div>
          );
        })}
      </div>

      {/* Spinning Magic Circle */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          {/* Outer spinning circle */}
          <motion.div
            className="w-64 h-64 rounded-full border-4 border-dashed border-purple-400 flex items-center justify-center"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-48 h-48 rounded-full bg-purple-500/10 backdrop-blur-sm flex items-center justify-center">
              <span className="text-6xl">🧙‍♂️</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.5 }}
        className="z-10 text-center mt-80"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-purple-400">
          Brewing Something Magical!
        </h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Our wizards are busy conjuring up an amazing experience. Please stay tuned!
        </motion.p>

        <motion.div
          className="bg-gray-800/50 border border-purple-400/30 rounded-lg p-6 mb-8 mx-auto max-w-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-purple-300 text-lg mb-2">🪄 Magic Underway 🪄</p>
          <p className="text-gray-300">
            Things are a bit sparkly and chaotic at the moment. Expect spells, potions, and a lot of wow!
          </p>
        </motion.div>

        <motion.button
          onClick={() => navigate("/")}
          whileHover={{ 
            scale: 1.05, 
            backgroundColor: "rgba(192, 132, 252, 0.2)",
            boxShadow: "0 0 15px rgba(192, 132, 252, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-purple-500/10 border border-purple-400/50 rounded-full text-purple-300 font-medium text-lg backdrop-blur-sm flex items-center mx-auto gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Reality
        </motion.button>

        <motion.div
          className="mt-12 text-gray-200 text-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <p>Estimated completion: When the stars align ✨</p>
          <p className="mt-2">Team status: 1 tired developer with cup of Tea! ☕🪄</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UnderDevelopment;
