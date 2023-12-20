let hikes = [
  'Lost Lake',
  'Canyon Creek Meadows',
];

let randomHike = () =>
  hikes[Math.floor(Math.random() * hikes.length)];

let responder = (message) => {
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

console.log( responder('list hikes') );
console.log( responder('recommend hike') );
console.log( responder('add hike Mirror Lake') );
console.log( responder('where is Mirror Lake') );