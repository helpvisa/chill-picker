// randomly selects a game from a json object
// import our json definitions
const gameArray = require('./json/games.json');

const pickGame = () => {
  // generate an index
  const index = Math.floor(Math.random() * gameArray.length);
  // pick and return a game
  return gameArray[index];
}

const pickOption = (game) => {
  if (!game) {
    return;
  }
  // generate an index
  const index = Math.floor(Math.random() * game.options.length);
  // pick and return an option
  return game.options[index];
}

const pickMod = (game, option) => {
  if (!game) {
    return;
  }
  if (game.game === "Switch" && option !== "Donkey Kong Country Returns") {
    return;
  }
  // generate an index
  const index = Math.floor(Math.random() * game.mod.length);
  // pick and return an option
  return game.mod[index];
}

module.exports = { pickGame, pickOption, pickMod };
