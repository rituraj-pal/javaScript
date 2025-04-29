const name="rituraj"
const repoCount=100

console.log(name + repoCount+"=name+repoCount");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName =new String ("rituraj")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('u'));

const newString=gameName.substring(0,5);
console.log(newString);

const anotherString=gameName.slice(-8,4);
console.log(anotherString)

const newStringOne="   rituraj     "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('hites'))

// for string to arrar
// console.log(gameName.split('-'))