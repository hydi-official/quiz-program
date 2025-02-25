import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  // useEffect to start and stop an interval
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount and cleans up on unmount

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={handleStop}>Stop Count</button>
    </div>
  );
};

export default Contact;
