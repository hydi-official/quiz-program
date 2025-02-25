import React, { useState, useEffect } from 'react';
import '../App.css'; // Import your CSS file

function Dark() {
  // State variable to track the current mode
  const [mode, setMode] = useState(() => {
    // Check if the user has set a preference for dark mode
    const savedMode = localStorage.getItem('mode');
    return savedMode ? savedMode : 'light';
  });

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('mode', newMode); // Save the mode preference
  };

  // Darkly mode-specific CSS changes
  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [mode]);

  return (
    <div className="Dark">
      <header>
        {/* Toggle button */}
        <button onClick={toggleMode} className='bg-primaryColor rounded-md px-2 py-2'>
          {mode === 'light' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      {/* Your components and pages */}
    </div>
  );
}

export default Dark;
