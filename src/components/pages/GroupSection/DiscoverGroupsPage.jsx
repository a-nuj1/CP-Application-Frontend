import {
  FaSearch,
  FaUsers,
  FaArrowRight,
  FaStar,
  FaFilter,
} from "react-icons/fa";
import { useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const mockGroups = [
  {
    id: 1,
    name: "DSA Champions",
    description:
      "For competitive programmers preparing for interviews and contests",
    members: 245,
    category: "Competitive Programming",
    isPublic: true,
    rating: 4.8,
  },
  {
    id: 2,
    name: "LeetCode Warriors",
    description: "Daily LeetCode challenges and solutions discussion",
    members: 189,
    category: "Interview Prep",
    isPublic: true,
    rating: 4.6,
  },
  {
    id: 3,
    name: "CodeForces Elite",
    description: "Group for CodeForces competitors to share strategies",
    members: 312,
    category: "Competitive Programming",
    isPublic: true,
    rating: 4.9,
  },
  {
    id: 4,
    name: "React Coders",
    description: "For developers working with React and frontend technologies",
    members: 156,
    category: "Web Development",
    isPublic: false,
    rating: 4.3,
  },
  {
    id: 5,
    name: "Algorithm Masters",
    description: "Advanced algorithm discussions and problem solving",
    members: 278,
    category: "Algorithms",
    isPublic: true,
    rating: 4.7,
  },
  {
    id: 6,
    name: "Data Structures Pro",
    description: "Master data structures with weekly challenges",
    members: 201,
    category: "Data Structures",
    isPublic: true,
    rating: 4.5,
  },
];

export default function DiscoverGroupsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [memberRange, setMemberRange] = useState([0, 500]);

  const categories = [
    "All",
    "Competitive Programming",
    "Interview Prep",
    "Web Development",
    "Algorithms",
    "Data Structures",
  ];

  const filteredGroups = mockGroups.filter((group) => {
    const matchesSearch =
      group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || group.category === selectedCategory;

    const matchesRating = group.rating >= minRating;

    const matchesMembers =
      group.members >= memberRange[0] && group.members <= memberRange[1];

    return matchesSearch && matchesCategory && matchesRating && matchesMembers;
  });

  return (
    <div className="min-h-screen bg-black/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* blur cirlce bg  */}
        <Box
          sx={{
            width: "80vw",
            maxWidth: "450px",
            height: "80vw",
            maxHeight: "450px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 230, 0, 0.28)",
            filter: "blur(100px)",
            position: "absolute",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: -1,
            pointerEvents: "none",
          }}
        />
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-5xl mb-6">
            Discover <span className="text-yellow-400">Coding Groups</span>
          </h1>
          <p className="max-w-xl mx-auto text-xl text-gray-300">
            Join communities of like-minded coders. Learn together, compete
            together, grow together.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-12 py-3 border border-gray-700 rounded-md leading-5 bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Search groups..."
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-4 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-900 bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200"
            >
              <FaFilter className="mr-2" /> Filters
            </button>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Minimum Rating
                  </label>
                  <div className="flex items-center">
                    <input
                      type="range"
                      min="0"
                      max="5"
                      step="0.1"
                      value={minRating}
                      onChange={(e) => setMinRating(parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                    />
                    <span className="ml-3 text-yellow-400 font-medium">
                      {minRating.toFixed(1)}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Members Range
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      min="0"
                      max="1000"
                      value={memberRange[0]}
                      onChange={(e) =>
                        setMemberRange([
                          parseInt(e.target.value),
                          memberRange[1],
                        ])
                      }
                      className="w-20 px-3 py-2 border border-gray-700 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    />
                    <span className="text-gray-400">to</span>
                    <input
                      type="number"
                      min="0"
                      max="1000"
                      value={memberRange[1]}
                      onChange={(e) =>
                        setMemberRange([
                          memberRange[0],
                          parseInt(e.target.value),
                        ])
                      }
                      className="w-20 px-3 py-2 border border-gray-700 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-yellow-500 text-gray-900"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Groups Grid */}
        {filteredGroups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGroups.map((group) => (
              <div
                key={group.id}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-100">
                        {group.name}
                      </h3>
                      <span className="inline-block mt-1 px-2 py-1 text-xs font-semibold rounded bg-gray-700 text-gray-300">
                        {group.category}
                      </span>
                    </div>
                    {group.isPublic ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-300">
                        Public
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900 text-blue-300">
                        Private
                      </span>
                    )}
                  </div>

                  <div className="mt-3 flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(group.rating)
                              ? "text-yellow-400"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                      <span className="ml-1 text-sm text-yellow-400">
                        {group.rating}
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-gray-400">
                    {group.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <FaUsers className="mr-1 text-yellow-400" />
                      <span>{group.members.toLocaleString()} members</span>
                    </div>
                    <button
                      onClick={() => navigate("/joining")}
                      className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-900 bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-200 transform hover:scale-105"
                    >
                      Join <FaArrowRight className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
            <FaSearch className="mx-auto h-12 w-12 text-gray-500" />
            <h3 className="mt-2 text-lg font-medium text-gray-100">
              No groups found
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setMinRating(0);
                setMemberRange([0, 500]);
              }}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-900 bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
