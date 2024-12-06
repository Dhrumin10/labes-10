import React from 'react';

interface SectionProps {
  id?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

const Section = ({ 
  id, 
  title, 
  description, 
  children, 
  className = '',
  background = 'white'
}: SectionProps) => {
  return (
    <section 
      id={id} 
      className={`py-24 ${background === 'gray' ? 'bg-gray-50' : 'bg-white'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;