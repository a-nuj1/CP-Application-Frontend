import { FaCode, FaBookOpen, FaChartLine, FaChevronRight, FaStar, FaFire, FaClock, FaTrophy, FaFilter } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

export default function DSAConcepts() {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('default');
  
    // Categories and topics data
    const categories = ['All', 'Basic', 'Intermediate', 'Advanced'];
  
  const topics = [
    { 
      id: 1, 
      title: 'Arrays', 
      category: 'Basic',
      description: 'Master array operations and common patterns',
      progress: 65,
      difficulty: 'Beginner',
      concepts: 12,
      popularity: 95,
      lastPracticed: '2 days ago',
      starred: true,
    },
    { 
      id: 2, 
      title: 'Linked Lists', 
      category: 'Basic',
      description: 'Understand singly, doubly and circular linked lists',
      progress: 40,
      difficulty: 'Beginner',
      concepts: 8,
        popularity: 80,
        lastPracticed: '1 week ago',
        starred: false,
    },
    { 
      id: 3, 
      title: 'Stacks & Queues', 
      category: 'Basic',
      description: 'Learn LIFO and FIFO principles with implementations',
      progress: 30,
      difficulty: 'Beginner',
      concepts: 6,
        popularity: 70,
        lastPracticed: '3 days ago',
        starred: true,
    },
    { 
      id: 4, 
      title: 'Hash Tables', 
      category: 'Intermediate',
      description: 'Explore hashing techniques and collision resolution',
      progress: 20,
      difficulty: 'Intermediate',
      concepts: 10,
        popularity: 85,
        lastPracticed: '5 days ago',
        starred: false,
    },
    { 
      id: 5, 
      title: 'Trees', 
      category: 'Intermediate',
      description: 'Binary trees, BSTs, traversals and balancing',
      progress: 15,
      difficulty: 'Intermediate',
      concepts: 15,
        popularity: 90,
        lastPracticed: '1 week ago',
        starred: true,

    },
    { 
      id: 6, 
      title: 'Graphs', 
      category: 'Advanced',
      description: 'DFS, BFS, shortest path and spanning trees',
      progress: 5,
      difficulty: 'Advanced',
      concepts: 18,
        popularity: 75,
        lastPracticed: '2 weeks ago',
        starred: false,

    },
    { 
      id: 7, 
      title: 'Dynamic Programming', 
      category: 'Advanced',
      description: 'Master memoization and tabulation techniques',
      progress: 10,
      difficulty: 'Advanced',
      concepts: 12,
        popularity: 60,
        lastPracticed: '3 weeks ago',
        starred: true,
    },
    { 
      id: 8, 
      title: 'Tries', 
      category: 'Intermediate',
      description: 'Prefix trees and their applications',
      progress: 0,
      difficulty: 'Intermediate',
      concepts: 5,
        popularity: 50,
        lastPracticed: '1 month ago',
        starred: false,
    },
    { 
      id: 9, 
      title: 'Greedy Algorithms', 
      category: 'Advanced',
      description: 'Learn to make optimal choices at each step',
      progress: 0,
      difficulty: 'Advanced',
      concepts: 8,
        popularity: 55,
        lastPracticed: '1 month ago',
        starred: true,
    },
    { 
      id: 10, 
      title: 'Backtracking', 
      category: 'Advanced',
      description: 'Explore recursive problem-solving techniques',
      progress: 0,
      difficulty: 'Advanced',
      concepts: 7,
        popularity: 65,
        lastPracticed: '1 month ago',
        starred: false,
    },
    { 
      id: 11, 
      title: 'Bit Manipulation', 
      category: 'Advanced',
      description: 'Learn to manipulate bits for optimization',
      progress: 0,
      difficulty: 'Advanced',
      concepts: 6,
        popularity: 45,
        lastPracticed: '1 month ago',
        starred: true,
    },
    { 
      id: 12, 
      title: 'Segment Trees', 
      category: 'Advanced',
      description: 'Efficiently query and update ranges of data',
      progress: 0,
      difficulty: 'Advanced',
      concepts: 9,
        popularity: 40,
        lastPracticed: '1 month ago',
        starred: false,
    },
    { 
      id: 13, 
      title: 'Fenwick Trees', 
      category: 'Advanced',
      description: 'Learn about Binary Indexed Trees for range queries',
      progress: 0,
      difficulty: 'Advanced',
      concepts: 4,
        popularity: 35,
        lastPracticed: '1 month ago',
        starred: true,
    },
    { 
      id: 14, 
      title: 'Heaps', 
      category: 'Intermediate',
      description: 'Understand priority queues and heap sort',
      progress: 0,
      difficulty: 'Intermediate',
      concepts: 8,
        popularity: 30,
        lastPracticed: '1 month ago',
        starred: false,
    },
    { 
      id: 15, 
      title: 'Sorting Algorithms', 
      category: 'Basic',
      description: 'Learn about various sorting techniques and their complexities',
      progress: 0,
      difficulty: 'Beginner',
      concepts: 10,
        popularity: 25,
        lastPracticed: '1 month ago',
        starred: true,
    },
    { 
      id: 16, 
      title: 'Searching Algorithms', 
      category: 'Basic',
      description: 'Explore linear and binary search techniques',
      progress: 0,
      difficulty: 'Beginner',
      concepts: 5,
        popularity: 20,
        lastPracticed: '1 month ago',
        starred: false,
    },
  ];

  // Filter topics based on search and category
  const filteredTopics = topics
  .filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        topic.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || topic.category === activeCategory;
    return matchesSearch && matchesCategory;
  })
  .sort((a, b) => {
    if (sortBy === 'popularity') return b.popularity - a.popularity;
    if (sortBy === 'progress') return b.progress - a.progress;
    if (sortBy === 'difficulty') {
      const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
      return difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty];
    }
    return a.id - b.id; // default sort
  });
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
      scale: 1.03,
      boxShadow: '0 10px 25px -5px rgba(234, 179, 8, 0.2)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1117] to-[#1a1d29] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-5xl mb-6">
            Master <span className="text-yellow-400">DSA Concepts</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            Build strong foundations with structured learning paths for each data structure and algorithm
          </p>
        </motion.div>

        {/* Enhanced Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-8 bg-gray-800/50 rounded-xl p-6 border border-gray-700/50"
        >
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaCode className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-12 py-3 border border-gray-700 rounded-md leading-5 bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              placeholder="Search DSA concepts..."
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <motion.button
                key={category}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category 
                    ? 'bg-yellow-500 text-gray-900' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none block w-full pl-3 pr-10 py-3 border border-gray-700 rounded-md leading-5 bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            >
              <option value="default">Sort by: Default</option>
              <option value="popularity">Sort by: Popularity</option>
              <option value="progress">Sort by: Progress</option>
              <option value="difficulty">Sort by: Difficulty</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <FaFilter className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </motion.div>

        {/* Animated Topics Grid */}
        {filteredTopics.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTopics.map(topic => (
              <motion.div
                key={topic.id}
                variants={cardVariants}
                whileHover="hover"
                className="bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-yellow-400 overflow-hidden flex flex-col relative"
              >
                {/* Star/Favorite Button */}
                <button 
                  className="absolute top-4 right-4 z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Toggle star/favorite functionality
                  }}
                  data-tooltip-id="star-tooltip"
                  data-tooltip-content={topic.starred ? "Remove from favorites" : "Add to favorites"}
                >
                  <FaStar className={`h-5 w-5 ${topic.starred ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500 hover:text-yellow-400'}`} />
                </button>

                {/* Topic Content */}
                <div className="p-6 pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-100 mb-1">{topic.title}</h3>
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        topic.difficulty === 'Beginner' ? 'bg-green-900 text-green-300' :
                        topic.difficulty === 'Intermediate' ? 'bg-yellow-900 text-yellow-300' :
                        'bg-red-900 text-red-300'
                      }`}>
                        {topic.difficulty}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-gray-400">{topic.concepts} concepts</span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-400">{topic.description}</p>
                </div>

                {/* Progress Bar */}
                <div className="px-6 py-4">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Progress</span>
                    <span>{topic.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1.5">
                    <motion.div 
                      className="bg-yellow-500 h-1.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${topic.progress}%` }}
                      transition={{ duration: 1, type: 'spring' }}
                    ></motion.div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="px-6 pb-4 flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center" data-tooltip-id="popularity-tooltip" data-tooltip-content={`Popularity: ${topic.popularity}/100`}>
                    <FaFire className="mr-1 text-red-400" />
                    <span>{topic.popularity}</span>
                  </div>
                  <div className="flex items-center" data-tooltip-id="last-practiced-tooltip" data-tooltip-content="Last practiced">
                    <FaClock className="mr-1 text-blue-400" />
                    <span>{topic.lastPracticed}</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-auto p-6 pt-0">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate(`/practice/dsa/${topic.title.toLowerCase().replace(/\s+/g, '-')}`)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-gray-700 text-gray-200 hover:bg-gray-600 hover:text-white transition-colors duration-200 group"
                  >
                    <span className="font-medium">Start Learning</span>
                    <FaChevronRight className="h-4 w-4 text-gray-400 group-hover:text-yellow-400 transition-colors duration-200" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-gray-800/50 rounded-xl border border-gray-700/50"
          >
            <FaBookOpen className="mx-auto h-12 w-12 text-gray-500" />
            <h3 className="mt-2 text-lg font-medium text-gray-100">No topics found</h3>
            <p className="mt-1 text-sm text-gray-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* Enhanced Learning Path Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 bg-gray-800/50 rounded-xl p-6 border border-gray-700/50"
        >
          <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
            <FaChartLine className="text-yellow-400 mr-2" />
            Structured Learning Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Beginner', 'Intermediate', 'Advanced'].map((level, index) => (
              <motion.div
                key={level}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 10px 25px -5px rgba(234, 179, 8, 0.1)'
                }}
                className="bg-gray-700/30 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors duration-200 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-500/10 rounded-bl-lg flex items-center justify-center">
                  <FaTrophy className={`text-xl ${
                    index === 0 ? 'text-gray-400' : 
                    index === 1 ? 'text-yellow-400' : 
                    'text-red-400'
                  }`} />
                </div>
                <h3 className="text-lg font-bold text-gray-100 mb-2">{level} Track</h3>
                <p className="text-sm text-gray-400 mb-4">
                  {index === 0 ? 'Start with fundamental data structures and basic algorithms' :
                   index === 1 ? 'Advance to more complex data structures and algorithms' :
                   'Master advanced concepts for competitive programming'}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    {index === 0 ? '~4 weeks' : index === 1 ? '~6 weeks' : '~8 weeks'} to complete
                  </span>
                  <button 
                  onClick={()=> navigate(`/learning-path/${level.toLowerCase()}`)}
                  className="text-yellow-400 text-sm font-medium hover:text-yellow-300 transition-colors duration-200 flex items-center">
                    View Path <FaChevronRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tooltips */}
        <Tooltip id="star-tooltip" place="top" effect="solid" className="z-50" />
        <Tooltip id="popularity-tooltip" place="top" effect="solid" className="z-50" />
        <Tooltip id="last-practiced-tooltip" place="top" effect="solid" className="z-50" />
      </div>
    </div>
  );
}