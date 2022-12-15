// randomly selects a game from a json object
// import our json definitions
const gameArray = require('./json/games.json');

const pickGame = () => {
  // generate an index
  const index = Math.floor(Math.random() * gameArray.length);
  // pick and return a game
  return gameArray[index];
}

module.exports = { pickGame };
