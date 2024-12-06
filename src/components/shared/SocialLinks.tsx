import React from 'react';
import { Github, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ElementType;
}

const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/stalwart-labs',
    icon: Github
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/company/stalwart-labs',
    icon: Linkedin
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/stalwartlabs',
    icon: Twitter
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com/@stalwartlabs',
    icon: Youtube
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/stalwartlabs',
    icon: Instagram
  }
];

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  variant?: 'light' | 'dark';
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className = '', 
  iconSize = 24,
  variant = 'light'
}) => {
  return (
    <div className={`flex items-center justify-center space-x-6 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`transform transition-all duration-300 hover:scale-110 ${
            variant === 'light' 
              ? 'text-white/80 hover:text-white' 
              : 'text-gray-600 hover:text-blue-600'
          }`}
          aria-label={`Follow us on ${link.platform}`}
        >
          <link.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;