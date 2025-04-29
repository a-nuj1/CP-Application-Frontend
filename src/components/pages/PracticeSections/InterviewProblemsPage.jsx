import {
  FaSearch,
  FaCheckCircle,
  FaRegCircle,
  FaArrowRight,
  FaFilter,
} from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

function InterviewProblemsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const problemsPerPage = 15;

  // Mock data for problems
  const problems = [
    {
      id: 1,
      title: "Pair Sum",
      difficulty: "Easy",
      upvotes: 3100,
      solved: true,
      exp: "+84",
      time: "15 mins",
      attempts: "147.7k",
    },
    {
      id: 2,
      title: "Nth Fibonacci Number",
      difficulty: "Easy",
      upvotes: 574,
      solved: false,
      exp: "+40",
      time: "10 mins",
      attempts: "412.8k",
    },
    {
      id: 3,
      title: "Swap Two Numbers",
      difficulty: "Easy",
      upvotes: 1100,
      solved: false,
      exp: "+15",
      time: "10 mins",
      attempts: "142.8k",
    },
    {
      id: 4,
      title: "Allocate Books",
      difficulty: "Moderate",
      upvotes: 1100,
      solved: false,
      exp: "+10",
      time: "20 mins",
      attempts: "139.8k",
    },
    {
      id: 5,
      title: "Reverse Linked List",
      difficulty: "Easy",
      upvotes: 2500,
      solved: true,
      exp: "+50",
      time: "15 mins",
      attempts: "200.3k",
    },
    {
      id: 6,
      title: "Two Sum",
      difficulty: "Easy",
      upvotes: 4200,
      solved: false,
      exp: "+60",
      time: "10 mins",
      attempts: "350.1k",
    },
    {
      id: 7,
      title: "Merge Intervals",
      difficulty: "Moderate",
      upvotes: 1800,
      solved: false,
      exp: "+30",
      time: "25 mins",
      attempts: "120.5k",
    },
    {
      id: 8,
      title: "Trapping Rain Water",
      difficulty: "Hard",
      upvotes: 2200,
      solved: false,
      exp: "+45",
      time: "30 mins",
      attempts: "95.7k",
    },
    {
      id: 9,
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Moderate",
      upvotes: 3000,
      solved: true,
      exp: "+70",
      time: "20 mins",
      attempts: "150.2k",
    },
    {
      id: 10,
      title: "Find Median from Data Stream",
      difficulty: "Hard",
      upvotes: 1500,
      solved: false,
      exp: "+80",
      time: "35 mins",
      attempts: "80.4k",
    },
    {
      id: 11,
      title: "Binary Tree Level Order Traversal",
      difficulty: "Moderate",
      upvotes: 2000,
      solved: false,
      exp: "+55",
      time: "30 mins",
      attempts: "110.6k",
    },
    {
      id: 12,
      title: "Valid Parentheses",
      difficulty: "Easy",
      upvotes: 3700,
      solved: true,
      exp: "+90",
      time: "15 mins",
      attempts: "250.8k",
    },
    {
      id: 13,
      title: "Rotate Array",
      difficulty: "Easy",
      upvotes: 900,
      solved: false,
      exp: "+20",
      time: "10 mins",
      attempts: "60.1k",
    },
    {
      id: 14,
      title: "Search in Rotated Sorted Array",
      difficulty: "Hard",
      upvotes: 1300,
      solved: false,
      exp: "+75",
      time: "40 mins",
      attempts: "70.3k",
    },
    {
      id: 15,
      title: "Group Anagrams",
      difficulty: "Moderate",
      upvotes: 1600,
      solved: false,
      exp: "+65",
      time: "25 mins",
      attempts: "90.5k",
    },
    {
      id: 16,
      title: "Best Time to Buy and Sell Stock",
      difficulty: "Moderate",
      upvotes: 1400,
      solved: false,
      exp: "+50",
      time: "20 mins",
      attempts: "110.2k",
    },
    {
      id: 17,
      title: "Maximum Subarray",
      difficulty: "Easy",
      upvotes: 2000,
      solved: true,
      exp: "+85",
      time: "15 mins",
      attempts: "130.4k",
    },
    {
      id: 18,
      title: "Product of Array Except Self",
      difficulty: "Hard",
      upvotes: 1700,
      solved: false,
      exp: "+95",
      time: "30 mins",
      attempts: "80.6k",
    },
    {
      id: 19,
      title: "Container With Most Water",
      difficulty: "Moderate",
      upvotes: 1900,
      solved: false,
      exp: "+70",
      time: "25 mins",
      attempts: "100.8k",
    },
    {
      id: 20,
      title: "Climbing Stairs",
      difficulty: "Easy",
      upvotes: 1200,
      solved: true,
      exp: "+40",
      time: "10 mins",
      attempts: "50.2k",
    },
    {
      id: 21,
      title: "Coin Change",
      difficulty: "Hard",
      upvotes: 1100,
      solved: false,
      exp: "+60",
      time: "35 mins",
      attempts: "40.4k",
    },
    {
      id: 22,
      title: "Longest Palindromic Substring",
      difficulty: "Moderate",
      upvotes: 1300,
      solved: false,
      exp: "+80",
      time: "30 mins",
      attempts: "70.6k",
    },
    {
      id: 23,
      title: "Letter Combinations of a Phone Number",
      difficulty: "Easy",
      upvotes: 1500,
      solved: true,
      exp: "+90",
      time: "20 mins",
      attempts: "90.8k",
    },
    {
      id: 24,
      title: "Valid Anagram",
      difficulty: "Easy",
      upvotes: 1600,
      solved: false,
      exp: "+55",
      time: "15 mins",
      attempts: "60.1k",
    },
    {
      id: 25,
      title: "Maximum Product Subarray",
      difficulty: "Moderate",
      upvotes: 1800,
      solved: false,
      exp: "+75",
      time: "25 mins",
      attempts: "80.3k",
    },
  ];

  // Filter problems based on search and difficulty
  const filteredProblems = problems.filter((problem) => {
    const matchesSearch = problem.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDifficulty =
      difficultyFilter === "All" || problem.difficulty === difficultyFilter;
    return matchesSearch && matchesDifficulty;
  });

  // Calculate pagination
  const indexOfLastProblem = currentPage * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const currentProblems = filteredProblems.slice(
    indexOfFirstProblem,
    indexOfLastProblem
  );
  const totalPages = Math.ceil(filteredProblems.length / problemsPerPage);

  // Doughnut chart data
  const chartData = {
    labels: ["Easy", "Moderate", "Hard"],
    datasets: [
      {
        data: [
          problems.filter((p) => p.difficulty === "Easy").length,
          problems.filter((p) => p.difficulty === "Moderate").length,
          problems.filter((p) => p.difficulty === "Hard").length,
        ],
        backgroundColor: ["#10B981", "#F59E0B", "#EF4444"],
        borderColor: ["#0f1117", "#0f1117", "#0f1117"],
        borderWidth: 2,
      },
    ],
  };

  const solvedCount = problems.filter((p) => p.solved).length;
  const totalProblems = problems.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1117] to-[#1a1d29] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-5xl mb-6">
            Master <span className="text-yellow-400">Interview Problems</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            Practice the most frequently asked coding questions from top tech
            companies
          </p>
        </div>

        {/* Progress and Filters Section */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Left Section - Chart and Tags */}
          <div className="lg:w-1/4 bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 flex flex-col">
            {/* Progress Summary */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-100">
                Your Progress
              </h2>
              <span className="text-yellow-400 font-bold">
                {solvedCount}/{totalProblems}
              </span>
            </div>

            {/* Custom Doughnut Chart */}
            <div className="relative h-48 mb-6">
              <Doughnut
                data={chartData}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false },
                  },
                  cutout: "70%",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-gray-100">
                  {solvedCount}
                </span>
                <span className="text-gray-400 text-sm">Solved</span>
              </div>
            </div>

            {/* Difficulty Breakdown */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-green-400 font-bold text-xl">288/873</div>
                <div className="text-gray-400 text-sm">Easy</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 font-bold text-xl">
                  533/1829
                </div>
                <div className="text-gray-400 text-sm">Medium</div>
              </div>
              <div className="text-center">
                <div className="text-red-400 font-bold text-xl">146/823</div>
                <div className="text-gray-400 text-sm">Hard</div>
              </div>
            </div>

            {/* Hot Topics */}
            <div className="">
              <h3 className="text-md font-medium text-gray-100 mb-3">
                Hot Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Arrays",
                  "Strings",
                  "Math",
                  "Binary Search",
                  "Stack",
                  "Queue",
                  "Hash Map",
                  "Trees",
                  "Graph",
                  "DP",
                  "Sorting",
                  "Recursion",
                ].map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300 hover:bg-gray-600 cursor-pointer transition-colors"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="lg:w-3/4 bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-12 py-3 border border-gray-700 rounded-md leading-5 bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  placeholder="Search problems..."
                />
              </div>

              <div className="relative">
                <select
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                  className="appearance-none block w-full pl-3 pr-10 py-3 border border-gray-700 rounded-md leading-5 bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                >
                  <option value="All">Fillter By</option>
                  <option value="Easy">Easy</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Hard">Hard</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FaFilter className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Problems Count on right side */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-300">
                {filteredProblems.length}{" "}
                {filteredProblems.length === 1 ? "Problem" : "Problems"} Found
              </h3>
              <span className="text-sm text-gray-400">
                Showing {indexOfFirstProblem + 1}-
                {Math.min(indexOfLastProblem, filteredProblems.length)} of{" "}
                {filteredProblems.length}
              </span>
            </div>

            {/* Problems List */}
            <div className="space-y-3">
              {currentProblems.map((problem) => (
                <div
                  onClick={()=>navigate('/practice/problem')}
                  key={problem.id}
                  className="group flex items-center justify-between p-4 bg-gray-700/50 rounded-lg border border-gray-700 hover:border-yellow-400 cursor-pointer transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    {/* Custom Radio Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle marking as solved - TODO : Implemention of Functionality
                        // markProblemAsSolved(problem.id);
                      }}
                      className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all duration-200
                ${
                  problem.solved
                    ? "border-blue-400 bg-blue-400"
                    : "border-dashed border-gray-500 hover:border-green-400"
                }`}
                    >
                      {problem.solved && (
                        <svg
                          className="h-3 w-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </button>

                    <div>
                      <h4 className="text-lg font-medium text-gray-100 group-hover:text-yellow-400 transition-colors duration-200">
                        {problem.title}
                      </h4>
                      <div className="flex items-center space-x-4 mt-1">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            problem.difficulty === "Easy"
                              ? "bg-green-900 text-green-300"
                              : problem.difficulty === "Moderate"
                              ? "bg-yellow-900 text-yellow-300"
                              : "bg-red-900 text-red-300"
                          }`}
                        >
                          {problem.difficulty}
                        </span>
                        <span className="text-sm text-gray-400">
                          {problem.time}
                        </span>
                        {/* <span className="text-sm text-gray-400">
                          {problem.attempts} attempts
                        </span> */}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    {/* <span className="text-yellow-400 font-medium">
                      {problem.exp} XP
                    </span> */}
                    <span className="text-gray-400 flex items-center">
                      {problem.upvotes.toLocaleString()}
                      <svg
                        className="h-4 w-4 ml-1 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                    <FaArrowRight className="h-5 w-5 text-gray-400 group-hover:text-yellow-400 transition-colors duration-200" />
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-6 flex justify-center">
                <nav
                  className="inline-flex rounded-md shadow-sm -space-x-px"
                  aria-label="Pagination"
                >
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-700 bg-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                        currentPage === i + 1
                          ? "border-yellow-500 bg-yellow-500/20 text-yellow-400"
                          : "border-gray-700 bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-700 bg-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterviewProblemsPage;
