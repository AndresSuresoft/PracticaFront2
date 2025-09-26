
import React, { useState, useEffect } from 'react';
import '../index.css'; 

type WinDimensions = {
  width: number;
  height: number;
}

const WindowSizeMonitor: React.FC = () => {
  const [windowSize, setWindowSize] = useState<WinDimensions>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    handleResize(); 
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <div className="window-monitor-card">
      <h2>Window Size Monitor</h2>
      <p className="dimension-label">
        Width: <span className="dimension-value">{windowSize.width} px</span>
      </p>
      <p className="dimension-label">
        Height: <span className="dimension-value">{windowSize.height} px</span>
      </p>
      
    </div>
  );
};

export default WindowSizeMonitor;