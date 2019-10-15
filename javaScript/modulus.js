//console.log("Did you change my file name?")

for (var x=0; x<=20; x++) {  //The numbers we want to measure
        if (x === 0) {  //x starts from zero
                console.log(x +  " is even"); // Numebr is even, eg( 2/4/6/8)
        }
        else if (x % 2 === 0) {
                console.log(x + " is even"); //number is even, eg (2/4/8)
        }
        else {
                console.log(x + " is odd"); //Number is odd, very odd? 1/3/5/7, me when I get 99% on a test
        }
}
