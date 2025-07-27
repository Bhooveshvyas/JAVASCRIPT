//PART-ONE
console.log(a);
greet();
function greet() {
  console.log("GM");
}
var a = 9;

//PART-TWO
console.log(b); //YAHA PR UNDEFINED NAHI AYEGA YAHA PR SIDHA SIDHA WO ERROR DEGA KI "CAN NOT ACCES B WITHOUT INITIALIZATION"
greet();
function greet() {
  console.log("GM");
}
let b = 9; //SAME THING GOES FOR CONST

// PART-THREE

console.log(func()); //YAHA PR BHI FUNCTIO NEK VARIABLE KE ANDER DECLARED HAI ISLIYE FUNC AS A VARIABLE TREAT HOGA
const func = function () {
  console.log("GN");
};
