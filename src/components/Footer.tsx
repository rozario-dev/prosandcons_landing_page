import React from 'react';
import { FiGithub, FiTwitter, FiExternalLink } from 'react-icons/fi';

const SolanaIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 397.7 311.7" fill="currentColor">
    <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 237.9z"/>
    <path d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1L333.1 73.8c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z"/>
    <path d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z"/>
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About', href: '#about', isExternal: false },
      { name: 'Blog', href: '#blog', isExternal: false },
      { name: 'Careers', href: '#careers', isExternal: false },
      { name: 'Contact', href: '#contact', isExternal: false }
    ],
    product: [
      { name: 'Features', href: '#features', isExternal: false },
      { name: 'Pricing', href: '#pricing', isExternal: false },
      { name: 'Roadmap', href: '#roadmap', isExternal: false }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy', isExternal: false, openInNewTab: true },
      { name: 'Terms of Service', href: '/terms', isExternal: false, openInNewTab: true },
    ]
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/rozario-dev',
      icon: <FiGithub className="w-5 h-5" />
    },
    {
      name: 'Twitter',
      href: 'https://x.com/prosandcons_ai',
      icon: <FiTwitter className="w-5 h-5" />
    }
  ];

  const renderLink = (link: any) => {
    const className = "text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-1";
    
    if (link.openInNewTab) {
      return (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          <span>{link.name}</span>
          <FiExternalLink className="w-3 h-3" />
        </a>
      );
    }
    
    return (
      <a href={link.href} className={className}>
        <span>{link.name}</span>
        {link.href.startsWith('http') && <FiExternalLink className="w-3 h-3" />}
      </a>
    );
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/images/logo.png" 
                alt="Pros And Cons AI" 
                className="h-10 w-10 rounded-lg"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Pros And Cons
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Your AI-powered debate assistant that helps you make better decisions by analyzing both sides of any argument. Transform your critical thinking with advanced AI technology.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300 hover:text-neon-blue"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} ProsAndCons. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              
              {/* Support Solana */}
              <a
                href="https://solana.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                title="Support Solana"
              >
                <SolanaIcon className="w-4 h-4" />
                <span className="text-sm">Support Solana</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;