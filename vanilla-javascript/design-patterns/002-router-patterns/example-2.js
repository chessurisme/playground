let fruits = [
  'apple', 
  'banana', 
  'orange',
  'grape',
  'strawberry',
  'pineapple',
  'mango',
  'watermelon',
  'cherry',
  'blueberry',
  'kiwi',
  'coconut',
  'avocado'
];

let randomFruit = () =>
  fruits[Math.floor(Math.random() * fruits.length)];