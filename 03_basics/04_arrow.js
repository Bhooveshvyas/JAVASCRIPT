const user = {
  username: "HITESH",
  price: 900,
  welcomeMessage: function () {
    console.log(`${this.username},WELCOME TO MY HOUSE.`);
    console.log(this); //YE WALA THIS KEYWORD CURRENT CONTEXT i.e. CURRENT OBJECT KO PURA PURA PRINT KREGA
  },
};

// user.welcomeMessage();
// user.username = "BHOOVESH";
// user.welcomeMessage();
// // console.log(this);//YE THIS TO CURRENT CONTEXT KO REFER KREGA JOKI YE APNE MAIN CODE MEIN HAI HI NAHI KOI CURRENT CONTEXT/

// INTERVIEW WURSTION =>> BROWSER KE ANDER GLOBAL OBJECT -> ANS  => WINDOW
// ++++++++++++++++++++++++++++++++++++THIS KEYWORD ENDED++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++ARROW FUNCTION START++++++++++++++++++++++++++++++++++++++++++++++++++++

// // DECLARING NORMAL FUCTION
// function chai() {
//   let username = "HITESH";
//   console.log(this.username);
// }
// chai()
// DECLARING NORMAL FUCTION -> SAME THING OCCURED HERE
// const chai = function () {
//   let username = "HITESH";
//   console.log(this.username);
// };
// chai();

// ARROW FUCTIONS
// const chai = () => {
//   let username = "HITESH";
//   console.log(this.username);
// };
// AB YAHA PR BI SAME HI RESULT ARHA HAI -> MAIN CHEEZ THIS KEYWORD LAGTA OBJECT MEIN HAI NAKI FUNCTIONS MEIN
// chai();

// TYPES TO DECLARE ARROW FUNCTIONS ->
// FIRST->STORING IT INTO A VARIABLE
// const addTwo = (a,b) => {
//     return a+b;
// }
// console.log(addTwo(8,7));

// TYPE SECOND -> ISME AGR APKA RETRUN STATEMENT AGR ONE LINER HAI TO APKO CURLY BRACES LAGANE KI AND RETURN KEYWORD LIKHNE KI KOI ZRURT NAHI HAI -> AB ISME BHI FURTHER 3 TYPES HAI => 1-> AGR AAP OBJECT NAHI RETURN KR RHE HO TO PUTTING PARANTHESIS IS NOT MANDATORY,2->AGR AAP OBJECT RETURN KR RHE HO TO PARANTHESIS IS MANDATORY.
// SECOND->FIRST=>
// const addTwo = (a,b) => (a+b)
// console.log(addTwo(9,4));
// const addTwo = (a,b) => a+b
// console.log(addTwo(9,4));

// SECOND -> SECOND => REUTRNING AN OBJECT
// const addTwo = (a, b) => ({ sum: a + b }); //AB AGR PARANTHESIS NAHI LAGAYE TO JO OBJECT KE CURLY BRACES HAI WO FUNCTION KE CURLY BRACES CONSIDER HOJAYENGE ISLIYE -> MUST -> (NO RETURN STATEMENT) + ('()' PARANTHESIS)
// console.log(addTwo(9, 4));
