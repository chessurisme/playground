"use strict";

const letters = []; // this is our stack

const word = "tattarrattat";

let reverseWord = "";

// push letters of word into stack
for(let index = 0; index < word.length; index++){
  letters.push(word[index])
}

// pop off the stack in reverse order
for(let index = 0; index < word.length; index++){
  reverseWord += letters.pop();
}

reverseWord === word ? console.log(`${word} is a palindrome.`) : console.log(`${word} is not a palindrome.`)