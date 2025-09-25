import React, { useState, useEffect } from 'react';
import { FaArrowUp,FaArrowDown } from 'react-icons/fa';
import '../index.css'
const KeyboardControlledCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
 
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        increment();
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        decrement();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); 

  return (
    <div>
      <h2>Contador</h2>
      <p>Valor Actual: <strong>{count}</strong></p>

      <button className='button__arrow' onClick={increment}><FaArrowUp /> (ArrowUp)</button>
      <button className='button__arrow' onClick={decrement}><FaArrowDown /> (ArrowDown)</button>
      
      
    </div>
  );
};

export default KeyboardControlledCounter;