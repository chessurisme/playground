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