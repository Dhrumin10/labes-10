import React from 'react';
import { Brain, Mail, MapPin, Phone } from 'lucide-react';
import SocialLinks from '../shared/SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Stalwart Labs</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering innovation through AI and hardware integration.
            </p>
            <SocialLinks variant="light" iconSize={24} />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#projects">Projects</FooterLink>
              <FooterLink href="#team">Team</FooterLink>
              <FooterLink href="#blog">Blog</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <ContactItem Icon={Mail} text="info@stalwartlabs.ai" />
              <ContactItem Icon={Phone} text="+1 (555) 123-4567" />
              <ContactItem Icon={MapPin} text="Silicon Valley, CA" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest innovations.</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Stalwart Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-white transition-colors">
      {children}
    </a>
  </li>
);

const ContactItem = ({ Icon, text }: { Icon: React.ElementType; text: string }) => (
  <li className="flex items-center text-gray-400">
    <Icon className="h-5 w-5 mr-2" />
    <span>{text}</span>
  </li>
);

export default Footer;