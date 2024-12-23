import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function CPDashboard() {
  // Sample LeetCode stats and other platform data
  const leetCodeStats = {
    username: "BikramYadav",
    solvedProblems: 250,
    rating: 1800,
    problemsSolvedToday: 5,
    totalProblems: 2000,
  };

  const otherPlatformStats = {
    codeforcesRating: 2100,
    hackerrankPoints: 320,
    atCoderRating: 1800,
  };

  // Sample chart data for progress (you can replace it with actual data)
  const chartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        label: 'LeetCode Progress',
        data: [10, 20, 30, 40, 50, 60, 70],
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">CP Profile Dashboard</h1>

      {/* Profile Overview */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">LeetCode Stats</h2>
        <p className="text-lg text-gray-600">Username: {leetCodeStats.username}</p>
        <p className="text-lg text-gray-600">Total Problems Solved: {leetCodeStats.solvedProblems}</p>
        <p className="text-lg text-gray-600">Rating: {leetCodeStats.rating}</p>
        <p className="text-lg text-gray-600">Problems Solved Today: {leetCodeStats.problemsSolvedToday}</p>
        <p className="text-lg text-gray-600">Total Problems: {leetCodeStats.totalProblems}</p>
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
