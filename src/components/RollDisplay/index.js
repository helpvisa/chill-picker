import React from 'react';

function RollDisplay({ game, option, mod }) {
  return (
    <div>
      <h1 className="header-text">{game}</h1>
      <div className="text-margin">
        <p className="p-text">And this time, you should play <span className="p-highlight">{option}</span>{mod && <span className="p-mod"> {mod}</span>}!</p>
      </div>
    </div>
  )
}

export default RollDisplay;
