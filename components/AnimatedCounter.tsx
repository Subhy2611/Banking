'use client';

import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp 
        key={amount}  // Force re-render when amount changes
        start={0} 
        end={amount} 
        duration={1.5} 
        separator="," 
        decimals={2} 
        prefix="₹" 
      />
    </div>
  );
};

export default AnimatedCounter;
