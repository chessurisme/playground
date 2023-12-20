let hikes = [
  'Lost Lake',
  'Canyon Creek Meadows',
];

let randomHike = () => hikes[Math.floor(Math.random() * hikes.length)];
let responder = (message) => {
    let [command, response] = Object.entries(responses)
      .find(([command, response]) =>
        message.startsWith(command)
      );
    return response(message);
  };

  let responses = [
    {
      command: 'list hikes',
      response: () => hikes.join('\n')
    },
    {
      command: 'recommend hike',
      response: () => `I recommend ${randomHike()}`
    },
    {
      command: 'add hike',
      response: (message) => {
        let hike = message.slice(9);
        hikes.push(hike);
        return `Added ${hike}!`;
      }
    },
    {
      command: '',
      response: () =>
        "Sorry, I don't understand that."
    }
  ];


export { responder }