//console.log("Did you change my file name?")


function simpleOperators (numberA, numberB){
  let adding = numberA + numberB;
  let subtract = numberA - numberB;
  let mutliply = numberA * numberB;
  let divide = numberA / numberB;
  let modulus = numberA % numberB;
  console.log(adding);
  console.log(subtract);
  console.log(mutliply);
  console.log(divide);
  console.log(modulus);
}

//Skipcount by ___ for ___ times starting at ___
function skipCounting (skipCount, times, startingNumber){
  let number = startingNumber - skipCount;
  for (let i=1; i<=times; i++){
    number += skipCount;
    console.log(number);
  }
}

//simpleComparison using WHILE and Skip Counting Algorithm
function howManyTimes (numberStart, numberEnd, skipCount) {
  while (numberStart < numberEnd) {
    console.log(numberStart += skipCount); // Used to be 2 lines ... console.log(numberStart); numberStart += skipCount;
    // What is happening with the single line compared to the double line of code?
  }
}

function LooseEquality (firstOperand, secondOperant) { //Changes the second operand to the typeof the first operand
  console.log(firstOperand == secondOperant);
}

function StrictEquality (firstOperand, secondOperant) {
  console.log(firstOperand === secondOperant);
}

function preferences (colour){
  let defaultColor = 'blue'; //Default colour chosen by developer
  return currentColor = colour || defaultColor;
}

function customerType (points){
  return type = points > 100 ? 'gold' : 'silver' //points > 100 returns a Boolean; when true assigns string of gold, otherwise silver
}

let number = [4, 7, 13, 99, 0, 100, 5, 1, '1']; //able to add any typeof to an array, index is automatic
