import React from 'react';
import { FaTrophy, FaMedal, FaCoins, FaTicketAlt } from 'react-icons/fa';

const T1 = () => {
    // Scoring system data
    const scoringSystem = {
        positions: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'],
        points: [12, 9, 8.5, 8, 7, 6, 5, 5, 4, 3, 2, 1]
    };

    // Vault and GF Ticket winners
    const specialAchievements = [
        {
            category: 'Season Maiden',
            prize: '1 GF Ticket',
            winner: 'Black Sheep',
            vault: ''
        },
        {
            category: 'Major Final',
            prize: '1 GF Ticket',
            winner: 'Colosseum',
            vault: ''
        },
        {
            category: 'Largest Jackpot Cumulative',
            prize: '1 GF Ticket',
            winner: 'AuctioneerJosh.eth',
            vault: 'built for this also'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-6 font-sans">
            {/* Main 3D Container */}
            <div className="max-w-7xl mx-auto transform perspective-1000">
                {/* Header */}
                <div className="bg-black bg-opacity-50 rounded-t-2xl p-6 border-b border-purple-500 transform rotate-x-5 mb-6">
                    <h1 className="text-4xl font-bold text-white text-center">
                        <span className="text-purple-400">Tournament</span> Scoring System
                    </h1>
                </div>

                {/* Scoring System Section */}
                <div className="bg-gray-800 bg-opacity-70 rounded-2xl shadow-2xl overflow-hidden transform rotate-x-3 mb-6 border border-blue-500/30">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
                            <FaMedal className="text-yellow-400 mr-3" />
                            Race Position Scoring
                        </h2>

                        <div className="grid grid-cols-12 gap-2 mb-4">
                            {scoringSystem.positions.map((pos, index) => (
                                <div key={index} className="text-center">
                                    <div className={`p-2 rounded-t-lg ${index < 3 ? 'bg-gradient-to-b from-yellow-600 to-yellow-800' : 'bg-gray-700'}`}>
                                        <span className="font-bold text-white">{pos}</span>
                                    </div>
                                    <div className="p-2 bg-gray-900 rounded-b-lg">
                                        <span className={`text-xl font-bold ${index < 3 ? 'text-yellow-300' : 'text-white'}`}>
                                            {scoringSystem.points[index]}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Special Achievements Section */}
                <div className="bg-gray-800 bg-opacity-70 rounded-2xl shadow-2xl overflow-hidden transform rotate-x-2 mb-6 border border-purple-500/30">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
                            <FaTrophy className="text-purple-400 mr-3" />
                            Grand Final Ticket Winners
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {specialAchievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-500/20 transform hover:scale-105 transition-transform duration-300"
                                >
                                    <h3 className="text-lg font-bold text-purple-300 mb-2">{achievement.category}</h3>
                                    <div className="flex items-center mb-1">
                                        <FaTicketAlt className="text-yellow-400 mr-2" />
                                        <span className="text-white">{achievement.prize}</span>
                                    </div>
                                    <div className="flex items-center mb-1">
                                        <FaTrophy className="text-yellow-400 mr-2" />
                                        <span className="text-white font-medium">{achievement.winner}</span>
                                    </div>
                                    {achievement.vault && (
                                        <div className="flex items-center">
                                            <FaCoins className="text-blue-400 mr-2" />
                                            <span className="text-gray-300 text-sm">{achievement.vault}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Vault Information Section */}
                {/* <div className="bg-gray-800 bg-opacity-70 rounded-2xl shadow-2xl overflow-hidden transform rotate-x-1 p-6 border border-blue-500/30">
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-center">
                            <FaCoins className="text-blue-400 mr-2" />
                            Vault Information
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Track your vault points and ID for tournament participation
                        </p>
                        <div className="inline-block bg-gray-900 px-4 py-2 rounded-lg border border-blue-500/30">
                            <span className="text-blue-300 font-mono">ID: [Your Vault ID]</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default T1;