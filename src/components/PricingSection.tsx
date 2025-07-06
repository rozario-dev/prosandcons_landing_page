import React from 'react';
import { FiCheck, FiX, FiStar } from 'react-icons/fi';

interface PricingFeature {
  name: string;
  free: string | boolean;
  pro: string | boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  isPopular?: boolean;
}

const pricingFeatures: PricingFeature[] = [
  { name: "Topic Count", free: "5", pro: "Unlimited" },
  { name: "Rounds per Topic", free: "10", pro: "Unlimited" },
  { name: "Interruption Feature", free: false, pro: true },
  { name: "Multiple AI Models", free: false, pro: true },
  { name: "Custom Role Attributes", free: false, pro: true },
  { name: "Full Text Analysis", free: false, pro: true },
  { name: "Neutral Role Setting", free: false, pro: true },
  { name: "Opinion References", free: false, pro: true },
  { name: "Unlimited Role Config", free: false, pro: true },
  { name: "Group Chat Mode", free: false, pro: true }
];

const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with AI-powered debates"
  },
  {
    name: "Pro",
    price: "9.9",
    period: "per month",
    description: "Advanced features for power users and professionals",
    isPopular: true
  }
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Simple Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. Start free and upgrade when you're ready.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Unified Pricing Table */}
          <div className="bg-white dark:bg-dark-bg rounded-2xl shadow-lg border border-gray-200 dark:border-dark-border overflow-hidden">
            {/* Table Header with Plans */}
            <div className="grid grid-cols-3 gap-0">
              {/* Feature Column Header */}
              <div className="p-6 bg-gray-50 dark:bg-dark-card border-r border-gray-200 dark:border-dark-border">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Features
                </h3>
              </div>
              
              {/* Plan Headers */}
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative p-6 text-center ${
                    plan.isPopular
                      ? 'bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 border-r border-neon-blue/30'
                      : 'bg-gray-50 dark:bg-dark-card border-r border-gray-200 dark:border-dark-border'
                  } ${index === pricingPlans.length - 1 ? 'border-r-0' : ''}`}
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-3">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    {plan.period !== "forever" && (
                      <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">
                        /{plan.period.split(' ')[1]}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {plan.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Features Comparison Rows */}
            {pricingFeatures.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-0 ${
                  index % 2 === 0 ? 'bg-white dark:bg-dark-bg' : 'bg-gray-50 dark:bg-dark-card/50'
                } hover:bg-gray-100 dark:hover:bg-dark-card transition-colors duration-200`}
              >
                {/* Feature Name */}
                <div className="p-4 border-r border-gray-200 dark:border-dark-border font-medium text-gray-900 dark:text-white">
                  {feature.name}
                </div>

                {/* Free Plan Feature */}
                <div className="p-4 border-r border-gray-200 dark:border-dark-border flex items-center justify-center">
                  {typeof feature.free === 'boolean' ? (
                    feature.free ? (
                      <div className="flex items-center space-x-2 text-green-600">
                        <FiCheck className="w-5 h-5" />
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2 text-red-500">
                        <FiX className="w-5 h-5" />
                      </div>
                    )
                  ) : (
                    <span className="text-neon-green font-semibold">{feature.free}</span>
                  )}
                </div>

                {/* Pro Plan Feature */}
                <div className="p-4 flex items-center justify-center">
                  {typeof feature.pro === 'boolean' ? (
                    feature.pro ? (
                      <div className="flex items-center space-x-2 text-green-600">
                        <FiCheck className="w-5 h-5" />
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2 text-red-500">
                        <FiX className="w-5 h-5" />
                      </div>
                    )
                  ) : (
                    <span className="text-neon-blue font-semibold">{feature.pro}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;