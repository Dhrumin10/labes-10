import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Building an AI-Powered Smart Lock',
    excerpt: 'Learn how we implemented facial recognition and voice commands for secure access control.',
    author: 'Michael Rodriguez',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80',
  },
  {
    title: 'Machine Learning in Embedded Systems',
    excerpt: 'Exploring the challenges and solutions of running ML models on resource-constrained devices.',
    author: 'Dr. Sarah Chen',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
  },
  {
    title: 'Open Source in Hardware Development',
    excerpt: 'Why we believe in open source and how it accelerates innovation in hardware projects.',
    author: 'Emily Watson',
    date: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our latest thoughts on AI, hardware development, and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;