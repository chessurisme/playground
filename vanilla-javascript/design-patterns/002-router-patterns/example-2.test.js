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

  test('Recommend Fruit Command', () => {
    const result = responder('recommend fruit');
    expect(fruits).toContain(/^I recommend (apple | banana | orange | grape | strawberry | pineapple | mango | watermelon | cherry | blueberry | kiwi | coconut | avocado)$/);
  });

  test('Unknown Command', () => {
    const result = responder('add banana');
    expect(result).toBe('Sorry, I don\'t understand "add banana".');
  });
});