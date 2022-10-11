// message object
const collectiveMessage = {
  celebrities: ['Lionel Messi', 'Cristiano Ronaldo', 'Keanu Reeves', 'Johnny Depp', 'your future wife', 'Rihanna', 'your future husband'],
  cities: ['London', 'Moscow', 'Kuala Lumpur', 'Singapore', 'Bristol', 'Doha', 'Dubai', 'New York', 'Madrid', 'Paris'],
  programmingLanguage: ['Python', 'Java', 'C', 'C#', 'C++', 'JavaScript', 'SQL', 'Go', 'React Native', 'Swift', 'Php'],
  emote: ['Front-End developer ⊂(◉‿◉)つ', 'Full-Stack developer ᕦ(ò_óˇ)ᕤ', 'Back-End developer ¿ⓧ_ⓧﮌ']
};

// generate number from 0 to num - 1
const generateRandom = num => {
  return Math.floor(Math.random() * num);
};

// console.log("test");

// array to store messages
let mixedMessage = [];

// for in loop to iterate messageObject
for (element in collectiveMessage) {
  elementLength = collectiveMessage[element].length;
  randomIndex = generateRandom(elementLength);

  console.log(randomIndex);
  switch (element) {
    case 'celebrities':
      mixedMessage.push(`You are going to meet ${collectiveMessage[element][randomIndex]}!`);
      break;
    case 'cities':
      mixedMessage.push(`You next destination will be ${collectiveMessage[element][randomIndex]}!`);
      break;
    case 'programmingLanguage':
      mixedMessage.push(`You are going to be a master in ${collectiveMessage[element][randomIndex]}!`);
      break;
    case 'emote':
      mixedMessage.push(`You are going to be a successful ${collectiveMessage[element][randomIndex]}!`);
  }
}
// console.log(mixedMessage);

const formatMessage = (arr) => {
  const message = arr.join("\n");
  console.log(message);
};

formatMessage(mixedMessage);
