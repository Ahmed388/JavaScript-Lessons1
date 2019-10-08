//console.log("Did you change my file name?");
console.log("You made it to the console!");

function simpleOperators (numberA, numberB) {
  let adding = numberA + numberB;
  let subtraction = numberA - numberB;
  let mulitplying = numberA * numberB;
  let division = numberA / numberB;
  let modulus = numberA % numberB;
  console.log(numberA, numberB, 'adding', adding);
  console.log(numberA, numberB, 'subtraction', subtraction);
  console.log(numberA, numberB, 'mulitplying', mulitplying);
  console.log(numberA, numberB, 'division', division);
  console.log(numberA, numberB, 'modulus', modulus);
}

//skip count by _____ for _____ times starting at _____
function skipCpinting (interval, times, startingNumber) {
  for (let i = 1; i <= times; i++ ) {
    startingNumber = startingNumber + interval
    console.log(startingNumber);
  }
}

//Illustrate a WHILE Loop, skip counting
function howManyTimes (numberStart, numberEnd, skipCount) {
  while (numberStart < numberEnd) {
    numberStart += skipCount;
    console.log(numberStart);
  }
}

function looseEquality (firstOperand, secondOperand) {
  console.log(firstOperand == secondOperand);
}

function strictEquality (firstOperand, secondOperand) {
  console.log(firstOperand === secondOperand);
}

function customerType (points){
  return type = points > 100 ? 'gold' : 'silver' //points > 100 returns a Boolean; when true assigns string of gold, otherwise silver
}

let number = [4, 7, 13, 99, 0, 100, 5, 1, '1'];

//simpleOperators(number[0], number[1]);
//simpleOperators(number[2], number[3]);
//simpleOperators(number[4], number[5]);

//interval, times, startingNumber
//skipCpinting (number[0], number[6], number[1]);
//skipCpinting (number[5], number[3], number[2]);
//owManyTimes(number[0], number[5], number[1]);

//Loose vs. Strict Example, == symbol or === symbol returns Booleans
///Returns True, changes the second operand to a string, then compares values
//looseEquality (number[7], number[8]);
//strictEquality (number[7], number[8]);

console.log(customerType (number[3]));
