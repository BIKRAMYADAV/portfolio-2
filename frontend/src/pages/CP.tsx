import { useEffect, useState } from "react";
import axios from "axios";

const leetcodeApi = "https://alfa-leetcode-api.onrender.com/";

function CPDashboard() {
  const [leetcodeProfile, setLeetcodeProfile] = useState<any>(null);
  const [leetcodeProblems, setLeetcodeProblems] = useState<any>(null);
  const [leetcodeContest, setLeetcodeContest] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

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

        console.log("Fetched profile: ", profileResponse.data);
      } catch (error) {
        console.error("Failed to fetch LeetCode stats:", error);
        setError("Failed to fetch LeetCode data. Please try again later.");
      }
    };

    fetchLeetcodeData();
  }, []);

  const otherPlatformStats = {
    codeforcesRating: 739,
    hackerrankPoints: "4 stars in C++",
    atCoderRating: 1800,
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">CP Profile Dashboard</h1>

      {error && (
        <div className="bg-red-100 text-red-800 p-4 mb-4 rounded">
          {error}
        </div>
      )}

      {/* Profile Overview */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">LeetCode Stats</h2>
        {leetcodeProfile ? (
          <>
            <p className="text-lg text-gray-600">Username: {leetcodeProfile.name}</p>
            <p className="text-lg text-gray-600">Total Problems Solved: {leetcodeProblems?.solvedProblem || "N/A"}</p>

            <p className="text-lg text-gray-600">Rating: {leetcodeContest?.contestRating || "N/A"}</p>
          </>
        ) : (
          <p className="text-lg text-gray-600">Loading LeetCode stats...</p>
        )}
      </div>

      {/* Other Platform Stats */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Other Platforms Stats</h2>
        <p className="text-lg text-gray-600">Codeforces Rating: {otherPlatformStats.codeforcesRating}</p>
        <p className="text-lg text-gray-600">HackerRank Points: {otherPlatformStats.hackerrankPoints}</p>
      </div>
    </div>
  );
}

export default CPDashboard;

