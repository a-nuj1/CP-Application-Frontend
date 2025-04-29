import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  EmojiEvents as TrophyIcon,
  People as UsersIcon,
  Public as GlobeIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  MilitaryTech as AwardIcon,
  Star as StarIcon,
  Person as UserIcon,
  Groups as GroupsIcon
} from '@mui/icons-material';
import {
  Box,
  Typography,
  Button,
  Tab,
  Tabs,
  Paper,
  Grid,
  Avatar,
  CircularProgress,
  Divider,
  IconButton
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: '#eab308',
  },
});

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: 'rgba(255, 255, 255, 0.7)',
  '&.Mui-selected': {
    color: '#eab308',
  },
  '&:hover': {
    color: '#ffffff',
    opacity: 1,
  },
}));

const RankBadge = styled(Box)(({ rank }) => ({
  width: 32,
  height: 32,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: rank === 1 
    ? 'linear-gradient(135deg, #eab308, #ca8a04)' 
    : rank === 2 
      ? 'linear-gradient(135deg, #9ca3af, #6b7280)' 
      : rank === 3 
        ? 'linear-gradient(135deg, #b45309, #92400e)' 
        : 'linear-gradient(135deg, #1f2937, #111827)',
}));

const Leaderboard = () => {

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('global');
  const [expandedGroup, setExpandedGroup] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userGroups, setUserGroups] = useState([
    // { id: 1, name: 'Delulu', memberCount: 24, userRank: 5 },
    // { id: 2, name: 'Aao Bhai Tum Bhi..', memberCount: 8, userRank: 1 },
    // { id: 3, name: 'Lazy', memberCount: 32, userRank: 12 },
  ]);
  const [globalRankings, setGlobalRankings] = useState([]);
  const [groupRankings, setGroupRankings] = useState({});

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      // Mock data for global rankings
      const mockGlobalRankings = Array.from({ length: 30 }, (_, i) => ({
        id: i + 1,
        name: i === 7 ? 'You' : `User${Math.floor(Math.random() * 100)}`,
        avatar: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 10}.jpg`,
        score: Math.floor(Math.random() * 10),
        problemsSolved: Math.floor(Math.random() * 10),
        isCurrentUser: i === 7,
      })).sort((a, b) => b.score - a.score);

      // Mock data for group rankings
      const mockGroupRankings = {};
      userGroups.forEach(group => {
        mockGroupRankings[group.id] = Array.from({ length: group.memberCount }, (_, i) => ({
          id: i + 1,
          name: i === group.userRank - 1 ? 'You' : `User${Math.floor(Math.random() * 10)}`,
          avatar: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 20}.jpg`,
          score: Math.floor(Math.random() * 5),
          problemsSolved: Math.floor(Math.random() * 10),
          isCurrentUser: i === group.userRank - 1,
        })).sort((a, b) => b.score - a.score);
      });

      setGlobalRankings(mockGlobalRankings);
      setGroupRankings(mockGroupRankings);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const toggleGroup = (groupId) => {
    setExpandedGroup(expandedGroup === groupId ? null : groupId);
  };

  const getRankIcon = (rank) => {
    if (rank === 1) return <TrophyIcon fontSize="small" />;
    if (rank === 2) return <AwardIcon fontSize="small" />;
    if (rank === 3) return <StarIcon fontSize="small" />;
    return <Typography variant="body2" fontWeight="medium">{rank}</Typography>;
  };

  return (
    <div className="min-h-screen bg-black/30 py-12 px-4 sm:px-6 lg:px-8">
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
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
          <Typography variant="h3" sx={{ 
            mb: 1,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            <span className="text-yellow-400">Leaderboards</span>
          </Typography>
          <Typography variant="body1" color="gray" sx={{ 
            mb: 4,
            textAlign: 'center',
            fontSize: '1.1rem'
          }}>
            See where you rank Globally and among your coding circles
          </Typography>

          {/* Tabs */}
          <StyledTabs 
            value={activeTab} 
            onChange={(e, newValue) => setActiveTab(newValue)}
            sx={{ mb: 3 }}
            centered
          >
            <StyledTab 
              value="global" 
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <GlobeIcon sx={{ mr: 1 }} fontSize="small" />
                  Global Rankings
                </Box>
              } 
            />
            <StyledTab 
              value="groups" 
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <UsersIcon sx={{ mr: 1 }} fontSize="small" />
                  Group Rankings
                </Box>
              } 
            />
          </StyledTabs>

          {/* Content */}
          {isLoading ? (
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '400px' 
            }}>
              <CircularProgress color="warning" />
            </Box>
          ) : (
            <>
              {/* Global Leaderboard */}
              {activeTab === 'global' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Paper sx={{ 
                    backgroundColor: 'rgba(17, 24, 39, 0.7)', 
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <Grid container sx={{ 
                      backgroundColor: 'rgba(31, 41, 55, 0.7)', 
                      p: 2,
                      fontWeight: 'medium',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      <Grid item xs={1}>
                        <Typography color="gray">Rank</Typography>
                      </Grid>
                      <Grid item xs={5}>
                        <Typography color="gray">User</Typography>
                      </Grid>
                      <Grid item xs={3} sx={{ textAlign: 'right' }}>
                        <Typography color="gray">Score</Typography>
                      </Grid>
                      <Grid item xs={3} sx={{ textAlign: 'right' }}>
                        <Typography color="gray">Solved</Typography>
                      </Grid>
                    </Grid>
                    <Box sx={{ 
                      maxHeight: '600px', 
                      overflowY: 'auto'
                    }}>
                      {globalRankings.map((user, index) => (
                        <motion.div
                          key={user.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03 }}
                        >
                          <Grid 
                            container 
                            sx={{ 
                              p: 2,
                              alignItems: 'center',
                              backgroundColor: user.isCurrentUser 
                                ? 'rgba(234, 179, 8, 0.1)' 
                                : 'transparent',
                              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                              '&:hover': {
                                backgroundColor: 'rgba(31, 41, 55, 0.5)'
                              }
                            }}
                          >
                            <Grid item xs={1}>
                              <RankBadge rank={index + 1}>
                                {getRankIcon(index + 1)}
                              </RankBadge>
                            </Grid>
                            <Grid item xs={5} sx={{ display: 'flex', alignItems: 'center' }}>
                              <Box sx={{ position: 'relative', mr: 2 }}>
                                <Avatar 
                                  src={user.avatar} 
                                  alt={user.name}
                                  sx={{ 
                                    width: 40, 
                                    height: 40,
                                    border: '2px solid #eab308'
                                  }} 
                                />
                                {user.isCurrentUser && (
                                  <Box sx={{
                                    position: 'absolute',
                                    bottom: -4,
                                    right: -4,
                                    backgroundColor: '#eab308',
                                    borderRadius: '50%',
                                    p: 0.5
                                  }}>
                                    <UserIcon sx={{ width: 12, height: 12, color: 'black' }} />
                                  </Box>
                                )}
                              </Box>
                              <Typography 
                                sx={{ 
                                  fontWeight: user.isCurrentUser ? 'bold' : 'normal',
                                  color: user.isCurrentUser ? '#eab308' : 'white'
                                }}
                              >
                                {user.name}
                              </Typography>
                            </Grid>
                            <Grid item xs={3} sx={{ textAlign: 'right' }}>
                              <Typography fontFamily="monospace" color="white">
                                {user.score.toLocaleString()}
                              </Typography>
                            </Grid>
                            <Grid item xs={3} sx={{ textAlign: 'right' }}>
                              <Typography color="gray">
                                {user.problemsSolved} problems
                              </Typography>
                            </Grid>
                          </Grid>
                        </motion.div>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              )}

              {/* Group Leaderboards */}
              {activeTab === 'groups' && (
                <Box sx={{ '& > * + *': { mt: 3 } }}>
                  {userGroups.map((group) => (
                    <motion.div 
                      key={group.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Paper sx={{ 
                        backgroundColor: 'rgba(17, 24, 39, 0.7)',
                        overflow: 'hidden',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)'
                      }}>
                        <Button
                          onClick={() => toggleGroup(group.id)}
                          fullWidth
                          sx={{ 
                            p: 2,
                            justifyContent: 'space-between',
                            backgroundColor: 'transparent',
                            '&:hover': {
                              backgroundColor: 'rgba(31, 41, 55, 0.5)'
                            }
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ 
                              backgroundColor: 'rgba(234, 179, 8, 0.2)', 
                              p: 1, 
                              borderRadius: 1,
                              mr: 2
                            }}>
                              <UsersIcon sx={{ color: '#eab308' }} />
                            </Box>
                            <Box sx={{ textAlign: 'left' }}>
                              <Typography sx={{ 
                                fontWeight: 'medium',
                                color: 'white'
                              }}>
                                {group.name}
                              </Typography>
                              <Typography variant="body2" color="gray">
                                {group.memberCount} members • Your rank: <span className="text-yellow-400">{group.userRank}</span>
                              </Typography>
                            </Box>
                          </Box>
                          {expandedGroup === group.id ? (
                            <ExpandLessIcon sx={{ color: '#eab308' }} />
                          ) : (
                            <ExpandMoreIcon sx={{ color: '#eab308' }} />
                          )}
                        </Button>

                        <AnimatePresence>
                          {expandedGroup === group.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Grid container sx={{ 
                                backgroundColor: 'rgba(31, 41, 55, 0.7)', 
                                p: 2,
                                fontWeight: 'medium',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                              }}>
                                <Grid item xs={1}>
                                  <Typography color="gray">Rank</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography color="gray">User</Typography>
                                </Grid>
                                <Grid item xs={3} sx={{ textAlign: 'right' }}>
                                  <Typography color="gray">Score</Typography>
                                </Grid>
                                <Grid item xs={3} sx={{ textAlign: 'right' }}>
                                  <Typography color="gray">Solved</Typography>
                                </Grid>
                              </Grid>
                              <Box sx={{ 
                                maxHeight: '400px', 
                                overflowY: 'auto'
                              }}>
                                {groupRankings[group.id]?.map((user, index) => (
                                  <motion.div
                                    key={user.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.03 }}
                                  >
                                    <Grid 
                                      container 
                                      sx={{ 
                                        p: 2,
                                        alignItems: 'center',
                                        backgroundColor: user.isCurrentUser 
                                          ? 'rgba(234, 179, 8, 0.1)' 
                                          : 'transparent',
                                        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                                        '&:hover': {
                                          backgroundColor: 'rgba(31, 41, 55, 0.5)'
                                        }
                                      }}
                                    >
                                      <Grid item xs={1}>
                                        <RankBadge rank={index + 1}>
                                          {getRankIcon(index + 1)}
                                        </RankBadge>
                                      </Grid>
                                      <Grid item xs={5} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Avatar 
                                          src={user.avatar} 
                                          alt={user.name}
                                          sx={{ 
                                            width: 40, 
                                            height: 40,
                                            border: '2px solid #eab308',
                                            mr: 2
                                          }} 
                                        />
                                        <Typography 
                                          sx={{ 
                                            fontWeight: user.isCurrentUser ? 'bold' : 'normal',
                                            color: user.isCurrentUser ? '#eab308' : 'white'
                                          }}
                                        >
                                          {user.name}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={3} sx={{ textAlign: 'right' }}>
                                        <Typography fontFamily="monospace" color="white">
                                          {user.score.toLocaleString()}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={3} sx={{ textAlign: 'right' }}>
                                        <Typography color="gray">
                                          {user.problemsSolved} problems
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  </motion.div>
                                ))}
                              </Box>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Paper>
                    </motion.div>
                  ))}

                  {userGroups.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <Box sx={{ 
                        textAlign: 'center', 
                        py: 6,
                        backgroundColor: 'rgba(17, 24, 39, 0.7)',
                        borderRadius: 2,
                        p: 4,
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)'
                      }}>
                        <GroupsIcon sx={{ 
                          fontSize: 48, 
                          color: 'gray',
                          mb: 2 
                        }} />
                        <Typography variant="h5" sx={{ 
                          mb: 1, 
                          fontWeight: 'medium',
                          color: 'white'
                        }}>
                          No Groups Yet
                        </Typography>
                        <Typography color="gray" sx={{ mb: 3 }}>
                          Join or create a group to see group rankings
                        </Typography>
                        <Button 
                          onClick={()=>navigate('/groups/my')}
                          variant="contained" 
                          color="warning"
                          sx={{ 


                            px: 4, 
                            py: 1,
                            background: '#eab308',
                            color: 'black',
                            fontWeight: 'bold',
                            '&:hover': {
                              background: '#ca8a04'
                            }
                          }}
                        >
                          Create Group
                        </Button>
                      </Box>
                    </motion.div>
                  )}
                </Box>
              )}
            </>
          )}
        </Box>
      </motion.div>
    </div>
  );
};

export default Leaderboard;