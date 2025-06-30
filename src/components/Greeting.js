import React from 'react';

const Greeting = ({ name = 'World' }) => {
  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="greeting">
      <h2>{getTimeBasedGreeting()}, {name}!</h2>
      <p>Welcome to our React application.</p>
    </div>
  );
};

export default Greeting;