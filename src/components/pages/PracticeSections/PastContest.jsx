import { FaCalendarAlt, FaClock, FaUsers, FaCode, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PastContestsPage() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const contestsPerPage = 10;

  // Mock contest data
  const contests = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    title: `CodeCompete Contest ${i + 1}`,
    date: new Date(Date.now() - (i * 7 * 24 * 60 * 60 * 1000)).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }),
    time: '8:00 AM GMT+5:30',
    rated: i % 3 === 0, // Every 3rd contest is rated
    participants: Math.floor(Math.random() * 20000) + 5000,
    problems: 4 + (i % 3),
    duration: '90 mins'
  }));

  // Pagination logic
  const indexOfLastContest = currentPage * contestsPerPage;
  const indexOfFirstContest = indexOfLastContest - contestsPerPage;
  const currentContests = contests.slice(indexOfFirstContest, indexOfLastContest);
  const totalPages = Math.ceil(contests.length / contestsPerPage);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.01,
      boxShadow: '0 10px 25px -5px rgba(234, 179, 8, 0.1)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1117] to-[#1a1d29] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-5xl mb-6">
            <span className="text-yellow-400">Past Contests</span> Archive
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            Revisit and practice from our collection of previous coding contests
          </p>
          
          {/* Stats Chip */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50"
          >
            <FaCode className="text-yellow-400 mr-2" />
            <span className="text-gray-300">{contests.length} contests available</span>
          </motion.div>
        </motion.div>

        {/* Contests Grid */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          {currentContests.map((contest, index) => (
            <motion.div
              key={contest.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-yellow-400 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Contest Info */}
                <div 
                  className="flex-1 p-6 cursor-pointer"
                  onClick={() => navigate(`/contest/${contest.id}`)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-100 mb-1">{contest.title}</h3>
                      {contest.rated && (
                        <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-900/30 text-green-300 border border-green-700/50 mb-2">
                          Rated
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-400">{contest.problems} problems</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-400">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2 text-blue-400" />
                      <span>{contest.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="mr-2 text-purple-400" />
                      <span>{contest.time}</span>
                    </div>
                    <div className="flex items-center">
                      <FaUsers className="mr-2 text-yellow-400" />
                      <span>{contest.participants.toLocaleString()} participants</span>
                    </div>
                  </div>
                </div>

                {/* Practice Button */}
                <div className="md:w-48 p-6 flex items-center justify-center bg-gray-800/30 border-t md:border-t-0 md:border-l border-gray-700/50">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    
                    onClick={() => navigate(`/contest/${contest.id}`)}

                    className="w-full flex items-center justify-center px-4 py-3 rounded-lg bg-gray-700 text-gray-200 hover:bg-gray-600 hover:text-white transition-colors duration-200"
                  >
                    <span className="font-medium mr-2">Practice</span>
                    <FaArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-1">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </motion.button>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <motion.button
                    key={pageNum}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-md border ${
                      currentPage === pageNum
                        ? 'border-yellow-500 bg-yellow-500/20 text-yellow-400'
                        : 'border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {pageNum}
                  </motion.button>
                );
              })}

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </motion.button>
            </div>
          </div>
        )}

        {/* Upcoming Contest Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 rounded-xl p-6 border border-yellow-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-100 mb-2">Ready for the next challenge?</h2>
              <p className="text-gray-400">Join our upcoming contests and test your skills against the community</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contest')}
              className="mt-4 md:mt-0 px-6 py-3 rounded-lg bg-yellow-500 text-gray-900 font-medium hover:bg-yellow-400 transition-colors duration-200"
            >
              View Upcoming Contests
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}