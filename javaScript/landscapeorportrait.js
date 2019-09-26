//console.log("Did you change my file name?");
//console.log("You made it to the console!");

let stop = false; //Not a number test variable

function testNaN (number) {
  console.log(stop);
  if ( isNaN (number) ) {
    stop = true;
    return "Type a real number"
  } else {
    return "Input Validated"
  }
}

function main() {
  //console.log("It works");

  let firstNumber;
  let secondNumber;
  let text;

  //Get the Width-value from id=textfield1
  firstNumber = document.getElementByID("textfield1").value;

  //testNaN (firstNumber);
  document.getElementByID("validityTest1").innerHTML = alert ( testNaN (firstNumber));
  document.getElementByID("validityTest1").innerHTML = testNaN (firstNumber);

  //Get the Height-value from id=textfield2
  secondNumber = document.getElementByID("textfield2").value;
  //testNaN (secondNumber);
  document.getElementByID("validityTest2").innerHTML = alert ( testNaN (secondNumber));
  document.getElementByID("validityTest2").innerHTML = testNaN (secondNumber);
}
