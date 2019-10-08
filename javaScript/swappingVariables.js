
//console.log("Did you change my file name?");
console.log("You made it to the console!");

let markMercer = {
first: "Mark",
last: "Mercer",
age: 13,
hairColour: "brown",
}
let mahmoudHennawi = {
first: "Mahmoud",
last: "Hennawi",
age: 16,
hairColour: "brown",
}
console.log(markMercer);
console.log(mahmoudHennawi);
let swap = markMercer.last;
markMercer.last = mahmoudHennawi.last;
mahmoudHennawi.last = swap;
console.log(markMercer);
console.log(mahmoudHennawi);
