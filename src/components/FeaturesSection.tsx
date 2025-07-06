import React from 'react';
import { FiCpu, FiUsers, FiSmartphone, FiTrendingUp, FiShield, FiZap } from 'react-icons/fi';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: <FiCpu className="w-8 h-8" />,
    title: "Proprietary AI Model",
    description: "Advanced large language model specifically trained for nuanced debate scenarios and balanced analysis.",
    color: "from-neon-blue to-blue-600"
  },
  {
    icon: <FiUsers className="w-8 h-8" />,
    title: "Dynamic Role-Playing",
    description: "Real-time, dynamic role-playing capabilities for authentic perspective shifts and comprehensive viewpoints.",
    color: "from-neon-purple to-purple-600"
  },
  {
    icon: <FiSmartphone className="w-8 h-8" />,
    title: "User-Friendly Interface",
    description: "Intuitive and seamless interface designed for effortless engagement and optimal user experience.",
    color: "from-neon-pink to-pink-600"
  },
  {
    icon: <FiTrendingUp className="w-8 h-8" />,
    title: "Enhanced Decision Making",
    description: "Boost your critical thinking skills and make more informed decisions with comprehensive analysis.",
    color: "from-neon-green to-green-600"
  },
  {
    icon: <FiShield className="w-8 h-8" />,
    title: "Bias Reduction",
    description: "Minimize cognitive biases by exploring multiple perspectives and challenging your assumptions.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: <FiZap className="w-8 h-8" />,
    title: "Real-Time Analysis",
    description: "Get instant, comprehensive analysis of any topic with lightning-fast AI processing.",
    color: "from-cyan-400 to-blue-500"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover the advanced capabilities that make our AI debate assistant the perfect tool for critical thinking and decision making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white dark:bg-dark-bg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-dark-border"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl p-[1px]">
                <div className={`w-full h-full bg-gradient-to-r ${feature.color} rounded-2xl opacity-20`}></div>
              </div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;