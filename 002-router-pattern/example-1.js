let hikes = [
  'Lost Lake',
  'Canyon Creek Meadows',
];

let randomHike = () =>
  hikes[Math.floor(Math.random() * hikes.length)];

// if-else statements
let responderv1 = (message) => {
  if (message === 'list hikes') {
    return hikes.join('\n');
  } else if (message === 'recommend hike') {
    return `I recommend ${randomHike()}`;
  } else if (message.startsWith('add hike')) {
    let hike = message.slice(9);
    hikes.push(hike);
    return `Added ${hike}!`;
  }

  return "Sorry, I don't understand that.";
};

console.log('If-else Statement');
console.log( responderv1('list hikes') );
console.log( responderv1('recommend hike') );
console.log( responderv1('add hike Mirror Lake') );
console.log( responderv1('where is Mirror Lake') );

// nested ternaries
let responses = {
  'list hikes': () =>
    hikes.join('\n'),
  'recommend hike': () =>
    `I recommend ${randomHike()}`,
  'add hike': (message) => {
    let hike = message.slice(9);
    hikes.push(hike);
    return `Added ${hike}!`;
  },
};

let responderv2 = (message) => {
  if (message === 'list hikes') {
    return responses['list hikes']();
  } else if (message === 'recommend hike') {
    return responses['recommend hike']();
  } else if (message.startsWith('add hike')) {
    return responses['add hike'](message);
  }

  return "Sorry, I don't understand that.";
};

console.log('Nested Ternaries');
console.log( responderv2('list hikes') );
console.log( responderv2('recommend hike') );
console.log( responderv2('add hike Mirror Lake') );
console.log( responderv2('where is Mirror Lake') );

// router pattern
  // ? Collapse the cascading if-else statements.
    // let responderv3 = (message) => {
    //   let response = responses[message];
    //   if (response) {
    //     return response(message);
    //   }

    //   return "Sorry, I don't understand that.";
    // };

  // ? Unfortunately, we broke the “add hike” command that expects the message to include the name of the hike after the command, so our simple property lookup isn’t flexible enough.
    // let fallback = () =>
    //   "Sorry, I don't understand that.";

    // let responderv3 = (message) => {
    //   let response = responses[message] || fallback;
    //   return response(message);
    // };

  // ? To fix this, we’ll convert responses to a list and use the `find` Array method to see which command the message starts with.
let responderv3 = (message) => {
    let [command, response] = Object.entries(responsesv3)
      .find(([command, response]) =>
        message.startsWith(command)
      );
    return response(message);
  };

  let responsesv3 = [
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


export { responderv3 } ;