const x = 900;
console.log(x);
const num = new Number(100); //number hi chahiye
console.log(num);
console.log(num.toFixed(2));
const number = 1234.4567;
console.log(number.toPrecision(6)); // 1234.46

const hundereds = 100000000;
console.log(hundereds.toLocaleString()); // 100,000,000
console.log(hundereds.toLocaleString("en-IN")); // 10,00,00,000
console.log(hundereds.toLocaleString("es-US")); // 100.000.000