"use strict";

import { responderv3 } from "./example-1.js";

let hikes = [
  'Lost Lake',
  'Canyon Creek Meadows',
];

let randomHike = () =>
  hikes[Math.floor(Math.random() * hikes.length)];

describe('router pattern for example 1', () => {
  // Returns the expected response for the 'list hikes' command.
  it('should return the expected response for the "list hikes" command', () => {
    const message = 'list hikes';
    const expectedResponse = hikes.join('\n');
    const actualResponse = responderv3(message);
    expect(actualResponse).toEqual(expectedResponse);
  });

  // Returns the expected response for the 'recommend hike' command.
  it('should return the expected response for the "recommend hike" command', () => {
    const message = 'recommend hike';
    const expectedResponse = `I recommend ${randomHike()}`;
    const actualResponse = responderv3(message);
    expect(actualResponse).toEqual(expectedResponse);
  });

  // Returns the expected response for the 'add hike' command when given a valid message.
  it('should return the expected response for the "add hike" command when given a valid message', () => {
    const message = 'add hike Mount Everest';
    const hike = 'Mount Everest';
    const expectedResponse = `Added ${hike}!`;
    const actualResponse = responderv3(message);
    expect(actualResponse).toEqual(expectedResponse);
    expect(hikes).toContain(hike);
  });

  // Returns the default response for a message that does not match any command.
  it('should return the default response for a message that does not match any command', () => {
    const message = 'invalid command';
    const expectedResponse = "Sorry, I don't understand that.";
    const actualResponse = responderv3(message);
    expect(actualResponse).toEqual(expectedResponse);
  });
});
