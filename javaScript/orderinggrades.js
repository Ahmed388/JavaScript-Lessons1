//console.log("Did you change my file name?");
//console.log("You made it to the console!");

let stop = false; //NAN Boolean Memory

function testNaN (number) {
  //console.log(stop);
  if ( isNaN (number) ) {
    stop = true;
    return "Type a real number"
  } else {
    return "Input Validated"
  }
}

function orderingThree (first, second, third) { //Notice these parameters are local and do not mix with "number" variable
  //Memory variable
  let memory1;

  //If numbers out of order
  //Use desending sequence to illustrate while loop ... if statements fail without WHILE since double switch required
  //For example: 70, 60, 50
  while (first > second || second > third) {
    if (first > second) {
      memory1 = second;
      second = first;
      first = memory1;
    }
    if (second > third) {
      memory1 = third;
      third = second;
      second = memory1;
    }
  }

  //Final Check: this checks if numbers are in order
  //Also checks if numbers are equal and catches if something is wrong
  if (first <= second) {
    if (second <= third) {
      return first + ", " + second + ", " + third;
    }
  } else {
    return "Check program for errors"
  }
}

function checkboxes() {
  let checkbox1, checkbox2, checkbox3;
  checkbox1 = document.getElementById('Checkbox1').checked;
  checkbox2 = document.getElementById('Checkbox2').checked;
  checkbox3 = document.getElementById('Checkbox3').checked;
  if ( checkbox1 == true ) {
    document.getElementById('checkbox1_answer').innerHTML = "False, 50% is less than 60%";
  } else {
    document.getElementById('checkbox1_answer').innerHTML = "Answer?";
  }
  if ( checkbox2 == true ) {
    document.getElementById('checkbox2_answer').innerHTML = "False, 70% > 65%";
  } else {
    document.getElementById('checkbox2_answer').innerHTML = "Answer?";
  }
  if ( checkbox3 == true ) {
    document.getElementById('checkbox3_answer').innerHTML = "False, these numbers are the same";
  } else {
    document.getElementById('checkbox3_answer').innerHTML = "Answer?";
  }
}

// This coding illustrates the advanced method
function main() {
  //console.log("It works");

  let firstNumber, secondNumber, thirdNumber;

  //Get the Width-value from id=textfield1
  firstNumber = document.getElementById('textfield1').value;
  //testNaN (firstNumber);
  document.getElementById('validityTest1').innerHTML = alert ( testNaN (firstNumber));
  document.getElementById('validityTest1').innerHTML = testNaN (firstNumber);

  //Get the Height-value from id=textfield2
  secondNumber = document.getElementById('textfield2').value;
  //testNaN (secondNumber);
  document.getElementById('validityTest2').innerHTML = alert ( testNaN (secondNumber));
  document.getElementById('validityTest2').innerHTML = testNaN (secondNumber);

  //Get the Height-value from id=textfield2
  thirdNumber = document.getElementById('textfield3').value;
  //testNaN (secondNumber);
  document.getElementById('validityTest3').innerHTML = alert ( testNaN (thirdNumber));
  document.getElementById('validityTest3').innerHTML = testNaN (thirdNumber);


  //Illustrates one example of character escapes
  console.log("In memory, \n the first number is " + firstNumber + " and \n the second number is " + secondNumber + " and \n the second number is " + thirdNumber);

  //Final Output to inner HTML & Console

  if (stop == true) {
    document.getElementById('answer').innerHTML = "Restart the example, a width or height needs to be a number."
  } else {
    console.log("The smallest to largest order is ", orderingThree (firstNumber, secondNumber, thirdNumber) );
    document.getElementById('answer').innerHTML = "The numbers " + firstNumber + ", " + secondNumber + ", " + thirdNumber + " in order from smallest to largets is ... \n" +
    orderingThree(firstNumber, secondNumber, thirdNumber);
  }
}
