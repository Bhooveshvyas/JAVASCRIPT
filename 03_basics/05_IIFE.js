/*
IIFE->IMMEDIATLY INVOKED FUNCTION EXPRESSION -> JESE HI FUNCTION LIKHA USKE JUST BAD MTLB TURANT HI USKO EECUTE KRWAO

INTERVIEW QUESTION 🔴🔴🔴 -> WHAT IS IIFE -> GLOBAL SCOPE KE POLLUTION KE PROBLEM HOTI HAI + INSTANT CALLING OF FUNCTION

GLOBAL SCOPE KA POLLUTION MTLB -> {VARIABLE HOISTING,VARIABLE COLLISION -> DECLARATION OF SAME NAME VARIABLES IN DIFF FUNCTION(BOTH OF THEM WILL OVERRIDE EACHOTHER)}


function chai() {
  console.log("DB CONNETCED");
}
chai();//ISKO NAHI KEHTE HUM IIFE NAHI TO TUM YE MANLO KI FUNCTION DECLARATION KE VERY NEXT LINE MEIN CALL KRDDO😅
*/

//SYNTAX OF IIFE->
(function chai() {
  //NAMED IIFE
  console.log("DB CONNECTED");
})();//SEMI COLON IS MUST FOR ENDING THE IIFE🔴// NAHI DALA TO AGLA ANE WALA IIFE WILL GIVE AN ERROR.
//APNE MAIN FUNCTION KO AS A VARIABLE TREAT KRKE USKO PARANTHESIS MEIN BAND KRDO AND USKO CALL KRNE KE LIYE USKE JUST BADME MEIN CALL KRNE KE LIYE BHI ADDITIONALLY 1 PAIR OF PARANTHESIS LAGADO

//UNNAMED IIFE
((a,b) => {
    console.log("SUM = ",a+b);
})(439,9);