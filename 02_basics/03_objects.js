// TWO WAYS OF DECLARING OBJECTS
// LETRAL NOTATION
// CONSTRUCTOR NOTATION

// WHEN AN OBJECT IS MADE BY CONSTRUCTOR THEN IS IS SINGLETON OBJECT

const mySym1 = Symbol("Key1");
const mySym2 = Symbol("Key2");

const person = {
  age: 21,
  name: "BHOOVESH",
  mySym1: "ACTUAL KEY", //THIS WILL NOT BE TREATED AS SUYMBOL KEY
  [mySym2]: "SYMBOL KEY", //THIS WILL BE TREATED AS SYMBOL KEY(SQUARE )
  "Siblings Name": "VISHVESH",
  maritalStatus: "SINGLE",
  location: "INDIA",
  isLoggedIn: false,
};

// console.log(person.name); //THIS SYNTEX IS NOT PREFERRABLE BCZ OF ONE EXCEPTIONAL CASE(SPACE IN KEY) WHICH IS GIVEN IN THE BELOW LINE
// console.log(person["Siblings Name"]); //WHEN WE HAVE SPACE IN THE KEY THEN WE HAVE TO USE THIS SYNTAX
// console.log(person["name"]); //JO BHI KEY DENGE USKO AS A STRING DENA PDEGA

// TO LOCK THE VALUES IN JAVASCRIPT MTLB YEH KI IS LINE OF CODE KE BAS AAP OBJECT PR KUCH BI OPERATION PERFORM KRO KUCH CHANGE NAHI HOGA OBJECT MEIN
// console.log(person["Siblings Name"]);
// person["Siblings Name"] = "KANHA"
// console.log(person["Siblings Name"]);
// Object.freeze(person);
// person["Siblings Name"] = "VISHVESH"
// console.log(person["Siblings Name"]);

// console.log(person .mySym1);
// console.log(person.mySym2);

// FUNCTONS IN OBJECTS

person.greet = function () {
  console.log(`HELLO MY NAME IS ${this.name}`); //BACKTICKS JAB BHU LAGATE IA USKO HUMLOG STRING INTERPOLATION BOLTE HAI
};

person.greet();
