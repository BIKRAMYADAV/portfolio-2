import React, { useEffect, useState } from "react";

const leetcodeApi = 'https://alfa-leetcode-api.onrender.com/'

import axios from "axios";



function CPDashboard() {
  const [leetcodeProfile,setLeetcodeProfile] = useState<any>();
  const [leetcodeProblems,setLeetcodeProblems] = useState<any>();
  const [leetcodeContest,setLeetcodeContest] = useState<any>();
  
  useEffect(() => {
    const fetchLeetcodeData = async () => {
      try {
        // Parallel fetching
        const [profileResponse, problemsResponse, contestResponse] = await Promise.all([
          axios.get(`${leetcodeApi}bikram11_yv`),
          axios.get(`${leetcodeApi}bikram11_yv/solved`),
          axios.get(`${leetcodeApi}bikram11_yv/contest`)
        ]);
  
        // Update state with responses
        setLeetcodeProfile(profileResponse.data);
        setLeetcodeProblems(problemsResponse.data);
        setLeetcodeContest(contestResponse.data);
  
        console.log('Fetched profile: ', profileResponse.data);
      } catch (error) {
        console.error('Failed to fetch LeetCode stats:', error);
      }
    };
  
    fetchLeetcodeData();
  }, []);
  

 
  const otherPlatformStats = {
    codeforcesRating: 2100,
    hackerrankPoints: 320,
    atCoderRating: 1800,
  };
 console.log('leetcode prfoile is : ',leetcodeProfile);
 

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">CP Profile Dashboard</h1>

      {/* Profile Overview */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">LeetCode Stats</h2>
        <p className="text-lg text-gray-600">Username: {leetcodeProfile?.name}</p>
        
        {/* <p className="text-lg text-gray-600">Total Problems Solved: {leetCodeStats.solvedProblems}</p>
        <p className="text-lg text-gray-600">Rating: {leetCodeStats.rating}</p>
        <p className="text-lg text-gray-600">Problems Solved Today: {leetCodeStats.problemsSolvedToday}</p>
        <p className="text-lg text-gray-600">Total Problems: {leetCodeStats.totalProblems}</p> */}
      </div>

      {/* Other Platform Stats */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Other Platforms Stats</h2>
        <p className="text-lg text-gray-600">Codeforces Rating: {otherPlatformStats.codeforcesRating}</p>
        <p className="text-lg text-gray-600">HackerRank Points: {otherPlatformStats.hackerrankPoints}</p>
        <p className="text-lg text-gray-600">AtCoder Rating: {otherPlatformStats.atCoderRating}</p>
      </div>

    
    </div>
  );
}

export default CPDashboard;
