import {
  FaLaptopCode,
  FaCopy,
  FaEnvelope,
  FaTrash,
  FaUsers,
} from "react-icons/fa";
import { useState } from "react";
import { Box } from "@mui/material";

function CreateGroupPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groups, setGroups] = useState([]);
  const [activeGroup, setActiveGroup] = useState(null);
  const [email, setEmail] = useState("");

  // Form state
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [tagline, setTagline] = useState("");

  const handleCreateGroup = () => {
    const newGroup = {
      id: Date.now(),
      name: groupName,
      tagline,
      description,
      members: 1,
      link: `https://codecompete.com/group/${groupName
        .toLowerCase()
        .replace(/\s+/g, "-")}`,
    };
    setGroups([...groups, newGroup]);
    setActiveGroup(newGroup);
    setIsModalOpen(false);
    setGroupName("");
    setTagline("");
    setDescription("");
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // Replace alert with a toast notification in production
    alert("Link copied to clipboard!");
  };

  const sendInvite = () => {
    // In a real app, you would send this to your backend
    alert(`Invitation sent to ${email}`);
    setEmail("");
  };

  const deleteGroup = (id) => {
    setGroups(groups.filter((group) => group.id !== id));
    if (activeGroup?.id === id) setActiveGroup(null);
  };

  return (
    <div className="min-h-screen bg-black/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* blur cirlce in bg */}
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
            Create Your <span className="text-yellow-400">Coding Group</span>
          </h1>
          <p className="max-w-xl mx-auto text-xl text-gray-300">
            Form your own competitive coding circle. Challenge friends, track
            progress, and climb leaderboards together.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-200 transform hover:scale-105"
          >
            Create New Group
          </button>
        </div>

        {/* Groups Grid */}
        {groups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group) => (
              <div
                key={group.id}
                className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-yellow-400 border border-transparent ${
                  activeGroup?.id === group.id
                    ? "ring-2 ring-yellow-400 border-yellow-400"
                    : ""
                }`}
                onClick={() => setActiveGroup(group)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium text-gray-100">
                      {group.name}
                    </h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteGroup(group.id);
                      }}
                      className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                    >
                      <FaTrash />
                    </button>
                  </div>
                  {/* Add this line to show the tagline */}
                  {group.tagline && (
                    <p className="mt-1 text-sm text-yellow-400 italic">
                      {group.tagline}
                    </p>
                  )}
                  <p className="mt-2 text-sm text-gray-400">
                    {group.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-400">
                    <FaUsers className="mr-1 text-yellow-400" />
                    <span>
                      {group.members} member{group.members !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
            <FaLaptopCode className="mx-auto h-12 w-12 text-yellow-500" />
            <h3 className="mt-2 text-lg font-medium text-gray-200">
              No groups yet
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              Create your first group to start competing with friends!
            </p>
          </div>
        )}

        {/* Group Details Section */}
        {activeGroup && (
          <div className="mt-8 bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-100">
                {activeGroup.name}
              </h2>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-900 text-yellow-200">
                Owner
              </span>
            </div>

            <p className="text-gray-300 mb-6">{activeGroup.description}</p>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">
                  Invite via Link
                </h3>
                <div className="flex">
                  <input
                    type="text"
                    value={activeGroup.link}
                    readOnly
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-gray-700 bg-gray-700 text-gray-200 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  />
                  <button
                    onClick={() => copyToClipboard(activeGroup.link)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-gray-900 bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200"
                  >
                    <FaCopy className="mr-2" /> Copy
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">
                  Invite via Email
                </h3>
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-gray-700 bg-gray-700 text-gray-200 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  />
                  <button
                    onClick={sendInvite}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-gray-900 bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200"
                  >
                    <FaEnvelope className="mr-2" /> Send
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-100 mb-4">
                Group Members
              </h3>
              <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-yellow-900 flex items-center justify-center text-yellow-300 font-bold">
                    You
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-100">
                      You (Owner)
                    </p>
                    <p className="text-sm text-gray-400">Joined just now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Create Group Modal */}

        {isModalOpen && (
          <div className="fixed z-50 inset-0 overflow-y-auto">
            {/* Backdrop with subtle glow effect */}
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm">
                {/* Animated gradient background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-yellow-500/30 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-yellow-500/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Modal container with animated entrance */}
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>

              {/* Modal content with glassmorphism effect */}
              <div className="inline-block align-bottom bg-gray-800/90 backdrop-blur-lg rounded-xl shadow-2xl text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-gray-700/50 relative">
                {/* Glowing border accent */}
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none border border-transparent"
                  style={{
                    boxShadow: "inset 0 0 12px rgba(234, 179, 8, 0.3)",
                  }}
                ></div>

                {/* Modal header with decorative elements */}
                <div className="px-6 pt-6 pb-2 relative">
                  <div className="absolute -top-1 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent"></div>
                  <h3 className="text-2xl font-bold text-gray-100 text-center">
                    Create New Group
                    <span className="block mt-1 w-12 h-1 bg-yellow-500 mx-auto rounded-full"></span>
                  </h3>
                </div>

                {/* Modal body with enhanced form styling */}
                <div className="px-6 py-4">
                  <div className="space-y-6">
                    {/* Group Name Field */}
                    <div className="group">
                      <label
                        htmlFor="group-name"
                        className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-yellow-400 transition-colors duration-200"
                      >
                        Group Name
                      </label>
                      <input
                        type="text"
                        id="group-name"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                        className="block w-full border border-gray-700 rounded-lg shadow-sm py-3 px-4 bg-gray-700/70 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all duration-200 placeholder-gray-500"
                        placeholder="e.g. Code Warriors"
                      />
                    </div>

                    {/* Group Tagline Field */}
                    <div className="group">
                      <label
                        htmlFor="group-tagline"
                        className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-yellow-400 transition-colors duration-200"
                      >
                        Group Tagline
                      </label>
                      <input
                        type="text"
                        id="group-tagline"
                        value={tagline}
                        onChange={(e) => setTagline(e.target.value)}
                        className="block w-full border border-gray-700 rounded-lg shadow-sm py-3 px-4 bg-gray-700/70 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all duration-200 placeholder-gray-500"
                        placeholder="A catchy one-liner for your group"
                        maxLength={60}
                      />
                      <p className="mt-1 text-xs text-gray-500 text-right">
                        {tagline.length}/60 characters
                      </p>
                    </div>

                    {/* Description Field */}
                    <div className="group">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-yellow-400 transition-colors duration-200"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="block w-full border border-gray-700 rounded-lg shadow-sm py-3 px-4 bg-gray-700/70 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all duration-200 placeholder-gray-500"
                        placeholder="Describe your group's purpose and goals..."
                      />
                    </div>
                  </div>
                </div>

                {/* Modal footer with enhanced buttons */}
                <div className="px-6 py-4 bg-gray-800/50 rounded-b-xl border-t border-gray-700/50 flex flex-col sm:flex-row-reverse sm:justify-between gap-3">
                  <button
                    type="button"
                    onClick={handleCreateGroup}
                    disabled={!groupName.trim()}
                    className={`w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 rounded-lg shadow-lg border border-transparent font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-200 transform hover:scale-[1.02] ${
                      groupName.trim()
                        ? "bg-gradient-to-br from-yellow-500 to-yellow-600 text-gray-900 hover:from-yellow-400 hover:to-yellow-500"
                        : "bg-gray-700 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Create Group
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 rounded-lg shadow-sm border border-gray-700 font-medium text-gray-300 bg-gray-700/50 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateGroupPage;
