import React, { useState, useEffect } from "react";
import {
  FaPen,
  FaThumbsUp,
  FaComment,
  FaChevronRight,
  FaChevronLeft,
  FaChevronDown,
  FaUser,
  FaTimes,
  FaSearch,
  FaBookmark,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Discussion = () => {
  // Sample data for discussion posts
  const discussionPosts = [
    {
      id: 1,
      title: "How to optimize React component rendering?",
      excerpt:
        "I'm having performance issues with my React app. What are the best practices for optimizing component rendering?",
      author: "DevUser123",
      date: "2023-05-15",
      likes: 24,
      comments: 8,
      tags: ["react", "performance", "frontend"],
      content: `
          <p>I've been working on a large React application and noticed some performance issues, especially when rendering large lists of components. I've tried using React.memo and useCallback, but I'm still experiencing lag.</p>
          <p>Here's an example of my current component structure:</p>
          <pre><code>function MyComponent({ items }) {
return (
    <div>
        {items.map(item => (
            <Item key={item.id} data={item} />
        ))}
    </div>
);
          }</code></pre>
          <p>What other optimization techniques should I consider? I've heard about virtualization but not sure how to implement it properly.</p>
      `,
    },
    {
      id: 2,
      title: "Best way to handle authentication in Next.js?",
      excerpt:
        "Looking for recommendations on implementing secure authentication in a Next.js application.",
      author: "NextDev456",
      date: "2023-05-14",
      likes: 18,
      comments: 5,
      tags: ["nextjs", "authentication", "security"],
      content: `
          <p>I'm building a Next.js application that requires user authentication. I'm considering several options:</p>
          <ul>
              <li>NextAuth.js</li>
              <li>Firebase Authentication</li>
              <li>Custom JWT implementation</li>
          </ul>
          <p>What would be the most secure and maintainable approach? The app will have both client-side and server-side rendered pages.</p>
          <p>I'm particularly concerned about:</p>
          <ol>
              <li>CSRF protection</li>
              <li>Secure token storage</li>
              <li>Session management</li>
          </ol>
      `,
    },
    {
      id: 3,
      title: "Understanding Big O notation for algorithm analysis",
      excerpt:
        "Can someone explain Big O notation with practical examples? I'm struggling to grasp the concept.",
      author: "AlgoNewbie",
      date: "2023-05-12",
      likes: 32,
      comments: 12,
      tags: ["algorithms", "big-o", "computer-science"],
      content: `
          <p>I'm learning algorithms and data structures, but I'm having trouble understanding Big O notation. I know it's about time complexity, but how do we actually calculate it?</p>
          <p>For example, what's the Big O of this simple function?</p>
          <pre>
<code>function sumArray(arr) {
let sum = 0;
for (let i=0; i < arr.length; i++) {
    sum += arr[i];
}
  return sum;
}</code>
</pre>
          <p>And how would it compare to a nested loop version?</p>
          <p>Also, when we say O(n log n), what does that actually mean in practical terms?</p>
      `,
    },
  ];

  const navigate = useNavigate();

  // State management
  const [currentPosts, setCurrentPosts] = useState([...discussionPosts]);
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [sortBy, setSortBy] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [newPost, setNewPost] = useState({
    title: "",
    tags: "",
    content: "",
  });
  const [comment, setComment] = useState("");
  const postsPerPage = 3;

  // Sort and filter posts
  useEffect(() => {
    let filteredPosts = [...discussionPosts];

    // Apply search filter
    if (searchQuery) {
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "newest":
        filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "popular":
        filteredPosts.sort((a, b) => b.likes - a.likes);
        break;
      case "unanswered":
        filteredPosts.sort((a, b) => a.comments - b.comments);
        break;
      default:
        filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    setCurrentPosts(filteredPosts);
    setCurrentPage(1); // Reset to first page when filters change
  }, [sortBy, searchQuery]);

  // Calculate days ago from date string
  const daysAgo = (dateStr) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffTime = now - date;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "today";
    if (diffDays === 1) return "yesterday";
    return `${diffDays} days ago`;
  };

  // Handle like post
  const handleLikePost = (postId) => {
    const newLikedPosts = new Set(likedPosts);
    const updatedPosts = [...currentPosts];
    const postIndex = updatedPosts.findIndex((p) => p.id === postId);

    if (newLikedPosts.has(postId)) {
      // Unlike
      newLikedPosts.delete(postId);
      updatedPosts[postIndex].likes -= 1;
    } else {
      // Like
      newLikedPosts.add(postId);
      updatedPosts[postIndex].likes += 1;
    }

    setLikedPosts(newLikedPosts);
    setCurrentPosts(updatedPosts);

    if (selectedPost && selectedPost.id === postId) {
      setSelectedPost(updatedPosts[postIndex]);
    }
  };

  // Handle create new post
  const handleCreatePost = (e) => {
    e.preventDefault();
    const newId = Math.max(...discussionPosts.map((p) => p.id)) + 1;
    const currentDate = new Date().toISOString().split("T")[0];

    const submittedPost = {
      id: newId,
      title: newPost.title,
      excerpt: newPost.content.substring(0, 100) + "...",
      author: "CurrentUser",
      date: currentDate,
      likes: 0,
      comments: 0,
      tags: newPost.tags.split(",").map((tag) => tag.trim()),
      content: `<p>${newPost.content}</p>`,
    };

    setCurrentPosts([submittedPost, ...currentPosts]);
    setNewPost({ title: "", tags: "", content: "" });
    setShowCreateModal(false);
  };

  // Handle comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    // this would add to the comments array
    const updatedPosts = [...currentPosts];
    const postIndex = updatedPosts.findIndex((p) => p.id === selectedPost.id);
    updatedPosts[postIndex].comments += 1;

    setCurrentPosts(updatedPosts);
    setSelectedPost(updatedPosts[postIndex]);
    setComment("");
  };

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPostsPage = currentPosts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const totalPages = Math.ceil(currentPosts.length / postsPerPage);

  //  sample comments
  const generateSampleComments = (postId) => {
    const authors = [
      "DevHelper",
      "CodeMaster",
      "AlgorithmGuru",
      "WebWizard",
      "CSSNinja",
    ];
    const dates = ["2 hours ago", "1 day ago", "3 days ago", "1 week ago"];
    const contents = [
      "This is a great question! I had the same issue last month and solved it by...",
      "Have you considered using the new React concurrent features? They might help with...",
      "In my experience, the best approach is to...",
      "I disagree with the previous comment. The more efficient way would be to...",
      "Check out this library I created that solves exactly this problem:...",
    ];

    const count = Math.floor(Math.random() * 3) + 2; // 2-4 comments
    const comments = [];

    for (let i = 0; i < count; i++) {
      comments.push({
        id: `${postId}-${i}`,
        author: authors[Math.floor(Math.random() * authors.length)],
        date: dates[Math.floor(Math.random() * dates.length)],
        content: contents[Math.floor(Math.random() * contents.length)],
        likes: Math.floor(Math.random() * 10),
      });
    }

    return comments;
  };

  return (
    <div className="min-h-screenbg-gradient-to-br from-[#0f1117] to-[#1a1d29] text-gray-100 p-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-yellow-400 mb-2">
              Community Discussions
            </h1>
            <p className="text-gray-400">
              Ask questions, share knowledge, and connect with other developers
            </p>
          </div>

          {/* Create Post Button */}
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-lg transition-all"
          >
            <FaPen />
            <span>Create Post</span>
          </button>
        </div>

        {/* Sorting and Filter Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-700 border border-gray-600 text-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="newest">Newest</option>
              <option value="popular">Most Popular</option>
              <option value="unanswered">Unanswered</option>
            </select>
          </div>

          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        {/* Discussion Posts Grid */}
        <div className="space-y-6">
          {currentPostsPage.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl text-gray-600 mb-4">💬</div>
              <h3 className="text-xl font-medium text-gray-300">
                No discussions found
              </h3>
              <p className="text-gray-500 mt-2">
                Be the first to start a discussion!
              </p>
            </div>
          ) : (
            currentPostsPage.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-gray-800 rounded-xl border border-gray-700 p-6 hover:border-yellow-500/30 transition-all cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-yellow-400">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-400">{daysAgo(post.date)}</span>
                    <div className="flex items-center gap-1 text-gray-300">
                      <FaThumbsUp />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-300">
                      <FaComment />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                      <FaUser className="text-sm" />
                    </div>
                    <span>{post.author}</span>
                  </div>
                  <div className="text-gray-300 hover:text-yellow-400">
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        {currentPosts.length > postsPerPage && (
          <div className="flex justify-center mt-10">
            <nav className="inline-flex rounded-md shadow">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-l-md bg-gray-800 text-gray-300 ${
                  currentPage !== 1 ? "hover:bg-gray-700" : "opacity-50"
                }`}
              >
                <FaChevronLeft />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 bg-gray-800 text-gray-300 font-medium border-l border-gray-700 ${
                      currentPage === page
                        ? "bg-gray-700 text-yellow-400"
                        : "hover:bg-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded-r-md bg-gray-800 text-gray-300 border-l border-gray-700 ${
                  currentPage !== totalPages
                    ? "hover:bg-gray-700"
                    : "opacity-50"
                }`}
              >
                <FaChevronRight />
              </button>
            </nav>
          </div>
        )}
      </div>

      {/* Create Post Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-yellow-400">
                  Create New Post
                </h2>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="text-gray-400 hover:text-gray-200"
                >
                  <FaTimes className="text-2xl" />
                </button>
              </div>

              <form onSubmit={handleCreatePost}>
                <div className="mb-6">
                  <label
                    htmlFor="postTitle"
                    className="block text-gray-300 mb-2"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="postTitle"
                    value={newPost.title}
                    onChange={(e) =>
                      setNewPost({ ...newPost, title: e.target.value })
                    }
                    placeholder="What's your question or topic?"
                    className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="postTags"
                    className="block text-gray-300 mb-2"
                  >
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    id="postTags"
                    value={newPost.tags}
                    onChange={(e) =>
                      setNewPost({ ...newPost, tags: e.target.value })
                    }
                    placeholder="javascript, react, algorithm"
                    className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="postContent"
                    className="block text-gray-300 mb-2"
                  >
                    Content
                  </label>
                  <textarea
                    id="postContent"
                    value={newPost.content}
                    onChange={(e) =>
                      setNewPost({ ...newPost, content: e.target.value })
                    }
                    className="w-full min-h-[300px] bg-gray-700 border border-gray-600 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium rounded-lg transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-lg transition-all"
                  >
                    Post Discussion
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Post Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-yellow-400 mb-2">
                    {selectedPost.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>Posted by {selectedPost.author}</span>
                    <span>{daysAgo(selectedPost.date)}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-gray-400 hover:text-gray-200"
                >
                  <FaTimes className="text-2xl" />
                </button>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="post-content bg-gray-700 p-4 rounded-lg mb-6"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />

                <div className="flex items-center justify-between border-t border-b border-gray-700 py-4 mb-6">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleLikePost(selectedPost.id)}
                      className={`flex items-center gap-2 ${
                        likedPosts.has(selectedPost.id)
                          ? "text-yellow-400"
                          : "text-gray-300 hover:text-yellow-400"
                      }`}
                    >
                      <FaThumbsUp />
                      <span>{selectedPost.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-300 hover:text-blue-400">
                      <FaComment />
                      <span>{selectedPost.comments}</span>
                    </button>
                  </div>
                  <button className="text-gray-300 hover:text-red-400">
                    <FaBookmark />
                  </button>
                </div>
              </div>

              {/* Comments Section */}
              <div>
                <h3 className="text-xl font-bold text-gray-200 mb-4">
                  Comments
                </h3>

                <div className="mb-6">
                  <form onSubmit={handleCommentSubmit}>
                    <div className="flex gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-gray-300">
                        <FaUser />
                      </div>
                      <div className="flex-1">
                        <textarea
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          placeholder="Add your comment..."
                          className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 min-h-[80px]"
                        />
                        <div className="flex justify-end mt-2">
                          <button
                            type="submit"
                            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-md transition-all"
                          >
                            Post Comment
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="space-y-4">
                  {generateSampleComments(selectedPost.id).map((comment) => (
                    <div
                      key={comment.id}
                      className="bg-gray-700 p-4 rounded-lg"
                    >
                      <div className="flex gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-gray-300">
                          <FaUser />
                        </div>
                        <div>
                          <div className="font-medium text-gray-200">
                            {comment.author}
                          </div>
                          <div className="text-xs text-gray-400">
                            {comment.date}
                          </div>
                        </div>
                      </div>
                      <div className="text-gray-300 pl-13">
                        {comment.content}
                      </div>
                      <div className="flex items-center gap-4 mt-3 text-sm">
                        <button className="text-gray-400 hover:text-yellow-400 flex items-center gap-1">
                          <FaThumbsUp className="far" />
                          <span>{comment.likes}</span>
                        </button>
                        <button className="text-gray-400 hover:text-blue-400">
                          Reply
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discussion;
