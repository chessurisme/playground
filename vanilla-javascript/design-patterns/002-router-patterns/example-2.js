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
