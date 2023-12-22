let hikes = [
  'Lost Lake',
  'Canyon Creek Meadows',
];

let randomHike = () =>
  hikes[Math.floor(Math.random() * hikes.length)];

let responses = [
  {
    command: /^list hikes$/,
    response: () => hikes.join('\n')
  },
  {
    command: /^recommend hike$/,
    response: () => `I recommend ${randomHike()}`
  },
  {
    command: /^add hike (.+)$/,
    response: ([hike]) => {
      hikes.push(hike);
      return `Added ${hike}!`;
    }
  },
  {
    command: /^(.*)$/,
    response: ([message]) =>
      `Sorry, I don't understand "${message}".`
  }
];

let responder = (message) => {
  let { command, response } = responses
    .find(({ command, response }) =>
      command.test(message)
    );
  return response(
    command.exec(message).slice(1)
  );
};

console.log(responder('list hikes'));
console.log(responder('recommend hike'));
console.log(responder('add hike Mirror Lake'));
console.log(responder('where is Mirror Lake'));