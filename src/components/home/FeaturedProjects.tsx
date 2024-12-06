import React, { useState } from 'react';
import { Car, Lock, Bot, Leaf } from 'lucide-react';
import Button from '../shared/Button';

const projects = [
  {
    title: 'Gesture-Controlled Autonomous Car',
    description: 'Control a small-scale autonomous car with hand gestures using computer vision and machine learning.',
    icon: Car,
    status: 'Planning phase',
    tech: ['Raspberry Pi', 'OpenCV', 'CNN'],
    details: {
      overview: 'A revolutionary project combining computer vision and autonomous vehicles.',
      features: [
        'Real-time gesture recognition',
        'Autonomous navigation',
        'Obstacle avoidance',
        'Machine learning integration'
      ],
      timeline: 'Expected completion: Q4 2024',
      team: ['Lead: John Doe', 'Technical: Jane Smith', 'ML Expert: Mike Johnson']
    }
  },
  {
    title: 'AI-Powered Smart Lock',
    description: 'Advanced security system using facial recognition and voice commands for seamless access control.',
    icon: Lock,
    status: 'Research phase',
    tech: ['Python', 'OpenCV', 'Voice Processing'],
    details: {
      overview: 'Next-generation security system with AI capabilities.',
      features: [
        'Facial recognition',
        'Voice command processing',
        'Remote access control',
        'Activity logging'
      ],
      timeline: 'Expected completion: Q3 2024',
      team: ['Lead: Sarah Wilson', 'Security: Tom Brown', 'AI: Lisa Chen']
    }
  },
  {
    title: 'Autonomous Delivery Robot',
    description: 'Indoor navigation robot for small item delivery using AI-based decision making.',
    icon: Bot,
    status: 'Concept phase',
    tech: ['LiDAR', 'Reinforcement Learning', 'Arduino'],
    details: {
      overview: 'Autonomous robot designed for indoor deliveries.',
      features: [
        'Indoor navigation',
        'Object recognition',
        'Path planning',
        'Safety protocols'
      ],
      timeline: 'Expected completion: Q1 2025',
      team: ['Lead: Alex Kim', 'Robotics: David Lee', 'Software: Emma Davis']
    }
  },
  {
    title: 'Plant Monitoring System',
    description: 'AI-driven system for monitoring plant health and providing care recommendations.',
    icon: Leaf,
    status: 'Planning phase',
    tech: ['Sensors', 'Machine Learning', 'IoT'],
    details: {
      overview: 'Smart system for optimal plant care and monitoring.',
      features: [
        'Environmental monitoring',
        'Health diagnostics',
        'Care recommendations',
        'Data analytics'
      ],
      timeline: 'Expected completion: Q2 2024',
      team: ['Lead: Maria Garcia', 'IoT: James Wilson', 'ML: Chris Taylor']
    }
  },
];

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Future Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our upcoming innovative AI-powered hardware solutions that will push the boundaries of technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <project.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">{project.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Status: {project.status}</span>
                <Button
                  onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                  variant="primary"
                  className="text-sm px-4 py-2"
                >
                  {selectedProject === index ? 'Close Details' : 'Learn More'}
                </Button>
              </div>
              
              {/* Project Details */}
              {selectedProject === index && (
                <div className="mt-4 pt-4 border-t border-gray-200 animate-fade-in">
                  <h4 className="font-semibold text-gray-900 mb-2">Project Overview</h4>
                  <p className="text-gray-600 mb-4">{project.details.overview}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                  <ul className="list-disc list-inside mb-4 text-gray-600">
                    {project.details.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Timeline</h4>
                  <p className="text-gray-600 mb-4">{project.details.timeline}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Team</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {project.details.team.map((member, i) => (
                      <li key={i}>{member}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;