let myArr = [0, 1, 2, 3, 4, 5];
// console.log("A", myArr);
// *****************ARRAYS MEIN JAB BHI COPY OPERATION HOGA TABHI HUM USME SHALLOW(ADDRESS WALI) COPIES BANAYENGE***************
let myArr2 = new Array(5, 4, 3, 2, 1, 0);

// myArr.push(6);
// console.log("B", myArr);

// myArr.pop();
// console.log("C", myArr);

// console.log("A", myArr2);

// myArr2.unshift(-1); //YE ARRAY KE START ME GIVEN ELEMENT ADD KAREGA BINA ARRAY MEIN CHED CHAD KRTE HUYE
// console.log("B", myArr2);

// myArr2.shift(); //YE ARRAY KE START SE FIRST ELEMENT KO REMOVE KAREGA
// console.log("C", myArr2);

// console.log(myArr.includes(4))
// console.log(myArr.indexOf(4))

// let newArray = myArr.join();//YE ARRAY KE ELEMENTS KO STRING MEIN CONVERT KAREGA
// console.log(myArr)
// console.log(newArray)
// console.log(typeof newArray)

// *******IMPORTANT**********
// SLICE AND SPLICE
// ***********{SPLICE OPERATION MANUPULATED THE ORIGINAL ARRAY WHILE SLICE DOES NOT}***********

// SLICING -> IT JUST CREATES A NEW ARRAY FROM GIVEN I INDEX TO J-1 INDEX i.e myArr,SLICE(I,J)
console.log("Original Array:", myArr);
let slicedArray = myArr.slice(1, 4);
console.log("Original Array:", myArr);
console.log("Sliced Array:", slicedArray);

// SPLICING -> IT JUST CUTT OUT A NEW ARRAY FROM GIVEN I INDEX TO J-1 INDEX AND THE ELEMENTS FROM I TO J-1 IN THE MAIN ARRAY WILL ALSO BE EXTRACTED i.e myArr,SLICE(I,J)
console.log("Original Array:", myArr);
let splicedArray = myArr.slice(1, 4);
console.log("Original Array:", myArr);
console.log("Sliced Array:", splicedArray);
