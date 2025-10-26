import React from 'react';

function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-gray-100 flex items-center justify-center z-50">
      <div className="relative" style={{ width: '80px', height: '80px' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Rotating diamond with all 4 sides visible */}
          <div 
            className="border-4 border-blue-500 rotate-45 animate-spin" 
            style={{ width: '48px', height: '48px' }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingSpinner;