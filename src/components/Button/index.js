import React from 'react';

function Button({ showWelcome, setAppRolled, appRolled }) {
  function clickHandler() {
    setAppRolled(!appRolled);
  }

  return (
    <div>
      <button className="button" onClick={clickHandler}>{showWelcome ? "Let's Roll!" : "Again?"}</button>
    </div>
  )
}

export default Button;
