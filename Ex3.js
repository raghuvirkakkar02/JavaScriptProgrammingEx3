/*
JavaScript Programming Ex3
Dates
Raghuvir Kakkar 
*/

let birthDate = new Date(2002,5,2);
console.log(birthDate);

console.log("What is the date 1 billion seconds from my birthday and how old am I or will be that year")
let seconds = 1000000000;
let days = seconds.getDay();
let nextDate = birthDate + days;
let newDate = new Date(birthDate);
let newDate = setDate(nextDate);
console.log(newDate);
let age = birthDate.getFullYear() - newDate.getFullYear();
console.log(`My age of year ${newDate.getFullYear()} is or will be ${age}`);
console.log(`Millisecond:${now.getMilliseconds()}`);


