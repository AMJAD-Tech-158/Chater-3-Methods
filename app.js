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

//slice methods in string
const str2 = "The quick brown fox jumps over the lazy dog.";
console.log(str2.slice(31));
console.log(str2.slice(4,19));
console.log(str2.slice(-4));
console.log(str2.slice(-9,-5));
//\ replace methods
let sss = "Amjad is Good Boy.";
console.log(sss.replace('Good','Bad'));
//repeate methods
let rrr = "AMJADG";
console.log(rrr.repeat(3));
//
let arr = ['Amjad','Asgar','Zamshed','Aamina'];
let arrMix = ['Amjad',322,true,4.4];
let marks = [12,22,32,213,3432];
let emp = [];