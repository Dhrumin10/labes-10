import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dhrumin Upadhyay',
    role: 'Founder & Lead Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    bio: 'Passionate about AI and hardware innovation, leading the vision of Stalwart Labs.',
    social: {
      github: '#',
      linkedin: '#',
      email: 'mailto:dhrumin@stalwartlabs.ai'
    }
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated to pushing the boundaries of AI and hardware innovation.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href={member.social.github} className="text-gray-400 hover:text-gray-600">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-gray-600">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.email} className="text-gray-400 hover:text-gray-600">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;