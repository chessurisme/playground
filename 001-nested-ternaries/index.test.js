"use strict";

// Example 1
describe('the sum function that has a nested ternaries', () => {

  // Should correctly add two positive numbers and print the sum as a positive number
  it('should correctly add two positive numbers and print the sum as a positive number', () => {
    const augend = 5;
    const addend = 10;
    const consoleSpy = jest.spyOn(console, 'log');

    getSumv2(augend, addend);

    expect(consoleSpy).toHaveBeenCalledWith(`V2: The sum is 15 so it is a positive number.`);

    consoleSpy.mockRestore();
  });
})