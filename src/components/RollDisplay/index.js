import React from 'react';

function RollDisplay({ game, option }) {
  return (
    <div>
      <h1 className="header-text">{game}</h1>
      <p className="p-text">And this time, you should play <span className="p-highlight">{option}</span>!</p>
    </div>
  )
}

export default RollDisplay;
