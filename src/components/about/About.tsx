import React from 'react';
import { Lightbulb, Code, Users, Rocket } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We push the boundaries of what\'s possible across all technological domains.',
  },
  {
    icon: Code,
    title: 'Open Source',
    description: 'All our projects are open source, fostering collaboration and knowledge sharing.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Join a vibrant community of developers, engineers, and tech enthusiasts.',
  },
  {
    icon: Rocket,
    title: 'Future Focused',
    description: 'Building tomorrow\'s technology today, from AI and robotics to emerging fields.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Stalwart Labs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a community of innovators passionate about developing technology that shapes the future. 
            Starting with AI and robotics, we are expanding into every area of technology, working together 
            to turn ideas into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;