import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <div className="relative">
        {/* Spinning Square */}
        <div className="w-16 h-16 border-4 border-blue-500 rounded-lg animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;