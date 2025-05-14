import React, { useEffect } from 'react';
import { FaTrophy, FaCalendarAlt, FaTicketAlt, FaCoins, FaHorse, FaFire } from 'react-icons/fa';

const TournamentDashboard = () => {


    useEffect(() => {

    })
    const tournamentData = [
        {
            date: 'May 6th to 9th',
            format: 'Maiden',
            segments: '1-3,4-8,9-15,16+',
            majorWinner: 'Black Sheep',
            majorTickets: 'GF',
            prizes: '$7,102',
            challenge: 'Speed Challenge',
            challengeWinner: 'Colosseum',
            challengeTickets: '1'
        },
        {
            date: 'May 10th to 15th',
            format: 'Top3',
            segments: 'Free tons of segments',
            majorWinner: 'Stabbr',
            majorTickets: '1',
            prizes: '$1,260',
            challenge: 'Revdu leader',
            challengeWinner: 'Iroc Racing',
            challengeTickets: '1'
        },
        {
            date: 'May 18th to May 22nd',
            format: 'Double Up',
            segments: 'BRED Metal, Fire, Earth, Water',
            majorWinner: 'Armoured Chickens',
            majorTickets: '1',
            prizes: '$1,000',
            challenge: 'Spin War',
            challengeWinner: 'Suspkt',
            challengeTickets: '1'
        },
        {
            date: 'May 26 to May 29th',
            format: 'Variance',
            segments: 'BRED 2-5,6-11,12+',
            majorWinner: 'Bullet Racing',
            majorTickets: '1',
            prizes: '$4,000',
            challenge: '1v1 shootout',
            challengeWinner: 'Colosseum',
            challengeTickets: '1'
        },
        {
            date: 'June 1st to June 5th',
            format: 'Maiden',
            segments: 'Gen, Morphed, Freak, Xclass',
            majorWinner: 'Supreme Display of Talent',
            majorTickets: '1',
            prizes: '$4,617',
            challenge: 'Consecutive wins core',
            challengeWinner: 'Black Sheep',
            challengeTickets: '1'
        },
        {
            date: 'June 7th to 11th',
            format: 'Pro',
            segments: 'BRED 2-5,6-11,12+',
            majorWinner: 'Black Sheep',
            majorTickets: '1',
            prizes: 'TBD',
            challenge: 'Vault pts average',
            challengeWinner: 'Black Diamond Tad',
            challengeTickets: '1'
        },
        {
            date: 'June 24th to June 27th',
            format: 'Spin Challenge',
            segments: 'Event Earnings',
            majorWinner: 'Southern Cross',
            majorTickets: '1',
            prizes: 'TBD',
            challenge: '',
            challengeWinner: '-',
            challengeTickets: ''
        }
    ];

    const conditions = [
        'Aging On',
        'New Temperament',
        '10,12,15,17,20,22'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-6 font-sans">
            {/* Main 3D Container */}
            <div className="max-w-7xl mx-auto transform perspective-1000">
                {/* Header */}
                <div className="bg-black bg-opacity-50 rounded-t-2xl p-6 border-b border-purple-500 transform rotate-x-5 mb-6">
                    <div className="flex justify-between items-center">
                        <h1 className="text-4xl font-bold text-white">
                            <span className="text-purple-400">Tournament</span> Dashboard
                        </h1>
                        <div className="flex space-x-4">
                            <div className="bg-purple-600 px-4 py-2 rounded-lg flex items-center">
                                <FaCalendarAlt className="text-white mr-2" />
                                <span className="text-white font-medium">Season 4</span>
                            </div>
                            <div className="bg-blue-600 px-4 py-2 rounded-lg flex items-center">
                                <FaTicketAlt className="text-white mr-2" />
                                <span className="text-white font-medium">Major Finals</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dashboard Content */}


                {/* Main Table */}
                <div className="bg-gradient-to-br from-blue-900/80 to-purple-900/80 rounded-2xl shadow-2xl overflow-hidden transform perspective-1000 rotate-x-3 mb-6 border border-purple-500/30">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-purple-500/20">
                            <thead className="bg-gradient-to-r from-blue-900 to-purple-900">
                                <tr>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-purple-200 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-purple-200 uppercase tracking-wider">
                                        Format
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-purple-200 uppercase tracking-wider">
                                        Segments
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-purple-200 uppercase tracking-wider">
                                        Major Winner
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-purple-200 uppercase tracking-wider">
                                        Tickets
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-purple-200 uppercase tracking-wider">
                                        Prizes
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-purple-200 uppercase tracking-wider">
                                        Challenge
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-purple-200 uppercase tracking-wider">
                                        Winner
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-purple-200 uppercase tracking-wider">
                                        Tickets
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-purple-500/10">
                                {tournamentData.map((row, index) => (
                                    <tr
                                        key={index}
                                        className={`hover:bg-purple-900/40 transition-all duration-200 ${index % 2 === 0 ? 'bg-blue-900/20' : 'bg-purple-900/20'}`}
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-100">
                                            {row.date}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${row.format === 'Maiden' ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-purple-100' : row.format === 'Pro' ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-blue-100' : 'bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300'}`}>
                                                {row.format}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-100">
                                            {row.segments}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-white">
                                                {row.majorWinner}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gradient-to-r from-yellow-700 to-yellow-800 text-yellow-100 shadow-md">
                                                {row.majorTickets}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-300">
                                            {row.prizes}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-200">
                                            {row.challenge}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-200">
                                            {row.challengeWinner}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {row.challengeTickets && (
                                                <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gradient-to-r from-yellow-700 to-yellow-800 text-yellow-100 shadow-md">
                                                    {row.challengeTickets}
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="bg-gray-800 bg-opacity-70 rounded-2xl shadow-2xl overflow-hidden transform rotate-x-1 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Major Final Info */}
                        <div>
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                                <FaTrophy className="text-yellow-400 mr-2" />
                                Major Final Details
                            </h3>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>June 30th - Major Final to earn a grand final ticket</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>2 races at each distance</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>12 gate conditions</span>
                                </li>
                            </ul>
                        </div>

                        {/* Conditions */}
                        <div>
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                                <FaFire className="text-orange-400 mr-2" />
                                Race Conditions
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {conditions.map((condition, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                                    >
                                        {condition}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TournamentDashboard;