import React from 'react';
import { UserCircle, Binary, Cpu, Network, Sigma } from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="flex h-screen bg-gray-100 text-gray-800">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-lg">
                <div className="p-5">
                    <h1 className="text-2xl font-bold text-indigo-600">ByteMath</h1>
                </div>
                <nav className="mt-5">
                    {['Profile', 'Courses', 'Problems', 'Progress'].map((item, index) => (
                        <a key={index} href="#" className="block py-3 px-5 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                            {item}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-10 overflow-y-auto">
                {/* Profile Section */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div className="flex items-center space-x-4">
                        <UserCircle size={64} className="text-indigo-600" />
                        <div>
                            <h2 className="text-2xl font-semibold">tekliko</h2>
                            <p className="text-gray-600">tbasil9@freeuni.edu.ge</p>
                        </div>
                    </div>
                </div>

                {/* Progress Chart */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4">Problem Completion</h3>
                    <div className="flex justify-between items-center">
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                                <span>Easy: 2/3</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                                <span>Medium: 1/3</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                                <span>Hard: 0/3</span>
                            </div>
                        </div>
                        <div className="text-4xl font-bold text-indigo-600">3/9</div>
                    </div>
                </div>

                {/* Category Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Binary, title: "ორობითი სისტემა", progress: 0 },
                        { icon: Cpu, title: "ლოგიკური ოპერაციები", progress: 0 },
                        { icon: Network, title: "გრაფთა თეორია", progress: 0 },
                        { icon: Sigma, title: "რიცხვთა თეორია", progress: 0 }
                    ].map((category, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <category.icon size={48} className="text-indigo-600 mb-4" />
                            <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                            <p className="text-gray-600">{category.progress}% შესრულებული</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;