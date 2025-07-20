const name = "hitesh";
const repoCount = 50;
console.log(name + " has " + repoCount + " repositories"); //this syntax will be ignored
console.log(`${name} has ${repoCount} reposittories`); //this syntax will be used and this syntax will be mostly used(with bacticks)

// another type of declaration of string
const user = new String("Hitesh");
console.log(user[0]);
console.log(user.__proto__); // this will give the prototype of the string object
console.log(user.length);
const tempString = user.substring(0, 4); //user.substring(-ve value,+ve value)//it will assume it as user.substring(0,4) and will not give any error
console.log(tempString); // this will give the substring from index 0 to 3

const temopraryString = user.slice(0, 4); //user.substring(-ve value,+ve value)//it will start taking values form last.
console.log(temopraryString); // this will give the substring from index 0 to 3

const newString = "   BHOOVIII   ";
console.log(newString);
console.log(newString.trim()); // this will remove the spaces from the start and end of the string

const url = "https://www.hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20", "-"));
