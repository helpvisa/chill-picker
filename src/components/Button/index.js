import React from 'react';
import rollSoundUrl from '../../assets/audio/diceroll.ogg';
import swooshSoundUrl from '../../assets/audio/swoosh.ogg';

function Button({ showWelcome, setAppRolled, appRolled }) {
  var rollSound = new Audio(rollSoundUrl);
  var swooshSound = new Audio(swooshSoundUrl);

  function clickHandler() {
    setAppRolled(!appRolled);
    if (showWelcome) {
      rollSound.play();
    } else {
      swooshSound.play();
    }
  }

  return (
    <div>
      <button className="button" onClick={clickHandler}>{showWelcome ? "Let's Roll!" : "Again?"}</button>
    </div>
  )
}

export default Button;
