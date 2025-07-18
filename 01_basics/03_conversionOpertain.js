let score = "33";
console.log(typeof score);
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let newScore = "33abc";
console.log(typeof newScore);
console.log(typeof newScore);
let newValueInNumber = Number(newScore);
console.log(typeof newValueInNumber);
console.log(newValueInNumber);

let newNewScore = null;
console.log(typeof newNewScore);
console.log(typeof newNewScore);
let newNewValueInNumber = Number(newNewScore);
console.log(typeof newNewValueInNumber);
console.log(newNewValueInNumber);

let newNewNewScore = true;
console.log(typeof newNewNewScore);
console.log(typeof newNewNewScore);
let newNewNewValueInNumber = Number(newNewNewScore);
console.log(typeof newNewNewValueInNumber);
console.log(newNewNewValueInNumber);

let newNewNewNewscore = 1; //0(int)->false(Boolean)
console.log(typeof newNewNewNewscore);
console.log(typeof newNewNewNewscore);
let newNewNewNewvalueInNumber = Boolean(newNewNewNewscore);
console.log(typeof newNewNewNewvalueInNumber);
console.log(newNewNewNewvalueInNumber);

let newNewNewNewNewscore = "33"; //""(empty_string)->false(Boolean)
console.log(typeof newNewNewNewNewscore);
console.log(typeof newNewNewNewNewscore);
let newNewNewNewNewvalueInNumber = Boolean(newNewNewNewNewscore);
console.log(typeof newNewNewNewNewvalueInNumber);
console.log(newNewNewNewNewvalueInNumber);
