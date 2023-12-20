"use strict";

//*************/
//* EXAMPLE 1 */
//*************/

function getSumv1(augend, addend){
  let sum = augend + addend;
  
  // Instead of this
  if(sum > 0){
    console.log('V1: The sum is a positive number.')
  } else if(sum < 0){
    console.log('V1: The sum is a negative number.')
  } else {
    console.log('V1: The sum is zero.')
  }
}

function getSumv2(augend, addend){
  let sum = augend + addend;
  
  // Do this
  (sum > 0) ?
    console.log('V2: The sum is a positive number.')
: (sum < 0) ?
    console.log('V2: The sum is a negative number.') 
:  
    console.log('V2: The sum is zero.')
}

getSumv1(20, 4);
getSumv2(20, 4);
getSumv1(3, 14);
getSumv2(3, 14);