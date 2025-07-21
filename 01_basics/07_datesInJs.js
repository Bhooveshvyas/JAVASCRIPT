let myDate = new Date();
// console.log(myDate); // Current date and time
// console.log(myDate.getDate());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// let myCreatedDate = new Date(2023,0,23);
let myCreatedDate = new Date("01-14-2023");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); // Current timestamp in milliseconds since 1970-01-01T00:00:00Z
console.log(myCreatedDate.getTime());
console.log(myTimeStamp); //my time satmp(current);
console.log(Math.floor(myTimeStamp / 1000)); //converted into seconds)

myDate.toLocaleString("default", {
  weekday: "long",
});