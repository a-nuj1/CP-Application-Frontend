import { FaClock, FaUsers, FaCode, FaFire, FaTrophy, FaCalendarDay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function POTD() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [activeTab, setActiveTab] = useState('today');

  // Calculate time left until midnight
  function calculateTimeLeft() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const difference = midnight - now;
    
    return{
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // POTD problems data
  const potdProblems = [
    {
      id: 1,
      title: 'Array Transformation',
      difficulty: 'Easy',
      participants: 3421,
      submissions: 5678,
      acceptance: '72%',
      problemNumber: '#1',
      tags: ['Array', 'Sorting']
    },
    {
      id: 2,
      title: 'Binary Tree Traversal',
      difficulty: 'Medium',
      participants: 2156,
      submissions: 3245,
      acceptance: '65%',
      problemNumber: '#2',
      tags: ['Tree', 'DFS', 'BFS']
    },
    {
      id: 3,
      title: 'Dynamic Programming Challenge',
      difficulty: 'Hard',
      participants: 987,
      submissions: 1234,
      acceptance: '42%',
      problemNumber: '#3',
      tags: ['DP', 'Memoization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1117] to-[#1a1d29] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section with Unique Design */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-12 p-8 rounded-2xl bg-gray-800/50 border border-gray-700/50 overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-bl-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-tr-full transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-4">
              <FaCalendarDay className="text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-medium">Daily Challenge</span>
            </div>
            <h1 className="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-5xl mb-4">
              Problem <span className="text-yellow-400">of the Day</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-6">
              Solve today's curated challenges before time runs out!
            </p>
            
            {/* Countdown Timer */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gray-700/70 border border-gray-600/50"
            >
              <FaClock className="text-yellow-400 text-xl mr-3" />
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-100">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-gray-400">HOURS</div>
                </div>
                <div className="text-2xl text-gray-400">:</div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-100">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-gray-400">MINUTES</div>
                </div>
                <div className="text-2xl text-gray-400">:</div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-100">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-gray-400">SECONDS</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {potdProblems.map((problem, index) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 10px 25px -5px rgba(234, 179, 8, 0.1)'
              }}
              className="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden flex flex-col"
            >
              {/* Problem Header */}
              <div className="p-6 pb-4 border-b border-gray-700/50">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-medium text-yellow-400">{problem.problemNumber}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    problem.difficulty === 'Easy' ? 'bg-green-900 text-green-300' :
                    problem.difficulty === 'Medium' ? 'bg-yellow-900 text-yellow-300' :
                    'bg-red-900 text-red-300'
                  }`}>
                    {problem.difficulty}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">{problem.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {problem.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Problem Stats */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <FaUsers className="text-blue-400 mr-2" />
                    <div>
                      <div className="text-xs text-gray-400">Participants</div>
                      <div className="text-sm font-medium text-gray-100">{problem.participants.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaCode className="text-purple-400 mr-2" />
                    <div>
                      <div className="text-xs text-gray-400">Submissions</div>
                      <div className="text-sm font-medium text-gray-100">{problem.submissions.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaFire className="text-orange-400 mr-2" />
                    <div>
                      <div className="text-xs text-gray-400">Acceptance</div>
                      <div className="text-sm font-medium text-gray-100">{problem.acceptance}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaTrophy className="text-yellow-400 mr-2" />
                    <div>
                      <div className="text-xs text-gray-400">XP Reward</div>
                      <div className="text-sm font-medium text-gray-100">
                        {problem.difficulty === 'Easy' ? '+50' : 
                         problem.difficulty === 'Medium' ? '+100' : '+150'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Solve Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}

                  onClick={() => navigate(`/solve/potd/${problem.id}`)}
                  
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-medium hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200"
                >
                  Solve Challenge
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center">
            <FaTrophy className="text-yellow-400 mr-3" />
            POTD Leaderboard
          </h2>
          <p className="text-gray-400 mb-6">
            Top performers who solved all three problems today
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map(position => (
              <div key={position} className="flex items-center p-4 bg-gray-700/30 rounded-lg border border-gray-700/50">
                <div className="text-2xl font-bold text-yellow-400 mr-4 w-8">#{position}</div>
                <div className="flex-1">
                  <div className="font-medium text-gray-100">User{position}</div>
                  <div className="text-xs text-gray-400">Solved in 45m {position * 10}s</div>
                </div>
                <div className="text-yellow-400 font-bold">+{400 - (position * 50)} Pts</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Previous POTD Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm bg-gray-800/50 border border-gray-700/50">
            <button
              onClick={() => setActiveTab('today')}
              className={`px-6 py-3 text-sm font-medium rounded-l-md ${
                activeTab === 'today' 
                  ? 'bg-yellow-500 text-gray-900' 
                  : 'bg-transparent text-gray-300 hover:bg-gray-700'
              }`}
            >
              Today's Problems
            </button>
            <button
              onClick={() => setActiveTab('previous')}
              className={`px-6 py-3 text-sm font-medium rounded-r-md ${
                activeTab === 'previous' 
                  ? 'bg-yellow-500 text-gray-900' 
                  : 'bg-transparent text-gray-300 hover:bg-gray-700'
              }`}
            >
              Yesterday's Problems
            </button>
          </div>
        </div>

        {/* Motivational Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-100 mb-2">Daily Streak Challenge</h2>
              <p className="text-gray-300">
                Solve POTD for 7 consecutive days and earn bonus rewards!
              </p>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              {[1, 2, 3, 4, 5, 6, 7].map(day => (
                <div key={day} className={`w-8 h-8 rounded-full flex items-center justify-center mx-1 border-2 ${
                  day <= 3 
                    ? 'border-green-400 bg-green-400/10 text-green-400' 
                    : 'border-gray-600 text-gray-500'
                }`}>
                  {day}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}