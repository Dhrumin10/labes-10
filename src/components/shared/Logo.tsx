import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-blue-600 rounded-full"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-lg tracking-wider">
            SL
          </span>
        </div>
      </div>
      <span className="ml-2 text-xl font-bold">Stalwart Labs</span>
    </div>
  );
};

export default Logo;