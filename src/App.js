// import React, useState, useEffect
import React, { useState, useEffect } from 'react';
// import our css
import './index.css';
// import our components
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Button from './components/Button';
// import our helper functions
import { welcomeFunc } from './utils/welcomeText';
import { pickGame } from './utils/gamePicker';

// render main page
function App() {
  // define our useStates
  const [welcomeText, setWelcomeText] = useState(welcomeFunc()); // generate our welcome text
  const [appRolled, setAppRolled] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="app-container">
      <main>
        {/* determine if app has rolled, and welcome screen should display */}
        {showWelcome ?
          <div
            className={!appRolled ? 'main-container transitionIn' : 'main-container transitionOut'}
            onAnimationEnd={() => {if (appRolled) setShowWelcome(false)}}
          >
            <Welcome welcomeText={welcomeText}></Welcome>
            <Button setAppRolled={setAppRolled}></Button>
          </div>
          :
          <div className="main-container transitionInBottom">
            <Welcome welcomeText={welcomeText}></Welcome>
          </div>
        }
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
