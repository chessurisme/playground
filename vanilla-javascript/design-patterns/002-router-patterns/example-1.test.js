"use strict";

import { responder, hikes } from './example-1.js';

describe('Responder Function', () => {
  let originalHikes;

  beforeAll(() => {
    originalHikes = [...hikes];
  });

  afterAll(() => {
    hikes = [...originalHikes];
  });

  test('List Hikes Command', () => {
    const result = responder('list hikes');
    expect(result).toEqual(originalHikes.join('\n'));
  });

  test('Recommend Hike Command', () => {
    const result = responder('recommend hike');
    expect(result).toMatch(/^I recommend (Lost Lake|Canyon Creek Meadows)$/);
  });

  test('Add Hike Command', () => {
    const newHike = 'Mirror Lake';
    const result = responder(`add hike ${newHike}`);
    expect(result).toBe(`Added ${newHike}!`);
    expect(hikes).toContain(newHike);
  });

  test('Unknown Command', () => {
    const result = responder('where is Mirror Lake');
    expect(result).toBe(`Sorry, I don't understand "where is Mirror Lake".`);
  });
});
