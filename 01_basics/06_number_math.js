const score=300
console.log(score)

const balance=new Number(1000)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber=123.4966
console.log(otherNumber.toPrecision(3));

const hundreds=1000
console.log(hundreds.toLocaleString('en-IN'))

let max=Number.MAX_VALUE
console.log(max);
let min=Number.MIN_VALUE
console.log(min);

console.log("************************************************************************");



console.log(Math.max(2,5,6,9));
console.log(Math.min(2,5,6,9));
console.log(Math.floor(4.8));
console.log(Math.ceil(4.3));
console.log(Math.round(4.2));
console.log(Math.abs(-100));

console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor((Math.random()*10) +1));

const maxValue=20
const minValue=10
console.log(Math.floor((Math.random())*(max-min) +1))