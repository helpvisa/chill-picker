import React from 'react';

function Button({ setAppRolled }) {
  return (
    <div>
      <button className="button" onClick={() => setAppRolled(true)}>Let's Roll!</button>
    </div>
  )
}

export default Button;
