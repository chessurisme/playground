"use strict";

import { responder } from "./example-1.js";

let hikes = [
  'Lost Lake',
  'Canyon Creek Meadows',
];

let randomHike = () => hikes[Math.floor(Math.random() * hikes.length)];

describe('responder', () => {
  // Returns the correct response for a valid 'list hikes' command.
  it('should return the correct response for a valid \'list hikes\' command', () => {
    const message = 'list hikes';
    const expectedResponse = hikes.join('\n');
    const actualResponse = responder(message);
    expect(actualResponse).toEqual(expectedResponse);
  });

  // Returns the correct response for a valid 'recommend hike' command.
  it('should return the correct response for a valid \'recommend hike\' command', () => {
    const message = 'recommend hike';
    const expectedResponse = `I recommend ${randomHike()}`;
    const actualResponse = responder(message);
    expect(actualResponse).toEqual(expectedResponse);
  });

  // Returns the correct response for a valid 'add hike' command.
  it('should return the correct response for a valid \'add hike\' command', () => {
    const message = 'add hike Mount Everest';
    const hike = 'Mount Everest';
    hikes.push(hike);
    const expectedResponse = `Added ${hike}!`;
    const actualResponse = responder(message);
    expect(actualResponse).toEqual(expectedResponse);
  });

  // Returns the default response for a command that does not match any known commands.
  it('should return the default response for a command that does not match any known commands', () => {
    const message = 'unknown command';
    const expectedResponse = "Sorry, I don't understand that.";
    const actualResponse = responder(message);
    expect(actualResponse).toEqual(expectedResponse);
  });

  // Returns an error if the 'add hike' command is missing the hike name.
  it('should return an error if the \'add hike\' command is missing the hike name', () => {
    const message = 'add hike';
    const expectedResponse = 'Error: Missing hike name.';
    const actualResponse = responder(message);
    expect(actualResponse).toEqual(expectedResponse);
  });

  // Returns an error if the 'add hike' command has an empty hike name.
  it('should return an error if the \'add hike\' command has an empty hike name', () => {
    const message = 'add hike ';
    const expectedResponse = 'Error: Empty hike name.';
    const actualResponse = responder(message);
    expect(actualResponse).toEqual(expectedResponse);
  });
});
