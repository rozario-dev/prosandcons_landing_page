import React from 'react';
import { FiStar } from 'react-icons/fi';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    content: "This AI acts as a perfect 'fire extinguisher' for community disputes. It helps de-escalate tensions by providing balanced perspectives that everyone can understand.",
    author: "Sarah Chen",
    role: "Community Manager",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    content: "Incredible tool for enhancing objective thinking and reducing personal bias. It's like having a neutral moderator in every discussion.",
    author: "Marcus Rodriguez",
    role: "Research Analyst",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    content: "My blog engagement has skyrocketed since I started using this for multi-angle insights. Readers love the comprehensive analysis.",
    author: "Emily Watson",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    content: "Becoming a thought leader on Reddit has never been easier. This tool helps me craft well-reasoned arguments that resonate with diverse audiences.",
    author: "David Kim",
    role: "Digital Strategist",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    content: "Perfect for debate preparation and real-time discussions. It's like having a debate coach available 24/7.",
    author: "Lisa Thompson",
    role: "Debate Coach",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    content: "As a startup founder, this tool has been invaluable for making strategic decisions. It helps me see all angles before committing to important choices.",
    author: "Alex Johnson",
    role: "Startup Founder",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              What Users Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their decision-making process with our AI debate assistant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 dark:bg-dark-card rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-dark-border"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;