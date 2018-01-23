const rp = require('request-promise-native');

module.exports = async (context) => {
  const response = await rp('https://raw.githubusercontent.com/ServerlessByExample/geek-night/master/assets/dog-sounds.txt');

  const dogSounds = response.split('\n');
  const randomNumber = Math.floor(Math.random() * dogSounds.length);
  return {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dogSounds[randomNumber]),
  };
};
