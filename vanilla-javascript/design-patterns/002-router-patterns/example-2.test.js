"use strict";

import { responder, fruits } from './example-2.js';

describe('Responder Function', () => {
  let originalFruits;

  beforeAll(() => {
    originalFruits = [...fruits];
  });

  afterAll(() => {
    fruits = [...originalFruits];
  });

  test('List Fruits Command', () => {
    const result = responder('list fruits');
    expect(result).toEqual(originalFruits.join('\n'));
  });

  test('Random Fruit Command', () => {
    const result = responder('random fruit');
    expect(fruits).toContain(result);
  });

  test('Unknown Command', () => {
    const result = responder('add banana');
    expect(result).toBe('Sorry, I don\'t understand "add banana".');
  });
});