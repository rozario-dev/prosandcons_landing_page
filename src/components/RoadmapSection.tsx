import React from 'react';
import { FiCalendar, FiTrendingUp, FiSmartphone, FiUsers } from 'react-icons/fi';

interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: 'completed' | 'in-progress' | 'planned';
}

const roadmapItems: RoadmapItem[] = [
  {
    quarter: "Q3 2025",
    title: "Enhanced Beta Launch",
    description: "Launch beta version with enhanced debate features, improved AI responses, and advanced analytics dashboard.",
    icon: <FiTrendingUp className="w-6 h-6" />,
    status: "in-progress"
  },
  {
    quarter: "Q4 2025",
    title: "Mobile & Social Integration",
    description: "Expand to mobile applications and integrate with major social platforms for seamless debate sharing.",
    icon: <FiSmartphone className="w-6 h-6" />,
    status: "planned"
  },
  {
    quarter: "Q1 2026",
    title: "Enterprise Solutions",
    description: "Scale to enterprise market with specialized tools for training, education, and corporate decision-making.",
    icon: <FiUsers className="w-6 h-6" />,
    status: "planned"
  }
];

const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Product Roadmap
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover what's coming next in our journey to revolutionize AI-powered debate and decision-making.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 max-w-lg">
                  <div className="group p-8 bg-gray-50 dark:bg-dark-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-dark-border">
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
                        item.status === 'completed' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : item.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'
                      }`}>
                        <FiCalendar className="w-4 h-4" />
                        <span>{item.quarter}</span>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === 'completed'
                          ? 'bg-green-500 text-white'
                          : item.status === 'in-progress'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-400 text-white'
                      }`}>
                        {item.status === 'completed' ? 'Done' : item.status === 'in-progress' ? 'In Progress' : 'Planned'}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-xl mb-6 ${
                      item.status === 'completed'
                        ? 'bg-green-500 text-white'
                        : item.status === 'in-progress'
                        ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                        : 'bg-gray-400 text-white'
                    }`}>
                      {item.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple relative z-10"></div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-lg hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;