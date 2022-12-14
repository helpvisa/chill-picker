// randomly selects from a list of available welcome texts
// import our json file w/ all our welcome texts
const welcomeArray = require('./json/welcome.json');

const welcomeFunc = () => {
  // pick a random index from our array
  const index = Math.floor(Math.random() * welcomeArray.length);

  // return our welcome message
  return welcomeArray[index];
}

module.exports = { welcomeFunc };
