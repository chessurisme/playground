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

  // Should correctly add two negative numbers and print the sum as a negative number
  it('should correctly add two negative numbers and print the sum as a negative number', () => {
    const augend = -5;
    const addend = -10;
    const consoleSpy = jest.spyOn(console, 'log');

    getSumv2(augend, addend);

    expect(consoleSpy).toHaveBeenCalledWith(`V2: The sum is -15 so it is a negative number.`);

    consoleSpy.mockRestore();
  });

  // Should correctly add a positive and a negative number and print the sum
  it('should correctly add a positive and a negative number and print the sum', () => {
    const augend = 5;
    const addend = -10;
    const consoleSpy = jest.spyOn(console, 'log');

    getSumv2(augend, addend);

    expect(consoleSpy).toHaveBeenCalledWith(`V2: The sum is -5.`);

    consoleSpy.mockRestore();
  });
})