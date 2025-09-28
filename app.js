// 1.) Trim Methods
const greeting = " Hello Dear from IGNOU      ";
const trmiMethods = greeting.trim();
console.log(trmiMethods);
//This methods are both side in remove empty spaces.
const trimEndMethods = greeting.trim();
console.log(trimEndMethods);
//
const trimStartMethods = greeting.trimStart();
console.log(greeting.trimStart());
//NO EXERCISE
//
let str = "ILoveCoding";
console.log(str.indexOf("ing"));
//indexof() === string first occurence
const paragraph = "I think Ruth's dog is cutter than your dog!";
const searchTerm = "dog";
const indexofFirst = paragraph.indexOf(searchTerm);
console.log(`The first index of : "${searchTerm}" is ${indexofFirst}.`);

const indexofSecond = paragraph.indexOf(searchTerm , indexofFirst+1);
console.log(`The indexof second : "${searchTerm}" is ${indexofSecond}`);

//
