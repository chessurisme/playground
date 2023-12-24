let fruits = [
  'apple', 
  'banana', 
  'orange',
  'grape',
  'strawberry',
  'pineapple',
  'mango',
  'watermelon',
  'cherry',
  'blueberry',
  'kiwi',
  'coconut',
  'avocado'
];

let randomFruit = () =>
  fruits[Math.floor(Math.random() * fruits.length)];

let responses = [
  {
    command: /^list fruits$/,
    response: () => fruits.join('\n')
  },
  {
    command: /^recommend fruit$/,
    response: () => `I recommend ${randomFruit()}`
  },
  {
    command: /^add fruit (.+)$/,
    response: ([fruit]) => {
      fruits.push(fruit);
      return `Added ${fruit}!`;
    }
  },
  {
    command: /^remove fruit (.+)$/,
    response: ([fruit]) => {
      let index = fruits.indexOf(fruit);
      return index > -1 ? 
        (fruits.splice(index, 1), `Removed ${fruit}!`) 
        : `Fruit ${fruit} not found.`;
    }
  },
  {
    command: /^(.*)/,
    response: ([message]) =>
      `Sorry, I don't understand "${message}".`
  }
]

let responder = (message) => {
  let { command, response } = responses
    .find(({ command, response }) =>
      command.test(message)
    );
  return response(
    command.exec(message).slice(1)
  );
};

export { responder, fruits };

console.log(responder('list fruits'));
console.log(responder('recommend fruit'));
console.log(responder('add fruit papaya'));
console.log(responder('remove fruit papaya'));
console.log(responder('remove fruit papaya'));
console.log(responder('what is your favorite?'));