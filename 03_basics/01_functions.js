function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addTwoNumbers(9, 90));
console.log(addTwoNumbers());

const greet = function (name) {
  return ` HELLO ${name} GOOD EVENING`;
};

let s = greet("BHOOVESH");
console.log(s);

// KAI PROJECTS MEIN JESE KOI E-COMMERCE WEBSITE BANAI MAINE TO USME MUJHE BOHOT SARI VALUES PASS KRNI HOGI AND IT'LL BE TAKEN IN OBJECT SO FOR THIS WE TAKE REST OPERATOR(DENOTED SAME AS SPREAD OPERATOR) IN USE

//REST OPERATOR KA KAM -> FUNCTION KE ANDER MULTIPLE VALUES KESE PASS HOIT HAI.
function calcItemsPrice(...items) {
  return items;
}

console.log(calcItemsPrice(6783, 4, 3, 3, 2, 2, 2));

// OBJECTS CAN ALSO ACT AS A PARAMETER IN THE FUNCTION

const mee = {
  name: "BHOOVESH",
  age: "21",
};

function func1(myObject) {
  console.log(
    `${myObject.name} is my name and i am ${myObject.age} years old.`
  );
}
function func2(myObject) {
  console.log(
    `${myObject.nam} is my name and i am ${myObject.ages} years old.`
  );
}
func1(mee); //YAHA PR OBJECT BILKUL SAHI DECLARED HAI VARIABLES KE NAM KE SATH.
func2(mee); //YAHA PR OBJECT GALAT TAREEKE DECLARED HAI VARIABLES KE NAM GALAT DECLARED HAI.
