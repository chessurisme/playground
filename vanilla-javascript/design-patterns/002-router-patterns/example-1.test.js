import { responder } from "./example-1.js";

let randomHike = () =>
  hikes[Math.floor(Math.random() * hikes.length)];

describe('responder', () => {
  // Returns the correct response for a valid 'list hikes' command
  it('should return the correct response for a valid "list hikes" command', () => {
    const hikes = [
      'Lost Lake',
      'Canyon Creek Meadows',
      'Mirror Lake'
    ];

    const message = 'list hikes';
    const expectedResponse = hikes.join('\n');
    const actualResponse = responder(message);
    expect(actualResponse).toEqual(expectedResponse);
  });

  // Returns the correct response for a valid 'recommend hike' command
  it('should return the correct response for a valid "recommend hike" command', () => {
    const hikes = [
      'Lost Lake',
      'Canyon Creek Meadows',
    ];

    const message = 'recommend hike';
    const expectedResponse = `I recommend ${randomHike()}`;
    const actualResponse = responder(message);
    expect(actualResponse).toEqual(expectedResponse);
  });

  // Adds a new hike to the list and returns the correct response for a valid 'add hike' command
  it('should add a new hike to the list and return the correct response for a valid "add hike" command', () => {
    const hikes = [];
    const hike = 'New Hike';
    const message = `add hike ${hike}`;
    const expectedResponse = `Added ${hike}!`;
    const actualResponse = responder(message);
    expect(actualResponse).toEqual(expectedResponse);
    expect(hikes).toContain(hike);
  });

  // Returns an error message if 'hikes' array is empty and 'list hikes' command is received
  it('should return an error message if "hikes" array is empty and "list hikes" command is received', () => {
    const message = 'list hikes';
    const expectedResponse = 'Sorry, I don\'t understand "list hikes".';
    const actualResponse = responder(message);
    expect(actualResponse).toEqual(expectedResponse);
  });

  // Returns an error message if 'hikes' array is empty and 'recommend hike' command is received
  it('should return an error message if "hikes" array is empty and "recommend hike" command is received', () => {
    hikes = [];
    const message = 'recommend hike';
    const expectedResponse = 'Sorry, I don\'t understand "recommend hike".';
    const actualResponse = responder(message);
    expect(actualResponse).toEqual(expectedResponse);
  });

  // Returns an error message if 'add hike' command is received without a hike name
  it('should return an error message if "add hike" command is received without a hike name', () => {
    const message = 'add hike';
    const expectedResponse = 'Sorry, I don\'t understand "add hike".';
    const actualResponse = responder(message);
    expect(actualResponse).toEqual(expectedResponse);
  });
});