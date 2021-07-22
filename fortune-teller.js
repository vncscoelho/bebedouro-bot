const verbs = require('./data/verbs.json');
const Database = require("@replit/database");
const db = new Database();

const generateRandomNumbers = () => {
  return [...Array(4)].map(() => Math.floor(Math.random() * 1498))
}

const checkGeneratedNumbers = (id) => {
  return db.get(id)
    .then(value => { 
      const today = new Date().toLocaleDateString();
      const numbers = generateRandomNumbers();
      if (!value || today !== value.date) {
        db.set(id, {
          numbers: numbers,
          date: new Date().toLocaleDateString()
        });
        return numbers;
      } else {
        return value.numbers;
      }
    });
}


const tellFortune = async (message) => {
  const { content, channel, author } = message;
  const numbers = await checkGeneratedNumbers(author.id);
  const fortune = name => `
    **Oi ${name}, sua sorte do dia é:**\n\nCuidado ao ${verbs[numbers[0]]} no trabalho.\nNa vida amorosa, o importante hoje é ${verbs[numbers[1]]}.\nTente ${verbs[numbers[2]]} aquela pessoa que só te faz ${verbs[numbers[3]]}.
  `;
  channel.send(fortune(author));
  return fortune(author.username);
}

module.exports = { tellFortune }
