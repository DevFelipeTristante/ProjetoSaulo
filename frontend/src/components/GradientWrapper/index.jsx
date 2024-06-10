import React from 'react';

function GradientWrapper({ children }) {
  return (
    <div className="h-screen bg-gradient-primary"> 
      {children}
    </div>
  );
}

export default GradientWrapper;
