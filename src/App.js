// import React, useState, useEffect
import React, { useState, useEffect } from 'react';
// import our css
import './index.css';
// import our components
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Button from './components/Button';
import RollDisplay from './components/RollDisplay';
import Image from './components/Image';
// import our helper functions
import { welcomeFunc } from './utils/welcomeText';
import { pickGame, pickOption, pickMod } from './utils/gamePicker';
import { pickImage } from './utils/imagePicker';

// render main page
function App() {
  // define our useStates
  const [welcomeText, setWelcomeText] = useState(null); // generate our welcome text
  const [game, setGame] = useState(null); // generate our game
  const [option, setOption] = useState(null); // generate our game option
  const [mod, setMod] = useState(null); // generate our game mod
  const [img, setImg] = useState(null); // set a reference to our image

  const [appRolled, setAppRolled] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  // define our useEffect callbacks
  const runWelcome = () => {
    setWelcomeText(welcomeFunc());
  }
  const runGame = () => {
    setGame(pickGame());
  }
  const runOption = () => {
    setOption(pickOption(game));
  }
  const runMod = () => {
    // roll a chance to add a mod
    const chance = Math.random() * 100;
    if (chance > 50) {
      setMod(pickMod(game));
    } else
    {
      setMod(null);
    }
  }
  const runImage = () => {
    if (game) {
      setImg(pickImage(game.game, option));
    }
  }

  // manage our useEffects
  useEffect(runWelcome, [showWelcome]);
  useEffect(runGame, [showWelcome]);
  useEffect(runOption, [game]);
  useEffect(runMod, [option]);
  useEffect(runImage, [option]);


  return (
    <div className="app-container">
      <main>
        {/* determine if app has rolled, and welcome screen should display */}
        {showWelcome ?
          <div
            className={!appRolled ? 'main-container transitionIn' : 'main-container transitionOut'}
            onAnimationEnd={() => { if (appRolled) setShowWelcome(false) } }
          >
            <Welcome welcomeText={welcomeText}></Welcome>
            <Button showWelcome={showWelcome} setAppRolled={setAppRolled} appRolled={appRolled}></Button>
          </div>
          :
          <div
            className={appRolled ? 'main-container transitionInBottom' : 'main-container transitionOutTop'}
            onAnimationEnd={() => { if (!appRolled) setShowWelcome(true) } }
          >
            <RollDisplay game={game.game} option={option} mod={mod}></RollDisplay>
            <Image src={img}></Image>
            <Button showWelcome={showWelcome} setAppRolled={setAppRolled} appRolled={appRolled}></Button>
          </div>
        }
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
