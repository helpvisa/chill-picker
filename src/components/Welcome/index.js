import React from 'react';
// import our helper function
import { welcomeFunc } from '../../utils/welcomeText';

function Welcome() {
  return (
    <div>
      <h1 className="welcome">{welcomeFunc()}</h1>
    </div>
  )
}

export default Welcome;
